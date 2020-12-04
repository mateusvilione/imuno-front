import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthRepository } from './auth-repository';
import { Message, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  jwtPayload: any;

  mensagem: Message[] = [];

  constructor(
    public repository: AuthRepository,
    private messageService: MessageService,
    private router: Router
  ) {
    this.carregarToken();
    this.carregarId();
  }

  login(login: string, senha: string) {
    return this.repository.postLogin(login, senha).subscribe((resposta) => {
      this.messageService.add({
        key: 'toast',
        severity: 'success',
        summary: 'Bem-vindo',
      });
      const json: JSON = JSON.parse(JSON.stringify(resposta));
      console.log(json);
      this.armazenarToken(json['access_token']);

      console.log(
        'Novo access token criado!' + JSON.stringify(this.jwtPayload)
      );

      if (this.temPermissao('DH01')) {
        this.armazenarId(json['administrador_id']);
        this.router.navigate(['/dashboard-admin']);
      }

      if (this.temPermissao('DH02')) {
        this.armazenarId(json['funcionario_id']);
        this.router.navigate(['/vacinar']);
      }

      if (this.temPermissao('DH03')) {
        this.armazenarId(json['paciente_id']);
        this.router.navigate(['/caderneta']);
      }
    },
    (e) => {

      this.messageService.add({
        key: 'toast',
        severity: 'error',
        summary: 'ERRO',
        detail: e.error.error_description,
      });

    }
  );
  }

  private armazenarToken(token: string) {
    this.jwtPayload = JSON.parse(atob(token.split('.')[1]));

    localStorage.setItem('token', token);
  }

  private armazenarId(id: string) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa' + id);
    localStorage.setItem('usuarioId', id);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  private carregarId() {
    const id = localStorage.getItem('usuarioId');

    if (id) {
      this.armazenarId(id);
    }
  }

  public showId() {
    return localStorage.getItem('usuarioId');
  }

  logout() {
    return this.repository.postLogout().subscribe(
      (resposta) => {
        this.limparAccessToken();
        this.limparAccessId();
        this.router.navigate(['/login']);
      },
      (e) => {
        console.log(e.error.error_description);
      }
    );
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  limparAccessId() {
    localStorage.removeItem('usuarioId');
    this.jwtPayload = null;
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.isTokenExpired();
  }

  isTokenExpired() {
    this.repository.postCheckToken().subscribe(
      (resposta) => {
        const json: JSON = JSON.parse(JSON.stringify(resposta));
        if (json['active']) {
          return false;
        }
      },
      (e) => {
        this.obterNovoAccessToken();
      }
    );
  }

  obterNovoAccessToken() {
    return this.repository.postRefreshToken().subscribe(
      (resposta) => {
        const json: JSON = JSON.parse(JSON.stringify(resposta));
        this.armazenarToken(json['access_token']);
        console.log(
          'Novo access token criado pelo refresh token! ' +
          JSON.stringify(this.jwtPayload)
        );
      },
      (e) => {
        console.log(e.error.error_description);
        this.logout();
        this.router.navigate(['/login']);
      }
    );
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }
}

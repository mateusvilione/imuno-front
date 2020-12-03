import { Router } from '@angular/router';
import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuario: string = '';
  id: number = 0;

  constructor(public service: AuthService) {
    this.usuario = service.jwtPayload ? service.jwtPayload.nome_completo : '';

    if(service.jwtPayload.paciente_id !== null && service.jwtPayload.paciente_id !== undefined)
      this.id = service.jwtPayload ? service.jwtPayload.paciente_id : 0;

    if(service.jwtPayload.funcionario_id !== null && service.jwtPayload.funcionario_id !== undefined)
      this.id = service.jwtPayload ? service.jwtPayload.funcionario_id : 0;

    if(service.jwtPayload.administrador_id !== null && service.jwtPayload.administrador_id !== undefined)
      this.id = service.jwtPayload ? service.jwtPayload.administrador_id : 0;

  }

  ngOnInit(): void {
  }

  logout() {
    this.service.logout();
  }
}

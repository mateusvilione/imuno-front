import { Observable } from 'rxjs';
import { PostoAllModel } from './../posto/model/posto-model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/seguranca/auth.service';
import { PostoRepository } from '../posto/repository/posto-repository';

@Component({
  selector: 'app-tabela-posto',
  templateUrl: './tabela-posto.component.html',
  styleUrls: ['./tabela-posto.component.css']
})
export class TabelaPostoComponent implements OnInit {
  postos: PostoAllModel[] = [];

  constructor(
    private repository: PostoRepository,
    public service: AuthService
  ) {}

  ngOnInit() {
    this.carregarPostos();
  }

  carregarPostos() {
    this.repository.getAllPostos(parseInt(this.service.showId())).subscribe((resposta) => {
      console.log(resposta);
      this.postos.push(resposta);
    });
  }
}

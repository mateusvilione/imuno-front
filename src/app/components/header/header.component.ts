import { Component, Input, OnInit } from '@angular/core';
import { LoginPacienteComponent } from 'src/app/pages/login-paciente/login-paciente.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  caminho: string

  @Input()
  caminhoLogout: string

  constructor() { }

  ngOnInit(): void {
  }



}

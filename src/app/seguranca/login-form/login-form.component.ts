import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public formulario: FormGroup;

  public submitted: boolean = false;

  constructor(
    private service: AuthService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      login: ['', Validators.required],
      senha: ['', [Validators.required]]
    });
  }

  logar() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    const login = this.formulario.value.login;
    const senha = this.formulario.value.senha;

    this.service.login(login, senha);
  }
}


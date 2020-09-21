import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPacienteComponent } from './pages/login-paciente/login-paciente.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFuncionarioComponent } from './pages/login-funcionario/login-funcionario.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { CadastrarPacienteComponent } from './pages/cadastrar-paciente/cadastrar-paciente.component';
import { CadernetaVacinacaoComponent } from './pages/caderneta-vacinacao/caderneta-vacinacao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPacienteComponent,
    HeaderComponent,
    LoginFuncionarioComponent,
    LoginAdminComponent,
    CadastrarPacienteComponent,
    CadernetaVacinacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

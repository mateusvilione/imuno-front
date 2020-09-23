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
import { CadastrarCampanhaComponent } from './pages/cadastrar-campanha/cadastrar-campanha.component';
import { CadastrarFuncionarioComponent } from './pages/cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarPerfilPacienteComponent } from './pages/editar-perfil-paciente/editar-perfil-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPacienteComponent,
    HeaderComponent,
    LoginFuncionarioComponent,
    LoginAdminComponent,
    CadastrarPacienteComponent,
    CadernetaVacinacaoComponent,
    CadastrarCampanhaComponent,
    CadastrarFuncionarioComponent,
    EditarPerfilPacienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

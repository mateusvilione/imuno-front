import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { LoginPacienteComponent } from './pages/login-paciente/login-paciente.component';
import { LoginFuncionarioComponent } from './pages/login-funcionario/login-funcionario.component';
import { CadastrarPacienteComponent } from './pages/cadastrar-paciente/cadastrar-paciente.component';
import { CadernetaVacinacaoComponent } from './pages/caderneta-vacinacao/caderneta-vacinacao.component';
import { CadastrarCampanhaComponent } from './pages/cadastrar-campanha/cadastrar-campanha.component';
import { CadastrarFuncionarioComponent } from './pages/cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarPerfilPacienteComponent } from './pages/editar-perfil-paciente/editar-perfil-paciente.component';



const routes: Routes = [
  { path: '', component: LoginPacienteComponent },
  { path: 'admin', component: LoginAdminComponent },
  { path: 'funcionario', component: LoginFuncionarioComponent },
  { path: 'caderneta-vacinacao', component: CadernetaVacinacaoComponent },
  { path: 'editar/perfil', component: EditarPerfilPacienteComponent },
  { path: 'cadastro/paciente', component: CadastrarPacienteComponent },
  { path: 'cadastro/campanha', component: CadastrarCampanhaComponent },
  { path: 'cadastro/funcionario', component: CadastrarFuncionarioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { LoginPacienteComponent } from './pages/login-paciente/login-paciente.component';
import { LoginFuncionarioComponent } from './pages/login-funcionario/login-funcionario.component';
import { CadastrarPacienteComponent } from './pages/paciente/cadastrar-paciente/cadastrar-paciente.component';
import { CadernetaVacinacaoComponent } from './pages/caderneta-vacinacao/caderneta-vacinacao.component';
import { CadastrarCampanhaComponent } from './pages/cadastrar-campanha/cadastrar-campanha.component';
import { CadastrarFuncionarioComponent } from './pages/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { CadastrarPostoComponent } from './pages/posto/cadastrar-posto/cadastrar-posto.component';
import { EditarPerfilPacienteComponent } from './pages/paciente/editar-perfil-paciente/editar-perfil-paciente.component';
import { EditarPerfilFuncionarioComponent } from './pages/funcionario/editar-perfil-funcionario/editar-perfil-funcionario.component';
import { VacinarComponent } from './pages/vacinar/vacinar.component';
import { DashboardFuncionarioComponent } from './pages/dashboard-funcionario/dashboard-funcionario.component';
import { CadastrarLoteVacinaComponent } from './pages/cadastrar-lote-vacina/cadastrar-lote-vacina.component';
import { CampanhaVacinacaoComponent } from './pages/campanha-vacinacao/campanha-vacinacao.component';
import { DashboardPacienteComponent } from './pages/dashboard-paciente/dashboard-paciente.component';



const routes: Routes = [
  { path: '', component: LoginPacienteComponent },
  { path: 'admin', component: LoginAdminComponent },
  { path: 'funcionario', component: LoginFuncionarioComponent },
  { path: 'caderneta-vacinacao', component: CadernetaVacinacaoComponent },
  { path: 'editar/perfil/paciente/:codigo', component: EditarPerfilPacienteComponent },
  { path: 'editar/perfil/funcionario/:codigo', component: EditarPerfilFuncionarioComponent },
  { path: 'cadastro/paciente', component: CadastrarPacienteComponent },
  { path: 'cadastro/campanha', component: CadastrarCampanhaComponent },
  { path: 'cadastro/posto', component: CadastrarPostoComponent },
  { path: 'cadastro/funcionario', component: CadastrarFuncionarioComponent },
  { path: 'vacinar', component: VacinarComponent},
  { path: 'dashboard-funcionario', component: DashboardFuncionarioComponent},
  { path: 'cadastro-lote-vacina', component: CadastrarLoteVacinaComponent},
  { path: 'campanha-vacinacao', component: CampanhaVacinacaoComponent},
  { path: 'dashboard-paciente', component: DashboardPacienteComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

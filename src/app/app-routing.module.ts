import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { LoginPacienteComponent } from './pages/login-paciente/login-paciente.component';
import { LoginFuncionarioComponent } from './pages/login-funcionario/login-funcionario.component';
import { CadastrarPacienteComponent } from './pages/paciente/cadastrar-paciente/cadastrar-paciente.component';
import { CadernetaVacinacaoComponent } from './pages/caderneta-vacinacao/caderneta-vacinacao.component';
import { CadastrarFuncionarioComponent } from './pages/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { CadastrarPostoComponent } from './pages/posto/cadastrar-posto/cadastrar-posto.component';
import { EditarPerfilPacienteComponent } from './pages/paciente/editar-perfil-paciente/editar-perfil-paciente.component';
import { EditarPerfilFuncionarioComponent } from './pages/funcionario/editar-perfil-funcionario/editar-perfil-funcionario.component';
import { VacinarComponent } from './pages/vacinar/vacinar.component';
import { DashboardFuncionarioComponent } from './pages/dashboard-funcionario/dashboard-funcionario.component';
import { DashboardPacienteComponent } from './pages/dashboard-paciente/dashboard-paciente.component';
import { VacinaComponent } from './pages/vacina/vacina.component';
import { CadastrarLoteComponent } from './pages/lote/cadastrar-lote/cadastrar-lote.component';
import { EditarLoteComponent } from './pages/lote/editar-lote/editar-lote.component';
import { EditarPostoComponent } from './pages/posto/editar-posto/editar-posto.component';

const routes: Routes = [
  { path: '', component: LoginPacienteComponent },
  { path: 'login/admin', component: LoginAdminComponent },
  { path: 'login/funcionario', component: LoginFuncionarioComponent },

  { path: 'dashboard-funcionario', component: DashboardFuncionarioComponent},
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: 'dashboard-paciente', component: DashboardPacienteComponent },

  { path: 'vacinar', component: VacinarComponent},

  { path: 'caderneta', component: CadernetaVacinacaoComponent },

  { path: 'vacina', component: VacinaComponent },

  { path: 'lote', component: CadastrarLoteComponent },
  { path: 'lote/:codigo', component: EditarLoteComponent },

  { path: 'posto', component: CadastrarPostoComponent },
  { path: 'posto/:codigo', component: EditarPostoComponent },

  { path: 'paciente', component: CadastrarPacienteComponent },
  { path: 'paciente/:codigo', component: EditarPerfilPacienteComponent },

  { path: 'funcionario', component: CadastrarFuncionarioComponent },
  { path: 'funcionario/:codigo', component: EditarPerfilFuncionarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { CadastrarVacinaComponent } from './pages/vacina/cadastrar-vacina/cadastrar-vacina.component';
import { EditarVacinaComponent } from './pages/vacina/editar-vacina/editar-vacina.component';
import { TabelaLotesComponent } from './pages/tabela-lotes/tabela-lotes.component';
import { TabelaVacinasComponent } from './pages/tabela-vacinas/tabela-vacinas.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarPacienteComponent } from './pages/paciente/cadastrar-paciente/cadastrar-paciente.component';
import { CadernetaVacinacaoComponent } from './pages/caderneta-vacinacao/caderneta-vacinacao.component';
import { CadastrarFuncionarioComponent } from './pages/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { CadastrarPostoComponent } from './pages/posto/cadastrar-posto/cadastrar-posto.component';
import { EditarPerfilPacienteComponent } from './pages/paciente/editar-perfil-paciente/editar-perfil-paciente.component';
import { EditarPerfilFuncionarioComponent } from './pages/funcionario/editar-perfil-funcionario/editar-perfil-funcionario.component';
import { VacinarComponent } from './pages/vacinar/vacinar.component';
import { DashboardFuncionarioComponent } from './pages/dashboard-funcionario/dashboard-funcionario.component';
import { DashboardPacienteComponent } from './pages/dashboard-paciente/dashboard-paciente.component';
import { CadastrarLoteComponent } from './pages/lote/cadastrar-lote/cadastrar-lote.component';
import { EditarLoteComponent } from './pages/lote/editar-lote/editar-lote.component';
import { EditarPostoComponent } from './pages/posto/editar-posto/editar-posto.component';
import { AuthGuard } from './seguranca/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard-funcionario', component: DashboardFuncionarioComponent, canActivate: [AuthGuard],
    data: { roles: ['DH02'] }
  },
  {
    path: 'dashboard-admin', component: DashboardAdminComponent, canActivate: [AuthGuard],
    data: { roles: ['DH01'] }
  },
  {
    path: 'vacinas', component: TabelaVacinasComponent, canActivate: [AuthGuard],
    data: { roles: ['DH01'] }
  },
  {
    path: 'lotes', component: TabelaLotesComponent, canActivate: [AuthGuard],
    data: { roles: ['DH01'] }
  },
  {
    path: 'dashboard-paciente', component: DashboardPacienteComponent, canActivate: [AuthGuard],
    data: { roles: ['DH03'] }
  },
  {
    path: 'vacinar', component: VacinarComponent, canActivate: [AuthGuard],
    data: { roles: ['DH02'] }
  },
  {
    path: 'caderneta', component: CadernetaVacinacaoComponent, canActivate: [AuthGuard],
    data: { roles: ['DH03'] }
  },
  {
    path: 'vacina', component: CadastrarVacinaComponent, canActivate: [AuthGuard],
    data: { roles: ['DH01'] }
  },
  {
    path: 'vacina/:codigo', component: EditarVacinaComponent, canActivate: [AuthGuard],
    data: { roles: ['DH01'] }
  },
  {
    path: 'lote', component: CadastrarLoteComponent, canActivate: [AuthGuard],
    data: { roles: ['DH01'] }
  },
  {
    path: 'lote/:codigo', component: EditarLoteComponent, canActivate: [AuthGuard],
    data: { roles: ['DH01'] }
  },
  {
    path: 'posto', component: CadastrarPostoComponent, canActivate: [AuthGuard],
    data: { roles: ['DH01'] }
  },
  {
    path: 'posto/:codigo', component: EditarPostoComponent, canActivate: [AuthGuard],
    data: { roles: ['DH01'] }
  },
  {
    path: 'paciente/:codigo', component: EditarPerfilPacienteComponent, canActivate: [AuthGuard],
    data: { roles: ['DH03'] }
  },
  {
    path: 'funcionario', component: CadastrarFuncionarioComponent, canActivate: [AuthGuard],
    data: { roles: ['DH01'] }
  },
  {
    path: 'funcionario/:codigo', component: EditarPerfilFuncionarioComponent, canActivate: [AuthGuard],
    data: { roles: ['DH02'] }
  },
  {
    path: 'paciente', component: CadastrarPacienteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { PostoModel } from './../../posto/model/posto-model';
import { VacinaModel } from '../../vacina/model/vacina-model';

export interface LoteModel {
  id?: number;
  administradorId?: number;
  codigo?: string;
  dataEntrada?: string;
  dataFabricacao?: string;
  dataValidade?: string;
  postoId?: number;
  quantidade?: number;
  vacinaId?: number;
}


export interface LoteAllModel {
  id?: number;
  administrador?: AdministradorModel;
  codigo?: string;
  dataEntrada?: string;
  dataFabricacao?: string;
  dataValidade?: string;
  posto?: PostoModel;
  quantidade?: number;
  vacina?: VacinaModel;
}

export interface AdministradorModel {
  id?: number;
  email?: string;
  cpf?: string;
  nome?: string;
}


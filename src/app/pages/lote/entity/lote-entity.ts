import { PostoEntity } from './../../posto/entity/posto-entity';
import { VacinaEntity } from './../../vacina/entity/vacina-entity';
export interface LoteEntity {
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


export interface LoteAllEntity {
  id?: number;
  administrador?: AdministradorEntity;
  codigo?: string;
  dataEntrada?: string;
  dataFabricacao?: string;
  dataValidade?: string;
  posto?: PostoEntity;
  quantidade?: number;
  vacina?: VacinaEntity;
}


export interface AdministradorEntity {
  id?: number;
  email?: string;
  cpf?: string;
  nome?: string;
}


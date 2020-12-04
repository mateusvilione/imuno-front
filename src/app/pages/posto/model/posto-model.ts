export interface PostoModel {
  id?: number;
  nome?: string;
  cnes?: string;
  telefone?: string;
  endereco?: EnderecoModel;
  administradorId?: number;
}

export interface EnderecoModel {
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
}


export interface PostoAllModel {
  id?: number;
  nome?: string;
  cnes?: string;
  telefone?: string;
  endereco?: EnderecoModel;
  administrador?: AdministradorModel;
}

export interface AdministradorModel {
  id?: number;
  email?: string;
  cpf?: string;
  nome?: string;
  senha?: string;
  usuarioId?: UsuarioModel[];
}

export interface UsuarioModel {
  id?: number;
  nome?: string;
  email?: string;
  senha?: string;
  grupos?: GrupoModel[];
  administradorId?: number;
  pacienteId?: number;
  funcionarioId?: number;
}

export interface GrupoModel {
  id?: number;
  nome?: string;
  premissoes?: PermissoesModel[];
}

export interface PermissoesModel {
  id?: number;
  nome?: string;
  descricao?: string;
}

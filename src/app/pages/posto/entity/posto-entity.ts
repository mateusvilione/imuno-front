export interface PostoEntity {
  id?: number;
  nome?: string;
  cnes?: string;
  telefone?: string;
  endereco?: EnderecoEntity;
  administradorId?: number;
}

export interface EnderecoEntity {
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
}

export interface PostoAllEntity {
  id?: number;
  nome?: string;
  cnes?: string;
  telefone?: string;
  endereco?: EnderecoEntity;
  administrador?: AdministradorEntity;
}

export interface AdministradorEntity {
  id?: number;
  email?: string;
  cpf?: string;
  nome?: string;
  senha?: string;
  usuarioId?: UsuarioEntity[];
}

export interface UsuarioEntity {
  id?: number;
  nome?: string;
  email?: string;
  senha?: string;
  grupos?: GrupoEntity[];
  administradorId?: number;
  pacienteId?: number;
  funcionarioId?: number;
}

export interface GrupoEntity {
  id?: number;
  nome?: string;
  premissoes?: PermissoesEntity[];
}

export interface PermissoesEntity {
  id?: number;
  nome?: string;
  descricao?: string;
}

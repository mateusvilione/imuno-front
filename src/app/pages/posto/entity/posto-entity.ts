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

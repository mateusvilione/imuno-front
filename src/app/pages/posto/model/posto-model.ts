export interface PostoModel {
  id?: number;
  nome?: string;
  cnpjRne?: string;
  telefone?: string;
  email?: string;
  senha?: string;
  endereco?: EnderecoEntity;
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

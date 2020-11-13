export interface PacienteEntity {
  id?: number;
  nome?: string;
  dataNascimento?: string;
  genero?: string;
  cpfRne?: string;
  nomeMae?: string;
  nomePai?: string;
  nacionalidade?: string;
  telefone?: string;
  telefoneEmergencia?: string;
  email?: string;
  senha?: string;
  cartaoSus?: string;
  usuarioId?: string;
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

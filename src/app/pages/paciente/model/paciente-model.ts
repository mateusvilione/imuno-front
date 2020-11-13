export interface PacienteModel {
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
  endereco?: EnderecoEntity;
  usuarioId?: string;
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

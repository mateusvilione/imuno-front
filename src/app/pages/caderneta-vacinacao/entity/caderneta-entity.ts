export interface CadernetaEntity {
  id?: number;
  lote?: LoteEntity;
  funcionario?: FuncionarioEntity;
  vacina?: VacinaEntity;
  dose?: string;
  paciente?: PacienteEntity;
  dataVacinacao?: string;
  posto?: PostoEntity;
}

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

export interface FuncionarioEntity {
  id?: number;
  nome?: string;
  cpf?: string;
  coren?: string;
  endereco?: EnderecoEntity;
  email?: string;
  telefone?: string;
  telefoneEmergencia?: string;
  senha?: string;
  usuarioId?: string;
}

export interface VacinaEntity {
  id?: number;
  nome?: string;
  prevencao?: string;
}

export interface PacienteEntity {
  id?: number;
  nome?: string;
  dataNascimento?: string;
  genero?: string;
  cpfRne?: string;
  nomeMae?: string;
  nomePai?: string;
  telefone?: string;
  telefoneEmergencia?: string;
  email?: string;
  senha?: string;
  cartaoSus?: string;
  usuarioId?: string;
  endereco?: EnderecoEntity;
}

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

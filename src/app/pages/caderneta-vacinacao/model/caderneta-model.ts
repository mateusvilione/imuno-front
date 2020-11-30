export interface CadernetaModel {
  id?: number;
  lote?: LoteModel;
  funcionario?: FuncionarioModel;
  vacina?: VacinaModel;
  dose?: string;
  paciente?: PacienteModel;
  dataVacinacao?: string;
  posto?: PostoModel;
}

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

export interface FuncionarioModel {
  id?: number;
  nome?: string;
  cpf?: string;
  coren?: string;
  endereco?: EnderecoModel;
  email?: string;
  telefone?: string;
  telefoneEmergencia?: string;
  senha?: string;
  usuarioId?: string;
}

export interface VacinaModel {
  id?: number;
  nome?: string;
  prevencao?: string;
}

export interface PacienteModel {
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
  endereco?: EnderecoModel;
}

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

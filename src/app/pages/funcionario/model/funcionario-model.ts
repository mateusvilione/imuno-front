export interface FuncionarioModel{
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

export interface EnderecoModel {
    logradouro?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
}

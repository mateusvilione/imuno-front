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
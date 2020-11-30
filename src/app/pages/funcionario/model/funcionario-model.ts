import { PostoModel } from './../../posto/model/posto-model';
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
    postoId?: number;
}

export interface FuncionarioCompletoModel{
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
    posto?: PostoModel;
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

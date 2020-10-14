import { FuncionarioModel } from './../model/funcionario-model';
import { FuncionarioEntity } from './../entity/funcionario-entity';
import { Mapper } from './../../../../app/base/mapper';

export class FuncionarioMapper extends Mapper<FuncionarioEntity, FuncionarioModel> {

    mapFrom(param: FuncionarioEntity): FuncionarioModel {
        return {
            id: param.id,
            nome: param.nome,
            cpf: param.cpf,
            coren: param.coren,
            endereco: param.endereco,
            email: param.email,
            telefone: param.telefone,
            telefoneEmergencia: param.telefoneEmergencia,
            senha: param.senha
        };
    }

    mapTo(param: FuncionarioModel): FuncionarioEntity {
        return {
            id: param.id,
            nome: param.nome,
            cpf: param.cpf,
            coren: param.coren,
            endereco: param.endereco,
            email: param.email,
            telefone: param.telefone,
            telefoneEmergencia: param.telefoneEmergencia,
            senha: param.senha
        };
    }
}
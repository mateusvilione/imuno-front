import {
  FuncionarioModel,
  FuncionarioCompletoModel,
} from './../model/funcionario-model';
import {
  FuncionarioEntity,
  FuncionarioCompletoEntity,
} from './../entity/funcionario-entity';
import { Mapper } from './../../../../app/base/mapper';

export class FuncionarioMapper extends Mapper<
  FuncionarioEntity,
  FuncionarioModel
> {
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
      senha: param.senha,
      postoId: param.postoId,
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
      senha: param.senha,
      postoId: param.postoId,
    };
  }

  mapFrom2(param: FuncionarioCompletoEntity): FuncionarioCompletoModel {
    return {
      id: param.id,
      nome: param.nome,
      cpf: param.cpf,
      coren: param.coren,
      endereco: param.endereco,
      email: param.email,
      telefone: param.telefone,
      telefoneEmergencia: param.telefoneEmergencia,
      senha: param.senha,
      posto: param.posto,
    };
  }
}

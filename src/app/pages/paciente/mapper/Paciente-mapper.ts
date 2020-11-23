import { PacienteModel } from './../model/paciente-model';
import { PacienteEntity } from './../entity/paciente-entity';
import { Mapper } from './../../../../app/base/mapper';

export class PacienteMapper extends Mapper<PacienteEntity, PacienteModel> {

    mapFrom(param: PacienteEntity): PacienteModel {
        return {
          id: param.id,
          nome: param.nome ? param.nome : '',
          dataNascimento: param.dataNascimento,
          genero: param.genero,
          cpfRne: param.cpfRne,
          nomeMae: param.nomeMae,
          nomePai: param.nomePai,
          telefone: param.telefone,
          telefoneEmergencia: param.telefoneEmergencia,
          email: param.email,
          senha: param.senha,
          cartaoSus: param.cartaoSus,
          endereco: param.endereco
        };
    }

    mapTo(param: PacienteModel): PacienteEntity {
        return {
          id: param.id,
          nome: param.nome,
          dataNascimento: param.dataNascimento,
          genero: param.genero,
          cpfRne: param.cpfRne,
          nomeMae: param.nomeMae,
          nomePai: param.nomePai,
          telefone: param.telefone,
          telefoneEmergencia: param.telefoneEmergencia,
          email: param.email,
          senha: param.senha,
          cartaoSus: param.cartaoSus,
          endereco: param.endereco
        };
    }
}

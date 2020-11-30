import { CadernetaModel } from '../model/caderneta-model';
import { CadernetaEntity } from './../entity/caderneta-entity';
import { Mapper } from '../../../base/mapper';
import { FnParam } from '@angular/compiler/src/output/output_ast';

export class CadernetaMapper extends Mapper<CadernetaEntity, CadernetaModel> {
  mapFrom(param: CadernetaEntity): CadernetaModel {
    return {
      id: param.id,
      lote: param.lote,
      funcionario: param.funcionario,
      vacina: param.vacina,
      dose: param.dose,
      paciente: param.paciente,
      dataVacinacao: param.dataVacinacao,
      posto: param.posto
    };
  }

  mapTo(param: CadernetaModel): CadernetaEntity {
    return {
      id: param.id,
      lote: param.lote,
      funcionario: param.funcionario,
      vacina: param.vacina,
      dose: param.dose,
      paciente: param.paciente,
      dataVacinacao: param.dataVacinacao,
      posto: param.posto
    };
  }
}

import { VacinarModel } from '../model/vacinar-model';
import { VacinarEntity } from './../entity/vacinar-entity';
import { Mapper } from '../../../base/mapper';
import { FnParam } from '@angular/compiler/src/output/output_ast';

export class VacinarMapper extends Mapper<VacinarEntity, VacinarModel> {
  mapFrom(param: VacinarEntity): VacinarModel {
    return {
      id: param.id,
      dataVacinacao: param.dataVacinacao,
      doseId: param.doseId,
      funcionarioId: param.funcionarioId,
      loteId: param.loteId,
      pacienteId: param.pacienteId,
      vacinaId: param.vacinaId
    };
  }

  mapTo(param: VacinarModel): VacinarEntity {
    return {
      id: param.id,
      dataVacinacao: param.dataVacinacao,
      doseId: param.doseId,
      funcionarioId: param.funcionarioId,
      loteId: param.loteId,
      pacienteId: param.pacienteId,
      vacinaId: param.vacinaId
    };
  }
}

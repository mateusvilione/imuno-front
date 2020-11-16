import { VacinaModel } from '../model/vacina-model';
import { VacinaEntity } from './../entity/vacina-entity';
import { Mapper } from '../../../base/mapper';

export class VacinaMapper extends Mapper<VacinaEntity, VacinaModel> {

    mapFrom(param: VacinaEntity): VacinaModel {
        return {
          id: param.id,
          nome: param.nome ? param.nome : '',
          prevencao: param.prevencao
        };
    }

    mapTo(param: VacinaModel): VacinaEntity {
        return {
          id: param.id,
          nome: param.nome ? param.nome : '',
          prevencao: param.prevencao
        };
    }
}

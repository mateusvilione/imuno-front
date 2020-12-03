import { LoteAllModel } from './../model/lote-model';
import { LoteModel } from '../model/lote-model';
import { LoteAllEntity, LoteEntity } from './../entity/lote-entity';
import { Mapper } from '../../../base/mapper';

export class LoteMapper extends Mapper<LoteEntity, LoteModel> {

    mapFrom(param: LoteEntity): LoteModel {
        return {
          id: param.id,
          administradorId: param.administradorId,
          codigo: param.codigo,
          dataEntrada: param.dataEntrada,
          dataFabricacao: param.dataFabricacao,
          dataValidade: param.dataValidade,
          postoId: param.postoId,
          quantidade: param.quantidade,
          vacinaId: param.vacinaId
        };
    }

    mapTo(param: LoteModel): LoteEntity {
        return {
          id: param.id,
          administradorId: param.administradorId,
          codigo: param.codigo,
          dataEntrada: param.dataEntrada,
          dataFabricacao: param.dataFabricacao,
          dataValidade: param.dataValidade,
          postoId: param.postoId,
          quantidade: param.quantidade,
          vacinaId: param.vacinaId
        };
    }

    mapFromAll(param: LoteAllEntity): LoteAllModel {
      return {
        id: param.id,
        administrador: param.administrador,
        codigo: param.codigo,
        dataEntrada: param.dataEntrada,
        dataFabricacao: param.dataFabricacao,
        dataValidade: param.dataValidade,
        posto: param.posto,
        quantidade: param.quantidade,
        vacina: param.vacina
      };
  }

  mapToAll(param: LoteAllModel): LoteAllEntity {
      return {
        id: param.id,
        administrador: param.administrador,
        codigo: param.codigo,
        dataEntrada: param.dataEntrada,
        dataFabricacao: param.dataFabricacao,
        dataValidade: param.dataValidade,
        posto: param.posto,
        quantidade: param.quantidade,
        vacina: param.vacina
      };
  }
  }

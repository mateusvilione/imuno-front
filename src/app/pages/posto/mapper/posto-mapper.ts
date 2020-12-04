import { PostoModel, PostoAllModel } from '../model/posto-model';
import { PostoEntity, PostoAllEntity } from './../entity/posto-entity';
import { Mapper } from '../../../base/mapper';

export class PostoMapper extends Mapper<PostoEntity, PostoModel> {
  mapFrom(param: PostoEntity): PostoModel {
    return {
      id: param.id,
      administradorId: param.administradorId,
      nome: param.nome ? param.nome : '',
      cnes: param.cnes,
      telefone: param.telefone,
      endereco: param.endereco,
    };
  }

  mapTo(param: PostoModel): PostoEntity {
    return {
      id: param.id,
      administradorId: param.administradorId,
      nome: param.nome ? param.nome : '',
      cnes: param.cnes,
      telefone: param.telefone,
      endereco: param.endereco,
    };
  }

  mapFromAll(param: PostoAllEntity): PostoAllModel {
    return {
      id: param.id,
      administrador: param.administrador,
      nome: param.nome,
      cnes: param.cnes,
      telefone: param.telefone,
      endereco: param.endereco,
    };
  }

  mapToAll(param: PostoAllModel): PostoAllEntity {
    return {
      id: param.id,
      administrador: param.administrador,
      nome: param.nome,
      cnes: param.cnes,
      telefone: param.telefone,
      endereco: param.endereco,
    };
  }
}

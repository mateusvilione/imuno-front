import { PostoModel } from '../model/posto-model';
import { PostoEntity } from './../entity/posto-entity';
import { Mapper } from '../../../base/mapper';

export class PostoMapper extends Mapper<PostoEntity, PostoModel> {

    mapFrom(param: PostoEntity): PostoModel {
        return {
          id: param.id,
          administradorId: param.administradorId,
          nome: param.nome ? param.nome : '',
          cnes: param.cnes,
          telefone: param.telefone,
          endereco: param.endereco
        };
    }

    mapTo(param: PostoModel): PostoEntity {
        return {
          id: param.id,
          administradorId: param.administradorId,
          nome: param.nome ? param.nome : '',
          cnes: param.cnes,
          telefone: param.telefone,
          endereco: param.endereco
        };
    }
}

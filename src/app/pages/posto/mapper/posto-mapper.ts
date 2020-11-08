import { PostoModel } from '../model/posto-model';
import { PostoEntity } from './../entity/posto-entity';
import { Mapper } from '../../../base/mapper';

export class PostoMapper extends Mapper<PostoEntity, PostoModel> {

    mapFrom(param: PostoEntity): PostoModel {
        return {
          id: param.id,
          nome: param.nome ? param.nome : '',
          cnpjRne: param.cnpjRne,
          telefone: param.telefone,
          email: param.email,
          senha: param.senha,
          endereco: param.endereco
        };
    }

    mapTo(param: PostoModel): PostoEntity {
        return {
          id: param.id,
          nome: param.nome,
          cnpjRne: param.cnpjRne,
          telefone: param.telefone,
          email: param.email,
          senha: param.senha,
          endereco: param.endereco
        };
    }
}

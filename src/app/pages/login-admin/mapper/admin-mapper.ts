import { AdminModel } from '../model/admin-model';
import { AdminEntity } from './../entity/admin-entity';
import { Mapper } from '../../../base/mapper';

export class AdminMapper extends Mapper<AdminEntity, AdminModel> {

    mapFrom(param: AdminEntity): AdminModel {
        return {
            id: param.id,
            email: param.email,
            senha: param.senha
        };
    }

    mapTo(param: AdminModel): AdminEntity {
        return {
            id: param.id,
            email: param.email,
            senha: param.senha
        };
    }
}
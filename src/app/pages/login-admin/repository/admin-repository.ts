import { AdminEntity } from './../entity/admin-entity';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { AdminModel } from './../model/admin-model';
import { Observable } from 'rxjs';

import { AdminMapper } from './../mapper/admin-mapper';
import { Injectable } from '@angular/core';

import { BaseHttpService } from '../../../services/http/base-http.service';

@Injectable({
    providedIn: 'root',
})
export class AdminRepository {

    mapper = new AdminMapper();

    constructor(public http: BaseHttpService) { }

    getAdminById(id: number): Observable<AdminModel> {
        return this.http
          .getAll<AdminModel>(`${environment.URLSERVIDOR}admin/${id}`)
          .pipe(map((x) => this.mapper.mapFrom(x.data)));
      }

      postAdmin(param: AdminModel) {
        return this.http
          .post<AdminEntity>(`${environment.URLSERVIDOR}admin`, this.mapper.mapTo(param))
          .pipe(map((x) => this.mapper.mapFrom(x.data)));
      }

      putAdmin(param: AdminModel) {
        return this.http
          .put<void>(
            `${environment.URLSERVIDOR}admin/${param.id}`,
            this.mapper.mapTo(param)
          )
          .pipe(map((x) => x.data));
      }

      deleteAdmin(id: number): Observable<void> {
        return this.http
          .delete<void>(`${environment.URLSERVIDOR}admin/${id}`, id)
          .pipe(map((x) => x.data));
      }
}

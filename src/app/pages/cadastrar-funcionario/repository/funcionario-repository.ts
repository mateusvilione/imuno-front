import { FuncionarioEntity } from './../entity/funcionario-entity';
import { map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { FuncionarioModel } from './../model/funcionario-model';
import { Observable } from 'rxjs';

import { FuncionarioMapper } from './../mapper/funcionario-mapper';
import { Injectable } from '@angular/core';

import { BaseHttpService } from './../../../services/http/base-http.service';

@Injectable({
    providedIn: 'root',
})
export class FuncionarioRepository {
    
    mapper = new FuncionarioMapper();

    constructor(public http: BaseHttpService) { }

    getFuncionarioById(id: number): Observable<FuncionarioModel> {
        return this.http
          .getAll<FuncionarioModel>(`${environment.URLSERVIDOR}funcionario/${id}`)
          .pipe(map((x) => this.mapper.mapFrom(x.data)));
      }
    
      postFuncionario(param: FuncionarioModel) {
        return this.http
          .post<FuncionarioEntity>(`${environment.URLSERVIDOR}funcionario`, this.mapper.mapTo(param))
          .pipe(map((x) => this.mapper.mapFrom(x.data)));
      }
    
      putFuncionario(param: FuncionarioModel) {
        return this.http
          .put<void>(
            `${environment.URLSERVIDOR}funcionario/${param.id}`,
            this.mapper.mapTo(param)
          )
          .pipe(map((x) => x.data));
      }
    
      deleteFuncionario(id: number): Observable<void> {
        return this.http
          .delete<void>(`${environment.URLSERVIDOR}funcionario/${id}`, id)
          .pipe(map((x) => x.data));
      }
}
import { Observable } from 'rxjs';
import { PostoMapper } from './../mapper/posto-mapper';
import { PostoModel, PostoAllModel } from './../model/posto-model';
import { PostoEntity, PostoAllEntity } from './../entity/posto-entity';
import { environment } from '../../../../environments/environment';
import { Injectable } from "@angular/core";

import { BaseHttpService } from '../../../services/http/base-http.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PostoRepository {

  mapper = new PostoMapper();

  constructor(public http: BaseHttpService) { }

  getPostoById(id: number): Observable<PostoModel> {
    return this.http
      .getAll<PostoModel>(`${environment.URLSERVIDOR}posto/${id}`)
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  getAllPostos(administradorId: number): Observable<PostoAllModel> {
    return this.http
      .getAll<PostoAllModel>(`${environment.URLSERVIDOR}posto/admin/${administradorId}`)
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  postPosto(param: PostoModel) {
    return this.http
      .post<PostoEntity>(`${environment.URLSERVIDOR}posto`, this.mapper.mapTo(param))
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putPosto(param: PostoModel) {
    return this.http
      .put<void>(
        `${environment.URLSERVIDOR}posto/${param.id}`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => x.data));
  }

  deletePosto(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.URLSERVIDOR}posto/${id}`, id)
      .pipe(map((x) => x.data));
  }
}

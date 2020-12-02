import { Observable } from 'rxjs';
import { LoteMapper } from '../mapper/lote-mapper';
import { LoteModel } from '../model/lote-model';
import { LoteEntity } from '../entity/lote-entity';
import { environment } from '../../../../environments/environment';
import { Injectable } from "@angular/core";
import { BaseHttpService } from '../../../services/http/base-http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class LoteRepository {

  mapper = new LoteMapper();

  constructor(public http: BaseHttpService) { }

  getAllLote(): Promise<LoteModel[]> {
    return this.http
      .getAll<LoteEntity[]>(`${environment.URLSERVIDOR}lote`)
      .toPromise().then((x) => {
        return x.data.map(this.mapper.mapFrom);
      });
  }

  getAllLoteByVacina(id: number): Promise<LoteModel[]> {
    return this.http
      .getAll<LoteEntity[]>(`${environment.URLSERVIDOR}lote/filtro/${id}`)
      .toPromise().then((x) => {
        return x.data.map(this.mapper.mapFrom);
      });
  }

  getLoteById(id: number): Observable<LoteModel> {
    return this.http
      .getAll<LoteModel>(`${environment.URLSERVIDOR}lote/${id}`)
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  postLote(param: LoteModel) {
    return this.http
      .post<LoteEntity>(`${environment.URLSERVIDOR}lote`, this.mapper.mapTo(param))
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putLote(param: LoteModel) {
    return this.http
      .put<void>(
        `${environment.URLSERVIDOR}lote/${param.id}`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => x.data));
  }

  deleteLote(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.URLSERVIDOR}lote/${id}`, id)
      .pipe(map((x) => x.data));
  }
}

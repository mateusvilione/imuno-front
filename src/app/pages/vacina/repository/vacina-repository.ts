import { Observable } from 'rxjs';
import { VacinaMapper } from '../mapper/vacina-mapper';
import { VacinaModel } from '../model/vacina-model';
import { VacinaEntity } from '../entity/vacina-entity';
import { environment } from '../../../../environments/environment';
import { Injectable } from "@angular/core";
import { BaseHttpService } from '../../../services/http/base-http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class VacinaRepository {

  mapper = new VacinaMapper();

  constructor(public http: BaseHttpService) { }

  getVacinaById(id: number): Observable<VacinaModel> {
    return this.http
      .getAll<VacinaModel>(`${environment.URLSERVIDOR}vacina/${id}`)
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  postVacina(param: VacinaModel) {
    return this.http
      .post<VacinaEntity>(`${environment.URLSERVIDOR}vacina`, this.mapper.mapTo(param))
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putVacina(param: VacinaModel) {
    return this.http
      .put<void>(
        `${environment.URLSERVIDOR}vacina/${param.id}`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => x.data));
  }

  deleteVacina(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.URLSERVIDOR}vacina/${id}`, id)
      .pipe(map((x) => x.data));
  }
}

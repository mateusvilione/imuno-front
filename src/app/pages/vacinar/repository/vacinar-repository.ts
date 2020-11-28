import { VacinarMapper } from '../mapper/vacinar-mapper';
import { VacinarModel } from '../model/vacinar-model';
import { VacinarEntity } from '../entity/vacinar-entity';
import { environment } from '../../../../environments/environment';
import { Injectable } from "@angular/core";
import { BaseHttpService } from '../../../services/http/base-http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class VacinarRepository {

  mapper = new VacinarMapper();

  constructor(public http: BaseHttpService) { }

  postVacinar(param: VacinarModel) {
    return this.http
      .post<VacinarEntity>(`${environment.URLSERVIDOR}caderneta`, this.mapper.mapTo(param))
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

}

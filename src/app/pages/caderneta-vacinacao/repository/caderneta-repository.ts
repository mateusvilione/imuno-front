import { CadernetaMapper } from '../mapper/caderneta-mapper';
import { CadernetaModel } from '../model/caderneta-model';
import { CadernetaEntity } from '../entity/caderneta-entity';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../services/http/base-http.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadernetaRepository {

  mapper = new CadernetaMapper();

  constructor(public http: BaseHttpService) {}

  getCadernetaByPaciente(id: number): Promise<CadernetaModel[]> {
    return this.http
      .getAll<CadernetaEntity[]>(`${environment.URLSERVIDOR}caderneta/${id}`)
      .toPromise()
      .then((x) => {
        return x.data.map(this.mapper.mapFrom);
      });
  }
}

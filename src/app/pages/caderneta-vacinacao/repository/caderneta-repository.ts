import { CadernetaMapper } from '../mapper/caderneta-mapper';
import { CadernetaModel } from '../model/caderneta-model';
import { CadernetaEntity } from '../entity/caderneta-entity';
import { environment } from '../../../../environments/environment';
import { Injectable } from "@angular/core";
import { BaseHttpService } from '../../../services/http/base-http.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CadernetaRepository {

  mapper = new CadernetaMapper();

  constructor(public http: BaseHttpService) { }

  getCadernetaByPaciente(id: number): Observable<CadernetaModel> {
    return this.http
      .getAll<CadernetaModel>(`${environment.URLSERVIDOR}caderneta/${id}`)
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

}

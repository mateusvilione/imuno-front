import { Observable } from 'rxjs';
import { PacienteMapper } from './../mapper/Paciente-mapper';
import { PacienteModel } from './../model/paciente-model';
import { PacienteEntity } from './../entity/paciente-entity';
import { environment } from './../../../../environments/environment';
import { Injectable } from "@angular/core";

import { BaseHttpService } from './../../../services/http/base-http.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PacienteRepository {

  mapper = new PacienteMapper();

  constructor(public http: BaseHttpService) { }

  getPacienteById(id: number): Observable<PacienteModel> {
    return this.http
      .getAll<PacienteModel>(`${environment.URLSERVIDOR}paciente/${id}`)
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  postPaciente(param: PacienteModel) {
    return this.http
      .post<PacienteEntity>(`${environment.URLSERVIDOR}paciente`, this.mapper.mapTo(param))
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }

  putPaciente(param: PacienteModel) {
    return this.http
      .put<void>(
        `${environment.URLSERVIDOR}paciente/${param.id}`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => x.data));
  }

  deletePaciente(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.URLSERVIDOR}paciente/${id}`, id)
      .pipe(map((x) => x.data));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Holiday } from '../entities/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}holidays`;
  }

  public verificarFecha(fecha: Date) {
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getUTCDate();
    let urlT = `${this.url}/checkHoliday/${año}/${mes}/${dia}`;

    return this.http.get(urlT, { responseType: 'text' });
  }

  public getHolidays(año: number): Observable<Holiday[]> {
    let urlT = `${this.url}/getHolidays/${año}`;

    return this.http.get<Holiday[]>(urlT);
  }
}

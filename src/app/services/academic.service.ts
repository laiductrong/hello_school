import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { serviceResponse } from '../models/serviceResponse';
import { Academic, AddAcademic } from '../models/academic';
import { catchError, of, throwError } from 'rxjs';
import { BASE_URL } from '../constants/base-url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('account_school')
  })
};
@Injectable({
  providedIn: 'root'
})

export class AcademicService {

  constructor(private http: HttpClient) { }
  private url = BASE_URL+"AY";

  public GetAY(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url + "/GetAcademicYears", httpOptions);
  }
  public AddAcademic(addAcademic: AddAcademic): Observable<serviceResponse> {
    return this.http.post<serviceResponse>(this.url + "/AddAcademicYear", addAcademic, httpOptions)
      .pipe(
      );
  }
  public UpdateAcademic(updateAcademic: Academic): Observable<serviceResponse> {
    return this.http.post<serviceResponse>(this.url + "/UpdateAY", updateAcademic, httpOptions)
      .pipe(
      );
  }
  public DeleteAcademic(id: number): Observable<serviceResponse> {
    return this.http.delete<serviceResponse>(this.url + "/DeleteAcademicYear/" + id, httpOptions)
      .pipe(
      );
  }
}

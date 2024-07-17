import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { serviceResponse } from '../models/serviceResponse';
import { AddAcademic } from '../models/academic';
import { catchError, of, throwError } from 'rxjs';

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
  private url = "https://localhost:7084/api/AY";

  public GetAY(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url + "/GetAcademicYears", httpOptions);
  }
  public AddAcademic(addAcademic: AddAcademic): Observable<serviceResponse> {
    console.log(addAcademic);
    
    return this.http.post<serviceResponse>(this.url + "/AddAcademicYear", addAcademic, httpOptions)
      .pipe(
      );
  }
  public UpdateAcademic(updateAcademic: AddAcademic): Observable<serviceResponse> {
    return this.http.put<serviceResponse>(this.url + "/UpdateAcademicYear", updateAcademic, httpOptions)
      .pipe(
      );
  }
}

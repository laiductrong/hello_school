import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serviceResponse } from '../models/serviceResponse';
import { Observable } from 'rxjs';
import { AddGrade, UpdateGrade } from '../models/grade';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('account_school')
  })
};
@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private url = "https://localhost:7084/api/Grade";
  constructor(private http: HttpClient) { }

  public GetGrade(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url + "/GetGrades", httpOptions).pipe(
      // catchError(this.handleError)
    );
  }
  public AddGrade(grade: AddGrade): Observable<serviceResponse> {
    return this.http.post<serviceResponse>(this.url + "/AddGrade", grade, httpOptions).pipe(
      // catchError(this.handleError)
    );
  }
  public DeleteGrade(gradeId: number): Observable<serviceResponse> {
    return this.http.delete<serviceResponse>(this.url + "/Delete/" + gradeId, httpOptions).pipe(
      // catchError(this.handleError)
    );
  }
  public UpdateGrade(grade: UpdateGrade): Observable<serviceResponse> {
    return this.http.put<serviceResponse>(this.url + "/Update", grade, httpOptions).pipe(
      // catchError(this.handleError)
    );
  }
  public GetGradeByStudent(studentId: number): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url + "/ByStudent/" + studentId, httpOptions).pipe(
      
    );
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviceResponse } from '../models/serviceResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('account_school')
  })
};

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor( private http: HttpClient) { }

  public GetSubject(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>("https://localhost:7084/api/GetSubjects", httpOptions).pipe();}
}

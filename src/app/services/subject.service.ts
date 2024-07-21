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
  private url = "https://localhost:7084/api/Subject";

  public GetSubject(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url+"/GetSubjects", httpOptions).pipe();}
}

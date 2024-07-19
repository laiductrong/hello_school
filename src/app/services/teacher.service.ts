import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serviceResponse } from '../models/serviceResponse';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('account_school')
  })
};

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private url = "https://localhost:7084/api/Teacher";
  constructor(private http : HttpClient) { }

  public GetTeacherNoClass(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url + "/TeacherNoClass", httpOptions).pipe(
      
    );
  }
}

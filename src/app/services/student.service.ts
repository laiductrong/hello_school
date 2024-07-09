import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { serviceResponse } from '../models/serviceResponse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  private url = "https://localhost:7084/api/Student";

  public getUser(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url + "/GetStudents", httpOptions);
  }
}

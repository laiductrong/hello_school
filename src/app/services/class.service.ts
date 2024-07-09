import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { serviceResponse } from '../models/serviceResponse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ClassService {

  constructor(private http: HttpClient) { }
  private url = "https://localhost:7084/api/Class";

  public getClass(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url + "/GetClass", httpOptions);
  }
}

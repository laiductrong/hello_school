import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { serviceResponse } from '../models/serviceResponse';
import { AddClass, Class, UpdateClass } from '../models/class';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('account_school')
  })
};
@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private url = "https://localhost:7084/api/Class";

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }



  public getClass(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(`${this.url}/GetClass`, httpOptions);
  }
  public AddClass(addClass: AddClass): Observable<serviceResponse> {
    return this.http.post<serviceResponse>(this.url + "/AddClass", addClass, httpOptions)
      .pipe(
      );
  }
  public UpdateClass(updateClass: UpdateClass): Observable<serviceResponse> {
    return this.http.post<serviceResponse>(this.url + "/UpdateClass", updateClass, httpOptions)
      .pipe(
      );
  }
  public DeleteClass(id: number): Observable<serviceResponse> {
    return this.http.delete<serviceResponse>(this.url + "/DeleteClass?classID=" + id, httpOptions)
      .pipe(
      );
  }
  public GetClassByAY(id: any): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url + "/GetClassByYear?yearId=" + id, httpOptions).pipe();
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serviceResponse } from '../models/serviceResponse';
import { Observable } from 'rxjs';
import { AddTeacher, Teacher, UpdateTeacher } from '../models/teacher';

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
  public GetTeacher(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url + "/GetTeachers", httpOptions).pipe(
      
    );
  }
  public AddTeacher(teacher: AddTeacher): Observable<serviceResponse> {
    return this.http.post<serviceResponse>(this.url + "/AddTeacher", teacher, httpOptions).pipe(
      
    );
  }
  public UpdateTeacher(teacher: UpdateTeacher): Observable<serviceResponse> { 
    return this.http.put<serviceResponse>(this.url + "/UpdateTeacher", teacher, httpOptions).pipe();
  }
  public DeleteTeacher(teacherId: number): Observable<serviceResponse> {
    return this.http.delete<serviceResponse>(this.url + "/DeleteTeacher/" + teacherId, httpOptions).pipe();
  }
}

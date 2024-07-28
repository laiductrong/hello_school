import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { serviceResponse } from '../models/serviceResponse';
import { AddStudent, Student, UpdateStudent } from '../models/student';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('account_school')
  })
};
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  private url = "https://localhost:7084/api/Student";

  public getStudents(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url + "/GetStudents", httpOptions);
  }
  public AddStudent(student: AddStudent): Observable<serviceResponse> {
    return this.http.post<serviceResponse>(this.url + "/AddStudent", student, httpOptions);
  }
  public UpdateStudent(student: UpdateStudent): Observable<serviceResponse> {
    //https://localhost:7084/api/Student/UpdateStudent
    return this.http.put<serviceResponse>(this.url + "/UpdateStudent", student, httpOptions).pipe();
  }
  public DeleteStudent(studentId: number): Observable<serviceResponse> {
    return this.http.delete<serviceResponse>(this.url + "/DeleteStudent/" + studentId, httpOptions);
  }
  public GetStudentByClass(classId: number): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(this.url + "/GetStudentByClass/" + classId, httpOptions);
  }
}

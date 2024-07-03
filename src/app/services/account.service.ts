import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { serviceResponse } from '../models/serviceResponse';
import { Login } from '../models/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// const httpOptionsAdmin = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + !localStorage.getItem('accoutLogin')
//   })
// };

@Injectable({
  providedIn: 'root'
})


export class AccountService {

  private url = "https://localhost:7084/api/UserAccount";
  constructor(private http: HttpClient) { }

  public getUser(): Observable<serviceResponse>{
    return this.http.get<serviceResponse>("https://localhost:7084/api/UserAccount/Accounts");
  }
  public Login(account : Login): Observable<serviceResponse>{
    return this.http.post<serviceResponse>("https://localhost:7084/api/UserAccount/Login", account);
  }
}

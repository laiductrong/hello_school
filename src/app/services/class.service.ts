import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { serviceResponse } from '../models/serviceResponse';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private url = "https://localhost:7084/api/Class";

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  private getHttpOptions() {
    let token = '';

    // Kiểm tra xem mã có đang chạy trong ngữ cảnh trình duyệt hay không
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('accoutLogin') || '';
    } else {
      console.log('localStorage không được định nghĩa trên máy chủ');
      // Xử lý trường hợp localStorage không khả dụng
    }

    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }

  public getClass(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(`${this.url}/GetClass`, this.getHttpOptions());
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  // Giả sử bạn có một phương thức để lấy vai trò người dùng

  getUserRole(): string | null {
    const token = localStorage.getItem('account_school');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || null;
    }
    return null;
  }

  getUserName(): string | null {
    const token = localStorage.getItem('account_school');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken['username'] || null;
    }
    return null;
  }
  getUserId(): string | null {
    const token = localStorage.getItem('account_school');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken['id'] || null;
    }
    return null;
  }

  isAuthenticated(): boolean {
    // Kiểm tra nếu người dùng đã xác thực hay chưa
    return !!localStorage.getItem('account_school'); // Ví dụ, kiểm tra token
  }

  logout() {
    // Phương thức để đăng xuất người dùng
    localStorage.removeItem('account_school');
    //this.router.navigate(['/login']);
  }
}

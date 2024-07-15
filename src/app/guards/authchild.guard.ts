// authchild.guard.ts

import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authService.isAuthenticated()) {
      // Nếu người dùng không được xác thực, chuyển hướng đến trang đăng nhập
      return this.router.parseUrl('/account');
    }
    if (state.url.includes('/academic')) {
      if (this.authService.getUserRole() === 'Teacher' || this.authService.getUserRole() === 'Manager') {
        return true; // Cho phép teacher và admin truy cập vào TeacherComponent
      } else {
        return this.router.parseUrl('/home'); // Chuyển hướng đến trang không có quyền truy cập
      }
    }

    return true; // Cho phép truy cập nếu đã xác thực
  }
}

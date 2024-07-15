import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";

export class TestGuard implements CanActivateChild {
    authService: any;
    router: any;
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
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

import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  nameUser = '';
  isLoggedIn : boolean = false;
  notification = '';
  type = 'warning';
  isNotifi = false;

  constructor(
    private accountService: AccountService
  ){}

  close() {
    this.isNotifi = false;
  }
  login(username : string, password: string) {
    const accountLogin = new Login(username, password);
    this.accountService.Login(accountLogin).subscribe((acc) =>{
      if (acc.success) {
        this.notification = 'Đăng nhập thành công';
        this.isNotifi = true;
        setTimeout(() => {
          localStorage.removeItem('accoutLogin');
          const expireTime = new Date().getTime() + 3600 * 1000; // Thời gian hết hạn sau 1 giờ
          localStorage.setItem('accoutLogin', acc.data);
          localStorage.setItem('expireTime', expireTime.toString());
          this.isNotifi = false;
          //this.router.navigate(['/']);
        }, 1500);
      } else {
        this.notification = 'Vui lòng kiểm tra lại tài khoản';
        this.isNotifi = true;
      }
    });
  }
  Logout() {
    alert("Logout");
  }
  Register() {
    alert("Register");
  }
  
}

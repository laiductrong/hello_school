import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  isLoggedIn: boolean = false;

  constructor(
    private accountService: AccountService
  ){}

  login() {
    this.accountService.getUser().subscribe((acc)=>{
      if(acc.success) {
        alert("ss");
      }
      else {
        alert("fail");
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

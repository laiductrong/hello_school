import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  isLoggedIn: boolean = false;


  login() {
    alert("Login");
  }
  Logout() {
    alert("Logout");
  }
  Register() {
    alert("Register");
  }
  
}

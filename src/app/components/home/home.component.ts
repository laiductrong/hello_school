import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private auth: AuthService) {
    
  }
  public role: any;
  ngOnInit(): void {
    this.role = this.auth.getUserRole();
  }
  toggleMenu(): void {
    const element = document.querySelector('.topnav');
    if (element?.classList.contains('responsive')) {
      element.classList.remove('responsive');
    } else {
      element?.classList.add('responsive');
    }
  }
  
  
}

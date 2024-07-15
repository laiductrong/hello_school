import { Component } from '@angular/core';
import { AcademicService } from '../../services/academic.service';
import { Academic } from '../../models/academic';
import { log } from 'console';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.scss'
})
export class AcademicComponent {
  /**
   *
   */
  constructor(private academicService: AcademicService ,private auth: AuthService) {
    
    
  }
  academics: Academic[] = [];
  ngOnInit(): void {
    console.log(this.auth.getUserRole());
    
    this.academicService.GetAY().subscribe((res) => {
      if(res.success) {
        this.academics = res.data;
      }
      else{
        console.log(res.message);
      }
    })
  }
}

import { Component } from '@angular/core';
import { AcademicService } from '../../services/academic.service';
import { Academic } from '../../models/academic';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.scss'
})
export class AcademicComponent {
  /**
   *
   */
  constructor(private academicService: AcademicService) {
    
    
  }
  academics: Academic[] = [];
  ngOnInit(): void {
    this.academicService.GetAY().subscribe((res) => {
      if(res.success) {
        console.log(res.data);
        this.academics = res.data;
      }
      else{
        console.log(res.message);
      }
    })
  }
}

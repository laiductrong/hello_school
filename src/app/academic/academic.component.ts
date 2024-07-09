import { Component } from '@angular/core';
import { AcademicService } from '../services/academic.service';

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
  data: any[] = [];
  ngOnInit(): void {
    this.academicService.GetAY().subscribe((res) => {
      if(res.success) {
        console.log(res.data);
        this.data = res.data;
      }
      else{
        console.log(res.message);
      }
    })
  }
}

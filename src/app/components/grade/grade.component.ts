import { Component } from '@angular/core';
import { Grade } from '../../models/grade';
import { GradeService } from '../../services/grade.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrl: './grade.component.scss'
})
export class GradeComponent {
  grades: Grade[] = [];
  constructor(private gradeService: GradeService) {
  }
  ngOnInit(): void {

    this.gradeService.GetGrade().subscribe((res) => {
      if(res.success) {
        this.grades = res.data;
        console.log(this.grades);
        console.log(res.data);
        
        
      }
      else{
        console.log(res.message);
      }
  }
  )}
}

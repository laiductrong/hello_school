import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

  students: Student[] = [];
  /**
   *
   */
  constructor(private studentService: StudentService) {
    
    
  }
  ngOnInit(): void {
    this.studentService.getUser().subscribe((res) => {
      if(res.success) {
        console.log(res.data);
      }
      else{
        console.log(res.message);
      }
    })
  }

}

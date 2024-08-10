import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-class',
  templateUrl: './detail-class.component.html',
  styleUrl: './detail-class.component.scss'
})
export class DetailClassComponent {
  /**
   *
   */
  students: Student[] = [];
  constructor(private StudentService: StudentService, private route: ActivatedRoute) {
    
  }
  ngOnint(): void {
    this.checkAndGetStudents();
  }
  checkAndGetStudents() {
    console.log("hji");
    
    var id = this.getIdClass();
    if(id!=null) {
      this.getStudentsByClassId(id);
    }
  }
  getStudentsByClassId(id: any) {
    this.StudentService.GetStudentByClass(id).subscribe((res) => {
      if(res.success) {
        this.students = res.data;
        console.log(res.message);
        
        console.log(this.students);
        
      }
      else {
        console.log(res.message);
      }
    })
  }
  getIdClass(){
    this.route.paramMap.subscribe(params => {
      if(params.get('id')!=null) {
        return params.get('id');
      }
      return null;
      // Thực hiện các hành động khác với `id` ở đây
    });
  }

}

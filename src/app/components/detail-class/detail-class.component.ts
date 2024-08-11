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
    //this.checkAndGetStudents();
  }
  ngAfterViewInit(): void {
    console.log("onint");
    this.checkAndGetStudents();
    console.log("end onint");
    
  }
  async checkAndGetStudents() {
    console.log("checkAndGetStudents");
    const id = await this.getIdClass();
    console.log("get id ok");
    
    console.log(id);
    if (id != null) {
      console.log("id khac null");
      
      this.getStudentsByClassId(id);
    }
  }
  getStudentsByClassId(id: any) {
    this.StudentService.GetStudentByClass(id).subscribe((res) => {
      if (res.success) {
        this.students = res.data;
      }
      else {
        console.log(res.message);
      }
    })
  }
  getIdClass(): Promise<string | null> {
    return new Promise((resolve) => {
      this.route.paramMap.subscribe(params => {
        if (params.get('id') != null) {
          resolve(params.get('id'));
        } else {
          resolve(null);
        }
      });
    });
  }

}

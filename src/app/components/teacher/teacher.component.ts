import { Component } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../models/teacher';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  /**
   *
   */
  constructor(
    private modalService: NgbModal,
    private teacherService: TeacherService,
    private auth: AuthService,
    private subjectService: SubjectService) {
    
  }  
  teachers: Teacher[] = [];
  subjects: Subject[] = [];
  ngOnInit(): void {
   this.teacherService.GetTeacher().subscribe((res) => {
     if(res.success) {
      console.log(res.message);
       this.teachers = res.data;
     }
     else {
       alert(res.message);
     }
   }) 
  }

  //form add teacher
  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  //form update teacher
  openScrollableContent2(longContent: any, teacher: Teacher) {
    this.modalService.open(longContent, { scrollable: true });
  }
  //add teacher
  addTeacher(nameTeacher: string, birthDateTeacher: string, addressTeacher: string, phoneNumberTeacher: string, emailTeacher: string, subjectNameTeacher: string) {
    // let addTeacher : Teacher = {name: nameTeacher, birthDate: birthDateTeacher, address: addressTeacher, phoneNumber: phoneNumberTeacher, email: emailTeacher, subjectName: subjectNameTeacher}
    // this.teacherService.AddTeacher(addTeacher).subscribe((res) => {
    //   if(res.success) {
    //     this.teachers = res.data;
    //   }
    //   else {
    //     alert(res.message);
    //   }
    // })
  }

  //delete teacher
  deleteTeacher(teacherId: number) {
    // this.teacherService.DeleteTeacher(teacherId).subscribe((res) => {
    //   if(res.success) {
    //     this.teachers = res.data;
    //   }
    //   else {
    //     alert(res.message);
    //   }
    // })
  }
  //update teacher
  teacherEdit: Teacher = {
    teacherId: 0,
    name: '',
    birthDate: '',
    address: '',
    phoneNumber: '',
    email: '',
    subjectName: '',
    subjectId: 0
  }
  updateTeacher(nameTeacher: string, birthDateTeacher: string, addressTeacher: string, phoneNumberTeacher: string, emailTeacher: string, subjectNameTeacher: string) {
    // let updateTeacher : Teacher = {name: nameTeacher, birthDate: birthDateTeacher, address: addressTeacher, phoneNumber: phoneNumberTeacher, email: emailTeacher, subjectName: subjectNameTeacher}
    // console.log(updateTeacher);
    // this.teacherService.UpdateTeacher(updateTeacher).subscribe((res) => {
    //   if(res.success) {
    //     this.teachers = res.data;
    //   }
    //   else {
    //     alert(res.message);
    //   }
    // })
  }
  getSubjects() {
    this.subjectService.GetSubject().subscribe((res) => {
      if(res.success) {
        console.log(res.message);
        this.subjects = res.data;
      }  
      else {
        alert(res.message);
      }
    })}
}

import { Component } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { AddTeacher, Teacher, UpdateTeacher } from '../../models/teacher';
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
       this.teachers = res.data;
     }
     else {
       alert(res.message);
     }
   }) 
   this.subjectService.GetSubject().subscribe((res) => {
    if(res.success) {
      this.subjects = res.data;
    }
    else {
      alert(res.message);
    }
  })
  }

  //form add teacher
  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
    //this.getSubjects();
  }

  //form update teacher
  openScrollableContent2(longContent: any, teacher: Teacher) {
    this.teacherEdit = teacher;
    this.teacherEdit.birthDate = this.formatDate(teacher.birthDate);
    this.modalService.open(longContent, { scrollable: true });
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${day}-${month}-${year}`;
  }

  //add teacher
  addTeacher(nameTeacher: string, birthDateTeacher: string, addressTeacher: string, phoneNumberTeacher: string, emailTeacher: string, subjectId: any) {
    let addTeacher : AddTeacher = {name: nameTeacher, birthDate: birthDateTeacher, address: addressTeacher, phoneNumber: phoneNumberTeacher, email: emailTeacher, subjectId: subjectId}
    console.log(addTeacher);
    
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
    birthDate: new Date().toDateString(),
    address: '',
    phoneNumber: '',
    email: '',
    subjectName: '',
    subjectId: 0
  }
  updateTeacher(nameTeacher: string, birthDateTeacher: string, addressTeacher: string, phoneNumberTeacher: string, emailTeacher: string, subjectId: any) {
    let updateTeacher : UpdateTeacher = {teacherId: this.teacherEdit.teacherId,name: nameTeacher, birthDate: birthDateTeacher, address: addressTeacher, phoneNumber: phoneNumberTeacher, email: emailTeacher, subjectId: subjectId};
    console.log(updateTeacher);
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

import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { AddStudent, Student, UpdateStudent } from '../../models/student';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Class } from '../../models/class';
import { ClassService } from '../../services/class.service';

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
  constructor(private modalService: NgbModal,private studentService: StudentService, private classService: ClassService) {
    
    
  }

  ngOnInit(): void {
    this.studentService.getUser().subscribe((res) => {
      if(res.success) {
        this.students = res.data;
      }
      else{
        console.log(res.message);
      }
    })
  }

  //Pagination
  page: number = 1;
  pageSize : number = 5;
  //get class
  classes: Class[] = [];
  getClass() {
    this.classService.getClass().subscribe((res) => {
      if(res.success) {
        this.classes = res.data;
      }
      else {
        alert(res.message);
      }
    })
  }

  //form add student
  openScrollableContent(longContent: any) {
    this.getClass();
    this.modalService.open(longContent, { scrollable: true });
  }
  //form update student
  studentEdit: Student = {
    studentId: 0,
    name: '',
    birthDate: '',
    address: '',
    phoneNumber: '',
    email: '',
    className: '',
    classId: 0
  }
  openScrollableContent2(longContent: any, student: Student) {
    this.studentEdit = student;
    console.log(this.studentEdit);
    
    this.studentEdit.birthDate = this.formatDate(student.birthDate);
    
    this.getClass();
    this.modalService.open(longContent, { scrollable: true });
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  //add student
  addStudent(name: string, birthDate: any, address: string, phoneNumber: string, email: string, classId: any) {
    const student: AddStudent = {
      name: name,
      birthDate: birthDate,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      classId: classId
    }
    this.studentService.AddStudent(student).subscribe((res) => {
      if(res.success) {
        this.students = res.data;
      }
      else {
        alert(res.message);
      }
    })
  }

  //update student
  UpdateStudent(name: string, birthDate: any, address: string, phoneNumber: string, email: string, classId: any) {
    let student: UpdateStudent = {
      studentId: this.studentEdit.studentId,
      name: name,
      birthDate: birthDate,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      classId: classId
    }
    console.log(student.classId);
    
    this.studentService.UpdateStudent(student).subscribe((res) => {
      if(res.success) {
        this.students = res.data;
      }
      else {
        alert(res.message);
      }
    })
  }

  //delete student
  deleteStudent(studentId: number) {
    this.studentService.DeleteStudent(studentId).subscribe((res) => {
      if(res.success) {
        alert(res.message);
        this.students = res.data;
      }
      else {
        alert(res.message);
      }
    })
  }
}

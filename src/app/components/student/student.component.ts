import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { AddStudent, Student, UpdateStudent } from '../../models/student';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private modalService: NgbModal,private studentService: StudentService) {
    
    
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

  //form add student
  openScrollableContent(longContent: any) {
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
    this.modalService.open(longContent, { scrollable: true });
  }
  //add student
  AddStudent(name: string, birthDate: any, address: string, phoneNumber: string, email: string, classId: any) {
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
        alert(res.message);
      }
      else {
        alert(res.message);
      }
    })
  }

  //update student
  UpdateStudent(name: string, birthDate: any, address: string, phoneNumber: string, email: string, classId: any) {
    const student: UpdateStudent = {
      studentId: this.studentEdit.studentId,
      name: name,
      birthDate: birthDate,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      classId: classId
    }
    this.studentService.UpdateStudent(student).subscribe((res) => {
      if(res.success) {
        alert(res.message);
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
      }
      else {
        alert(res.message);
      }
    })
  }
}

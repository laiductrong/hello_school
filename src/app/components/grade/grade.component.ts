import { Component } from '@angular/core';
import { AddGrade, Grade } from '../../models/grade';
import { GradeService } from '../../services/grade.service';
import { Student } from '../../models/student';
import { Subject } from '../../models/subject';
import { SubjectService } from '../../services/subject.service';
import { StudentService } from '../../services/student.service';
import { AcademicService } from '../../services/academic.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Academic } from '../../models/academic';
import { Class } from '../../models/class';
import { ClassService } from '../../services/class.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrl: './grade.component.scss'
})
export class GradeComponent {
  grades: Grade[] = [];
  constructor(
    private gradeService: GradeService,
    private subjectService: SubjectService,
    private studentService: StudentService,
    private academicService: AcademicService,
    private classService: ClassService,
    private modalService: NgbModal,
    private auth: AuthService
  ) {
  }
  //form add grade
  openScrollableContent(longContent: any) {
    this.getAcademicYear();
    this.modalService.open(longContent, { scrollable: true });
  }
  idTeacher: any;
  ngOnInit(): void {
    this.idTeacher = this.auth.getUserId();
    this.getGradents();
  }
  //pagination
  page: number = 1;
  pageSize: number = 5;
  students: Student[] = [];
  subjects: Subject[] = [];
  academicYears: Academic[] = [];
  classes: Class[] = [];
  getGradents() {
    this.gradeService.GetGrade().subscribe((res) => {
      if (res.success) {
        this.grades = res.data;
      }
      else {
        console.log(res.message);
      }
    })
  }
  getSubjects() {
    this.subjectService.GetSubject().subscribe((res) => {
      if (res.success) {
        this.subjects = res.data;
      }
      else {
        console.log(res.message);
      }
    })
  }
  getStudents() {
    this.studentService.getStudents().subscribe((res) => {
      if (res.success) {
        this.students = res.data;
      }
      else {
        console.log(res.message);
      }
    })
  }


  getAcademicYear() {
    this.academicService.GetAY().subscribe((res) => {
      if (res.success) {
        this.academicYears = res.data;
      }
      else {
        console.log(res.message);
      }
    })
  }
  getClassByAY(ayId: any) {
    this.classService.GetClassByAY(ayId).subscribe((res) => {
      if (res.success) {
        this.classes = res.data;        
      }
      else {
        console.log(res.message);
      }
    })
  }
  getStudentByClass(classId: number) {
    this.studentService.GetStudentByClass(classId).subscribe((res) => {
      if (res.success) {
        this.students = res.data;
      }
      else {
        console.log(res.message);
      }
    })
  }
  onAcademicYearChange(e: any) {
    this.classes = [];
    this.students = [];
    const ayId = parseInt(e.target.value, 10);
    this.idYear = ayId;
    this.getClassByAY(ayId);
  }
  onClassChange(e: any) {
    this.students = [];
    const cId = parseInt(e.target.value, 10);
    this.getStudentByClass(cId);
  }



  idYear: any;
  addGrade(idStudent: any, score: any) {
    const grade: AddGrade = {
      studentId: idStudent,
      teacherId: this.idTeacher,
      score: score,
      yearId: this.idYear
    }
    if(!score || !this.idYear || !idStudent || !this.idTeacher) {
      alert("Please fill in all fields or login again");
      return;
    }
    console.log(this.idYear);
    
    this.gradeService.AddGrade(grade).subscribe((res) => {
      if (res.success) {
        
        this.grades = res.data;
      }
      else {
        alert(res.message);
      }
    })
  }
}

import { Component } from '@angular/core';
import { Grade } from '../../models/grade';
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
    private modalService: NgbModal
  ) {
  }
  //form add grade
  openScrollableContent(longContent: any) {
    this.getAcademicYear();
    // this.getStudents();
    // this.getSubjects();
    this.modalService.open(longContent, { scrollable: true });
  }
  ngOnInit(): void {
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
        console.log(this.grades);
        console.log(res.data);
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
    this.getClassByAY(e.target.value);
  }
  onClassChange(e: any) {
    //this.getStudentByClass(classId);
  }
}

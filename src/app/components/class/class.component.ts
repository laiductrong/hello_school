import { Component } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { AddClass, Class, UpdateClass } from '../../models/class';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Academic } from '../../models/academic';
import { AcademicService } from '../../services/academic.service';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrl: './class.component.scss'
})
export class ClassComponent {
  /**
   *
   */
  constructor(
    private classService: ClassService,
    private modalService: NgbModal,
    private academicService: AcademicService,
    private teacherService: TeacherService
  ) {

  }

  classs: Class[] = [];
  academics: Academic[] = [];
  teachers: Teacher[] = [];
  ngOnInit(): void {
    this.classService.getClass().subscribe((res) => {
      if (res.success) {
        this.classs = res.data;
      }
      else {
        alert(res.message);
      }
    })
    //list of academic

    //list of teacher

  }
  //get list of academic
  getAcademic() {
    this.academicService.GetAY().subscribe((res) => {
      if (res.success) {
        this.academics = res.data;
      }
      else {
        alert(res.message);
      }
    })
  }
  //get list of teacher
  getTeacher() {
    this.teacherService.GetTeacherNoClass().subscribe((res) => {
      if (res.success) {
        this.teachers = res.data;
      }
      else {
        alert(res.message);
      }
    })
  }
  //form add class
  openScrollableContent(longContent: any) {
    this.getAcademic();
    this.getTeacher();
    this.modalService.open(longContent, { scrollable: true });
  }
  // form edit class
  classEdit: Class = { classId: 0, className: '', yearId: 0, yearName: '', teacherId: 0, teacherName: '' };
  openScrollableContent2(longContent2: any, classs: Class) {
    this.idUpdate = classs.classId;
    this.getAcademic();
    this.getTeacher();
    this.modalService.open(longContent2, { scrollable: true });
    this.classEdit.classId = classs.classId;
    this.classEdit.className = classs.className;
    this.classEdit.yearId = classs.yearId;
    this.classEdit.yearName = classs.yearName;
    this.classEdit.teacherId = classs.teacherId;
    this.classEdit.teacherName = classs.teacherName;
  }

  //add class
  addClass(className: string, yearId: any, teacherId: any) {
    let addClass: AddClass = { className: className, yearId: yearId, teacherId: teacherId };
    this.classService.AddClass(addClass).subscribe((res) => {
      if (res.success) {
        this.classs = res.data;
      }
      else {
        console.log(res.message);
      }
    })

  }


  idUpdate = 0;
  //update class
  updateClass(className: string, yearId: any, teacherId: any) {
    let updateClass: UpdateClass = { classId: this.idUpdate, className: className, yearId: yearId, teacherId: teacherId };
    this.classService.UpdateClass(updateClass).subscribe((res) => {
      if (res.success) {
        this.classs = res.data;
      }
      else {
        console.log(res.message);
      }
    })
  }

  deleteClass(classId: number) {
    this.classService.DeleteClass(classId).subscribe((res) => {
      if (res.success) {
        this.classs = res.data;
      }
      else {
        console.log(res.message);
      }
    })
  }


}

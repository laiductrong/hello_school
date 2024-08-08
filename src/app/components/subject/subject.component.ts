import { Component } from '@angular/core';
import { Subject } from '../../models/subject';
import { SubjectService } from '../../services/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {

  /**
   *
   */
  constructor(private subjectService: SubjectService, private router: Router) {
    this.getSubjects();
  }
  subjects: Subject[] = [];
  pageSize = 10;
  page = 1;
  getSubjects() {
    this.subjectService.GetSubject().subscribe((res) => {
      if(res.success) {
        this.subjects = res.data;
      }
      else {
        console.log(res.message);
      }
    })
  }
  viewListTeacher(id: number) {
    this.router.navigate(['/subject/teacher', id]);
  }
}

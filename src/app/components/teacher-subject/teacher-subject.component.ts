import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher-subject',
  templateUrl: './teacher-subject.component.html',
  styleUrl: './teacher-subject.component.scss'
})
export class TeacherSubjectComponent {
  pageSize = 10;
  page = 1;
  id: string | null = '';
  subjects: Subject[] = [];
  teachers: Teacher[] = [];

  constructor(private route: ActivatedRoute, private subjectService: SubjectService, private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if(this.id!=null) {
      this.getTeachersBySubjectId(this.id);
      }
      // Thực hiện các hành động khác với `id` ở đây
    });
  }
  getTeachersBySubjectId(id: any) {
    this. teacherService.GetTeachersBySubjectId(id).subscribe((res) => {
      if(res.success) {
        this.teachers = res.data;
      }
      else {
        console.log(res.message);
      }
    })
  }
}

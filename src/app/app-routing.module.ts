import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component'; // Import AccountComponent
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { AcademicComponent } from './components/academic/academic.component';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClassComponent } from './components/class/class.component';
import { authGuard } from './guards/auth.guard';
import { GradeComponent } from './components/grade/grade.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ManagerAccountComponent } from './components/manager-account/manager-account.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SalaryComponent } from './components/salary/salary.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'account', component: AccountComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'salary', component: SalaryComponent },
  { path: 'home', component: HomeComponent,
    canActivateChild: [authGuard] ,
    children: [
      { path: 'academic', component: AcademicComponent },
      { path: 'student', component: StudentComponent },
      { path: 'class', component: ClassComponent },
      { path: 'grade', component: GradeComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'manager-account', component: ManagerAccountComponent },
      { path: 'teacher', component: TeacherComponent }
  ] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component'; // Import AccountComponent
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './student/student.component';
import { AcademicComponent } from './academic/academic.component';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'account', component: AccountComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: 'student', component: StudentComponent },
    { path: 'academic', component: AcademicComponent }
  ] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

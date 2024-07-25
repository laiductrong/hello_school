import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { StudentComponent } from './components/student/student.component';
import { AcademicComponent } from './components/academic/academic.component';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClassComponent } from './components/class/class.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { GradeComponent } from './components/grade/grade.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ManagerAccountComponent } from './components/manager-account/manager-account.component';
import { TeacherComponent } from './components/teacher/teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HomeComponent,
    StudentComponent,
    AcademicComponent,
    IndexComponent,
    NotFoundComponent,
    ClassComponent,
    GradeComponent,
    SubjectComponent,
    ManagerAccountComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatTabsModule, // Tab
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule ,
    HttpClientModule,
    NgxPaginationModule,

    // JWT
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('account_school');
        },
        allowedDomains: ['localhost:7084'], // Thay đổi theo domain của bạn
        disallowedRoutes: [] // Thay đổi theo route bị từ chối
      }
    })

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

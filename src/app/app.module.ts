import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { StudentComponent } from './components/student/student.component';
import { AcademicComponent } from './components/academic/academic.component';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClassComponent } from './components/class/class.component';
import { JwtModule } from '@auth0/angular-jwt'; 


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HomeComponent,
    StudentComponent,
    AcademicComponent,
    IndexComponent,
    NotFoundComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTabsModule, // Tab
    HttpClientModule,

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
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

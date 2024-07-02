import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component'; // Import AccountComponent
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'account', component: AccountComponent }, // Login + Register
  // Thêm các route khác ở đây
  { path: '', redirectTo: '/account', pathMatch: 'full' }, // Redirect mặc định để test
  { path: '**', redirectTo: '/account' } // Redirect cho các route không tồn tại
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewProfileComponent } from './components/login/view-profile/view-profile.component';
import { EditProfileComponent } from './components/login/edit-profile/edit-profile.component';
//auth/login
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'view',
    component: ViewProfileComponent
  },
  {
    path:'edit',
    component: EditProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

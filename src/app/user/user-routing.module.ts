import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path:'',
  pathMatch: 'full',
  component: LoginComponent
},
{
  path:'profile',
  pathMatch: 'full',
  component: ProfileComponent
},
{
  path:'login',
  pathMatch: 'full',
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material.module';
import { NgModule } from '@angular/core';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    NgxAuthFirebaseUIModule
  ]
})
export class UserModule { }

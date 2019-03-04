import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgModule } from '@angular/core';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { NgxModalModule } from '@ngx-lite/modal';
import { NgxNavDrawerModule } from '@ngx-lite/nav-drawer';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { LoginComponent } from './layout/login/login.component';

const components = [
  HeaderComponent,
  FooterComponent,
  FormSearchComponent
];

const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  NgxNavDrawerModule,
  NgxModalModule,
  NgxAuthFirebaseUIModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ],
  declarations: [...components]
})
export class SharedModule { }

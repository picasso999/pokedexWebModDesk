import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FirebaseModule } from './firebase.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FirebaseModule
  ]
})
export class CoreModule { }

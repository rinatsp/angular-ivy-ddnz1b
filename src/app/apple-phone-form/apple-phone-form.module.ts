import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplePhoneFormComponent } from './apple-phone-form.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ApplePhoneFormComponent],
  exports: [
    ApplePhoneFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ApplePhoneFormModule { }

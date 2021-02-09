import { Component, Injector, OnInit } from '@angular/core';
import { BaseFormClass } from '../classes/base-form.class';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ApplePhoneModel } from './apple-phone.model';

@Component({
  selector: 'app-apple-phone-form',
  templateUrl: './apple-phone-form.component.html',
  styleUrls: ['./apple-phone-form.component.css'],
})
export class ApplePhoneFormComponent extends BaseFormClass<ApplePhoneModel> {
  constructor(injector: Injector) {
    super(injector);
  }

  protected createFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      name: null,
      model: null,
      currency: null,
      cost: null,
      color: null,
    });
  }

  protected getControls(): [string, AbstractControl][] {
    return [
      ['name', this.form.controls.name],
      ['model', this.form.controls.model],
      ['currency', this.form.controls.currency],
      ['cost', this.form.controls.cost],
      ['color', this.form.controls.color],
    ];
  }
}

import { ChangeDetectorRef, Directive, Injector, OnDestroy,  OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive()
export abstract class BaseFormClass<T> implements OnInit, OnDestroy {
  public form: FormGroup;

  protected readonly subscriptions: Subscription = new Subscription();
  protected readonly changeDetectorRef: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);

  constructor(protected readonly injector: Injector) {}

  ngOnInit(): void {
    const formBuilder: FormBuilder = this.injector.get(FormBuilder);

    // create editable form
    this.form = this.createFormGroup(formBuilder);

    const controls: [string, AbstractControl][] | null = this.getControls();
    if (controls?.length) {
      controls.forEach(([name, control]: [string, AbstractControl]) =>
        this.subscriptions.add(
          control.valueChanges.subscribe(() => {
            //do something or use state
            if (control.value) this.updateByHttp(name, control.value);
          })
        )
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  protected abstract getControls(): [string, AbstractControl][];

  private updateByHttp(name: string, value: any) {
    console.log(`update ${name}:`, value);
  }

  protected abstract createFormGroup(fb: FormBuilder): FormGroup;
}

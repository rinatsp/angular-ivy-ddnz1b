import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplePhoneFormComponent } from './apple-phone-form.component';

describe('ApplePhoneFormComponent', () => {
  let component: ApplePhoneFormComponent;
  let fixture: ComponentFixture<ApplePhoneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplePhoneFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplePhoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed} from '@angular/core/testing';
import { InputComponent } from './input.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InputErrors } from '../_models/input.errors';

describe('InputComponentTest', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent, TestHostComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create app-input', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should have title', () => {
    expect(testHostFixture.nativeElement.querySelector('label').innerText).toEqual('MyInput');
  });

  it('should have correct type', () => {
    expect(testHostFixture.nativeElement.querySelector('input').type).toEqual('text');
    testHostComponent.setType('password');
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('input').type).toEqual('password');
  });

  it('should be valid if not submitted and without errors', () => {
    expect(testHostFixture.debugElement.query(By.css('input')).classes['is-invalid']).toBeFalsy();
  });

  it('should be invalid if submitted and with errors', () => {
    testHostComponent.setSubmitted(true);
    testHostComponent.setErrors({});
    testHostFixture.detectChanges();
    expect(testHostFixture.debugElement.query(By.css('input')).classes['is-invalid']).toBeTruthy();
  });

  it('should display error.required', () => {
    testHostComponent.setSubmitted(true);
    testHostComponent.setErrors({ required: true });
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('.invalid-feedback').innerText).toEqual('MyInput is required');
  });

  it('should display errors.email', () => {
    testHostComponent.setSubmitted(true);
    testHostComponent.setErrors({ email: true });
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('.invalid-feedback').innerText).toEqual('MyInput must be a valid email address');
  });

  it('should display errors.minlength', () => {
    testHostComponent.setSubmitted(true);
    testHostComponent.setErrors({ minlength: true });
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('.invalid-feedback').innerText).toEqual('MyInput must be at least 8 characters');
  });

  it('should display errors.containName', () => {
    testHostComponent.setSubmitted(true);
    testHostComponent.setErrors({ containName: true });
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('.invalid-feedback').innerText).toEqual('MyInput should not contain First or Last Name');
  });

  it('should display errors.caseLetters', () => {
    testHostComponent.setSubmitted(true);
    testHostComponent.setErrors({ caseLetters: true });
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('.invalid-feedback').innerText)
      .toEqual('MyInput should lower and uppercase letters');
  });

  @Component({
    selector: `app-component`,
    template: `<app-input formControlName="input" title="MyInput" [submitted]="submitted" [errors]="errors" [type]="type"></app-input>`
  })
  class TestHostComponent {
    submitted = false;
    errors: InputErrors = {};
    type = '';

    setSubmitted(value: boolean): void {
      this.submitted = value;
    }
    setErrors(value: object): void {
      this.errors = value;
    }
    setType(value: string): void {
      this.type = value;
    }
  }
});

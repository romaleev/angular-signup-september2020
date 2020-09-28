import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let app: AppComponent;
  let appFixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    appFixture = TestBed.createComponent(AppComponent);
    app = appFixture.componentInstance;
    app.ngOnInit();
  });

  it('should create the app', () => {
    expect(appFixture).toBeTruthy();
  });

  it(`should be valid if fields entered correctly'`, () => {
    app.registerForm.controls.firstName.setValue('First');
    app.registerForm.controls.lastName.setValue('Last');
    app.registerForm.controls.email.setValue('my@email.com');
    app.registerForm.controls.password.setValue('asdffdsA');
    expect(app.registerForm.invalid).toBeFalsy();
  });

  it(`should be invalid if fields are empty or entered incorrectly'`, () => {
    app.registerForm.controls.firstName.setValue('First');
    app.registerForm.controls.lastName.setValue('Last');
    app.registerForm.controls.email.setValue('myemail.com');
    app.registerForm.controls.password.setValue('asdffdsA');
    expect(app.registerForm.invalid).toBeTruthy();
  });

});

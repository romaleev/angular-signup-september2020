import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have have all field valid before submit'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //
  //   expect(app.registerForm.controls.firstName.valid).toBeTruthy();
  //   expect(app.registerForm.controls.lastName.valid).toBeTruthy();
  //   expect(app.registerForm.controls.email.valid).toBeTruthy();
  //   expect(app.registerForm.controls.password.valid).toBeTruthy();
  //     //.toEqual('angular-signup-september2020');
  // });

});

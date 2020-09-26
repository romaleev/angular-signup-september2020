import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './_helpers/password.validator';
import { RegisterService } from './_services/register.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  success = false;
  error = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    const { password, firstName, lastName } = this.registerForm.controls;

    this.registerForm.setValidators(PasswordValidator(password, [firstName, lastName]));
  }

  // convenience getter for easy access to form fields
  get f(): {[p: string]: AbstractControl} { return this.registerForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    this.success = false;
    this.error = false;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.registerService.register(this.registerForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.loading = false;
          this.success = true;
          this.submitted = false;
          this.registerForm.reset();
        },
        error: () => {
          this.loading = false;
          this.error = true;
        }
      });
  }
}

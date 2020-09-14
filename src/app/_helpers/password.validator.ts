import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function PasswordValidator(controlName: string, excludeControlNames: string[]): (formGroup: FormGroup) => void {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];

    if (control.errors && !control.errors.containName && !control.errors.caseLetters) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    if (excludeControlNames.some((excludeControl) => control.value.includes(formGroup.controls[excludeControl].value))){
      return control.setErrors({ containName: true });
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(control.value)) {
      return control.setErrors({ caseLetters: true });
    }

    control.setErrors(null);
  };
}

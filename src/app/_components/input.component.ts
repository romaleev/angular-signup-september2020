import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { InputErrors } from '../_models/input.errors';

@Component({
  selector:    'app-input',
  templateUrl: './input.component.html',
  providers:
    [ {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    }],
})
export class InputComponent implements ControlValueAccessor {
  @Input() formControlName: string;
  @Input() title: string;
  @Input() type: string;
  @Input() submitted: boolean;
  @Input() errors: ValidationErrors | InputErrors;

  value = '';
  isDisabled = false;
  onChange(value: string): void {}
  onTouched(): void {}

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled): void {
    this.isDisabled = isDisabled;
  }
}

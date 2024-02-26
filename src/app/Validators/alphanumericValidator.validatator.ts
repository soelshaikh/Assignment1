import { AbstractControl, ValidatorFn } from '@angular/forms';

export function alphanumericValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    const alphanumericRegex: RegExp = /^[a-zA-Z0-9]*$/;

    if (!alphanumericRegex.test(value)) {
      return { alphanumeric: true };
    }
    return null;
  };
}

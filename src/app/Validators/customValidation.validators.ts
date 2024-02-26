import { AbstractControl, FormControl } from '@angular/forms';

export class customValidation {
  static alphanumericValidator(control: FormControl) {
    const value: string = control.value;
    const alphanumericRegex: RegExp = /^[a-zA-Z0-9]*$/;

    if (!alphanumericRegex.test(value)) {
      return { alphanumeric: true };
    }
    return null;
  }


    // if (isNaN(inputDate.getTime())) {

    // }

  //   return null;
  // }
}

import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

function findInvalidControlsRecursive(formToInvestigate: FormGroup | FormArray): string[] {
  const invalidControls: any[] = [];
  const recursiveFunc = (form: FormGroup | FormArray) => {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field) as AbstractControl;
      if (control.invalid) {
        invalidControls.push({field, control});
      }
      if (control instanceof FormGroup) {
        recursiveFunc(control);
      } else if (control instanceof FormArray) {
        recursiveFunc(control);
      }
    });
  };
  recursiveFunc(formToInvestigate);
  return invalidControls;
}

export const DebugHelper = {
  findInvalidControls: findInvalidControlsRecursive
};

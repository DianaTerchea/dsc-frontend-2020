import { AbstractControl } from "@angular/forms";

export function passwordValidator(
  control: AbstractControl
): { invalid: boolean } {
  if (control.get("password").value !== control.get("confirmPassword").value)
    return { invalid: true };
}

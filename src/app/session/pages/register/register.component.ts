import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        firstName: "",
        lastName: "",
        email: ["", [Validators.email, Validators.required]],
        password: ["", [Validators.minLength(6), Validators.required]],
        confirmPassword: ""
      },
      { validator: passwordValidator }
    );
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.registerForm.value);
  }
}

function passwordValidator(control: AbstractControl) {
  console.log(control.get("password").value);
  console.log(control.get("confirmPassword").value);
  return control.get("password").value === control.get("confirmPassword").value
    ? null
    : { invalid: true };
}

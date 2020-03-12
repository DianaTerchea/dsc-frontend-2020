import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { passwordValidator } from "../../../validators/passwordValidator";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: "",
      lastName: "",
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [Validators.minLength(6), Validators.required, passwordValidator]
      ]
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}

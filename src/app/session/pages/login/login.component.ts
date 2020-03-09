import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  profileForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
  })

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-password-recovery-new-password',
  templateUrl: './password-recovery-new-password.component.html',
  styleUrls: ['./password-recovery-new-password.component.scss']
})
export class PasswordRecoveryNewPasswordComponent implements OnInit {

  public password: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.password = this.fb.group({
      password1: [''],
      password2: ['', [this.matchValidator.bind(this)]]
    });
  }

  matchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const fromValue = control.value;
    if (this.password) {
      const toValue = (this.password.get('password1') as FormControl).value;
      if (fromValue && toValue && fromValue !== toValue) {
        return { 'fieldMatch': true };
      }
      return null;
    }
  }

  get confirmPasswordField() {
    return this.password.get('password2');
  }


  submit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  mainForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.mainForm = this.fb.group({
      email: [''],
      confirmEmail: ['', [this.matchValidator.bind(this)]]
    });
  }

  matchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const fromValue = control.value;
    if (this.mainForm) {
      const toValue = (<FormGroup>this.mainForm.get('email')).value;
      if (fromValue && toValue && fromValue !== toValue) {
        return { 'fieldMatch': true };
      }
      return null;
    }
  }

  get confirmEmailField() {
    return this.mainForm.get('confirmEmail');
  }
}

import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-recovery-two',
  templateUrl: './password-recovery-two.component.html',
  styleUrls: ['./password-recovery-two.component.scss']
})
export class PasswordRecoveryTwoComponent {
  public code = new FormControl('', [Validators.required]);

  submit() {
    //
  }
}

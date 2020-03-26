import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private subscription$: Subscription = new Subscription();

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    const sub = this.sessionService.register(null)
      .subscribe((response) => {
        console.log(response);
      });

    this.subscription$.add(sub);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}

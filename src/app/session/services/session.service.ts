import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ILoginResponse,
  ILoginPayload,
  IRegisterPayload,
  IRegisterResponse,
  IForgotPayload,
  IForgotResponse,
} from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private url: string = environment.url;

  constructor(private http: HttpClient) {}

  public login(payload: ILoginPayload): Observable<ILoginResponse> {
    // to be implemented
    return null;
  }

  public register(payload: IRegisterPayload): Observable<IRegisterResponse> {
    return this.http.post<IRegisterResponse>(this.url + '/register', payload);
  }

  public forgot(payload: IForgotPayload): Observable<any> {
    return this.http.post<IForgotResponse>(this.url + '/forgot', payload);
    return null;
  }

  public logout(): void {
    localStorage.removeItem('token');
  }
}

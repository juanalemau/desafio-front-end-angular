import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';

interface LoginContextInterface {
  username: string;
  password: string;
  token: string;
}

const defaultUser = {
  username: 'Mauricio',
  password: '12345',
  token: '12345'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  login(loginContext: LoginContextInterface): Observable<LoginContextInterface> {
    const isDefaultUser =
      loginContext.username === defaultUser.username &&
      loginContext.password === defaultUser.password;

    if (isDefaultUser) {
      return of(defaultUser);
    }

    return throwError('Nome de usuário ou senha inválidos');
  }

  logout(): Observable<boolean> {
    return of(false);
  }
}

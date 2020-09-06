import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../services/user.service';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure, SignUp, SignUpSuccess, SignUpFailure } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  @Effect()
  LogIn: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogIn) => action.payload),
    switchMap(payload => {
        return this.authService.logIn(payload.email, payload.password).pipe(
        map((user) => {
            return new LogInSuccess({token: user.id_token, email: payload.email});
        }),
        catchError((error) => {
            console.log(error);
            return of(new LogInFailure({ error: error }));
        }));
  }));

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
        console.log(user, 'user');
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect()
  SignUp: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.SIGNUP),
  map((action: any) => action.payload),
  switchMap(payload => {
      return this.authService.signUp(payload.username, payload.email, payload.password).pipe(
      map((user) => {
          return new SignUpSuccess({token: user.id_token, email: payload.email});
      }),
      catchError((error) => {
          return of(new SignUpFailure({ error: error }));
      }));
  }));

  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.SIGNUP_SUCCESS),
  tap((user) => {
      console.log(user);
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
  })
  );

  @Effect({ dispatch: false })
  SignUpFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  );
}

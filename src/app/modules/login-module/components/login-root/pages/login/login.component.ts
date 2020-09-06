import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../../../store/app.states';
import { LogIn } from '../../../../../../store/actions/auth.actions';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>, private fb: FormBuilder) { }
  authForm: FormGroup;
  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  submit(email: string, password: string) {
    this.store.dispatch(new LogIn({email, password}));
  }

}

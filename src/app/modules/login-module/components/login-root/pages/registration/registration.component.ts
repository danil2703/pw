import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../../../store/app.states';
import { LogIn, SignUp } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }
  registrationForm: FormGroup;
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
         login: '',
         email: '',
         password: '',
         passwordAgain: ''
    });
  }

  submit(username, email, password, passwordAgain) {
    console.log({username, email, password});
    this.store.dispatch(new SignUp({username, email, password}));
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRootComponent } from './components/login-root/login-root.component';
import { LoginComponent } from './components/login-root/pages/login/login.component';
import { RegistrationComponent } from './components/login-root/pages/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: LoginRootComponent,
    children: [
      { path: 'auth', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

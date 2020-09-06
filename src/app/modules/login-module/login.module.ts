import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRootComponent } from './components/login-root/login-root.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login-root/pages/login/login.component';
import { RegistrationComponent } from './components/login-root/pages/registration/registration.component';
import { AuthService } from 'src/app/services/user.service';

@NgModule({
  declarations: [LoginRootComponent, LoginComponent, RegistrationComponent],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      LoginRoutingModule,
      MatFormFieldModule,
      MatInputModule,
      MatTabsModule,
      MatButtonModule
    ],
  providers: []
})


export class LoginModule {}

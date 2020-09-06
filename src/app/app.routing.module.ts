import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/** Главные маршруты */
const routes: Routes = [
    { path: 'login', loadChildren: () => import('./modules/login-module/login.module').then((m) => m.LoginModule), data: { preload: true } },
    { path: '', loadChildren: () => import('./modules/main-module/main.module').then((m) => m.MainModule), data: { preload: true } },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

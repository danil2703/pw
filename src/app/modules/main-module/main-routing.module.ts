import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwTableComponent } from './components/pw-table/pw-table.component';
import { RootComponent } from './components/root/root.component';
const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      { path: 'test', component: PwTableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

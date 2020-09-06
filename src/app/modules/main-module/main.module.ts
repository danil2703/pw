import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PwTableComponent } from './components/pw-table/pw-table.component';
import {MatTableModule} from '@angular/material/table';
import { MainRoutingModule } from './main-routing.module';
import { RootComponent } from './components/root/root.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [PwTableComponent, RootComponent],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MainRoutingModule,
      MatTableModule,
      MatToolbarModule,
      MatIconModule
    ],
})


export class MainModule {}

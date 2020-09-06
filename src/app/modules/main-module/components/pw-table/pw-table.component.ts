import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  date: string;
  receiverName: string;
  transactionAmount: number;
  resultingBalance: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '9/6/2020, 2:57:59 AM', receiverName: 'Alice', transactionAmount: -40, resultingBalance: 460},
];

@Component({
  selector: 'app-pw-table',
  templateUrl: './pw-table.component.html',
  styleUrls: ['./pw-table.component.scss']
})

export class PwTableComponent implements AfterViewInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

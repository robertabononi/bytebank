import { Component, OnInit } from '@angular/core';
import { TransferencesService } from '../services/transferences.service';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.scss']
})
export class BankStatementComponent implements OnInit {

  transferences!: any[];

  constructor(private transferencesService: TransferencesService) { }

  ngOnInit(): void {
    this.transferences = this.transferencesService.transferences;
  }

}

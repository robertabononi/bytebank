import { Component, OnInit } from '@angular/core';
import { Transference } from '../models/transference.model';
import { TransferencesService } from '../services/transferences.service';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.scss']
})
export class BankStatementComponent implements OnInit {

  transferences!: any[];

  constructor(private transferencesService: TransferencesService) {
    this.transferences = [];
  }

  ngOnInit(): void {
    this.transferencesService.all().subscribe((transferences: Transference[]) => {
      console.log(transferences);
      this.transferences = transferences;
    })
  }

}

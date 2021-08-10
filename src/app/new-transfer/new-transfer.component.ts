import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Transference } from '../models/transference.model';

import { TransferencesService } from '../services/transferences.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  @Output() onTransfer = new EventEmitter<any>();

  value!: number;
  recipient!: number;
  //recipient: number = {};

  constructor(private transferencesService: TransferencesService) { }

  ngOnInit(): void {
  }

  transfer() {
    console.log('Nova transferência solicitada.');

    const valueToEmit: Transference = {
      value: this.value,
      recipient: this.recipient
    };

    this.transferencesService.add(valueToEmit).subscribe(
      result => {
        console.log(result);
        this.clearFields();
      },
      (error) => console.error(error)
    );
  }

  clearFields() {
    this.value = 0;
    this.recipient = 0;
  }

}

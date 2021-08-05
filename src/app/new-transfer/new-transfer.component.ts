import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  @Output() onTransfer = new EventEmitter<any>();

  value!: number;
  recipient!: number;

  constructor() { }

  ngOnInit(): void {
  }

  transfer() {
    console.log('Nova transferência solicitada.');
    const valueToEmit = {value: this.value, recipient: this.recipient};
    this.onTransfer.emit(valueToEmit);
  }

}

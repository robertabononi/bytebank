import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  value!: number;
  recipient!: number;

  constructor() { }

  ngOnInit(): void {
  }

  transfer() {
    console.log('Nova transferência solicitada.');
    console.log(`Valor: ${this.value}`);
    console.log(`Destinatário: ${this.recipient}`);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  value!: number;
  recipient!: number;

  transfer($event: any) {
    console.log($event)
    this.value = $event.value;
    this.recipient = $event.recipient;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferences: any[] = [];

  transfer($event: any) {
    console.log($event)
    const transference = {...$event, date: new Date()}
    this.transferences.push(transference);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transference!: any;

  transfer($event: any) {
    console.log($event)
    this.transference = $event
  }
}

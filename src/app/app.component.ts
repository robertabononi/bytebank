import { Component } from '@angular/core';
import { TransferencesService } from './bank-statement/services/transferences.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private transferencesService: TransferencesService) {}

  transfer($event: any) {
    this.transferencesService.add($event)
  }
}

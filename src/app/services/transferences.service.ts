import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferencesService {

  private transferenceList: any[];

  constructor() {
    this.transferenceList = [];
  }

  get transferences() {
    return this.transferenceList;
  }

  add(transference: any) {
    this.extra(transference);

    this.transferenceList.push(transference);
  }

  private extra(transference: any) {
    transference.date = new Date();
  }
}

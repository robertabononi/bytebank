import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transference } from '../models/transference.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferencesService {

  private transferenceList: any[];
  private url = 'http://localhost:3000/transferences';

  constructor(private httpClient: HttpClient) {
    this.transferenceList = [];
  }

  get transferences() {
    return this.transferenceList;
  }

  all(): Observable<Transference[]>{
    return this.httpClient.get<Transference[]>(this.url);
  }

  add(transference: any): Observable<Transference> {
    this.extra(transference);

    return this.httpClient.post<Transference>(this.url, transference);
  }

  private extra(transference: any) {
    transference.date = new Date();
  }
}

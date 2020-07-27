import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private http: HttpClient) { }

/* --------------- basic url om te gebruiken voor deze service -------------- */
  private url: string = 'http://localhost:8082/api/clients';

/* ---------------------------- get alles methode --------------------------- */

  getClients() {
    return this.http.get(this.url);
  }

}

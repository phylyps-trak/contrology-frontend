import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private http:HttpClient) { }
/* basic url om te gebruiken voor deze service*/
  private url:string = "http://localhost:8082/api/clients";
  private url2:string = "http://localhost:4200/clients";
/* get alles methode */
  getClients() {
    return this.http.get(this.url);
  }

/* client creation doen we nu in de service: */
  makeClients(id:number):Client {
    let client:Client = new Client;
    if (id === 1) {
      client.firstName = "Rachelle";
      client.lastName = "Philip";
    }
    if (id === 2) {
      client.firstName = "Michiel";
      client.lastName = "Janssens";
    }
    if (id === 3) {
      client.firstName = "Trees";
      client.lastName = "Elzinga";
    }  
    return client;

  }
}

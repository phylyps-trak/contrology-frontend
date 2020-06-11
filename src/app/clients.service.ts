import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }

  getClientById(id:number) {
    return this.http.get("http://localhost:4200/clients/1");
  }


/* client creation doen we nu in de service: */
  getClients(id:number):Client {
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

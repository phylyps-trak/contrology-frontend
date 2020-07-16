import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Client } from './client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})

export class ClientsComponent implements OnInit {
  // geef service mee aan constructor, definieer in provider, is een soort autowiring
  // provider zit in app-module.ts
  constructor(private service: ClientsService) {
    this.client1 = this.service.makeClients(1);
    this.client2 = this.service.makeClients(2);
    this.client3 = this.service.makeClients(3);
  }

  /* bullshit aanmaak rommel */
  client1: Client = new Client();
  client2: Client;
  client3: Client;

  private clientsArray: Client[] = [];

/* ------ bij het laden van het component: pluk de data uit de service ------ */
  ngOnInit(): void {
    this.service.getClients()
      .subscribe(response => {
          this.clientsArray = response as Client[];
        });
  }


   /* rest service gebruikt deze methode */
  getClients(): Client[] {
    return this.clientsArray;
  }

  fillClients(){
    this.clientsArray.push(this.client1);
    this.clientsArray.push(this.client2);
    this.clientsArray.push(this.client3);
  }


}

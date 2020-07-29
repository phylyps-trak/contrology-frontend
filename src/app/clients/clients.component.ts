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
  }

  private clientsArray: Client[] = [];

/* ------ bij het laden van het component: pluk de data uit de service ------ */
  ngOnInit(): void {
    this.service.getClients()
      .subscribe(response => {
          this.clientsArray = response as Client[];
          //console.log(response);
        });
  }

   /* rest service gebruikt deze methode */
  getClients(): Client[] {
    return this.clientsArray;
  }
}

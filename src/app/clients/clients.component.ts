import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Client } from './client';
import { from } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'], 
})

export class ClientsComponent implements OnInit {
client1:Client = new Client;
client2:Client;
client3:Client;
clientsarray:Client[] = [];

fillClients(){
  this.clientsarray.push(this.client1);
  this.clientsarray.push(this.client2);
  this.clientsarray.push(this.client3);
}


  
  //geef service mee aan constructor, definieer in provider, is een soort autowiring
  //provider zit in app-module.ts
  constructor(private clientsService: ClientsService) {
    this.client1 = this.clientsService.getClients(1);
    this.client2 = this.clientsService.getClients(2);
    this.client3 = this.clientsService.getClients(3);
   }


  ngOnInit(): void {
  }

}
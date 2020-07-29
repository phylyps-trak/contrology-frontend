import { Component, OnInit } from '@angular/core';
import { DocentService } from '../docent.service';
import { Client } from '../clients/client';


@Component({
  selector: 'app-docent',
  templateUrl: './docent.component.html'
  // styleUrls: ['./docent.component.css']
})
export class DocentComponent implements OnInit {

constructor(private service: DocentService){}

private myResponse: Client[] = [];


ngOnInit(): void {
  this.service.getTestClient()
  .subscribe(myResponse => {
    this.myResponse = myResponse as Client[];
    console.log(myResponse);
  });
}
getResponse(): Client [] {
  return this.myResponse;
}
}





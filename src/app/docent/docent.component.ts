import { Component, OnInit } from '@angular/core';
import { DocentService } from '../docent.service';

@Component({
  selector: 'app-docent',
  templateUrl: './docent.component.html'
  // styleUrls: ['./docent.component.css']
})
export class DocentComponent implements OnInit {

constructor(private service: DocentService){}
myResponse: any;


ngOnInit(): void {
  this.service.getTestClient()
  .subscribe(myResponse => console.log(myResponse));
}


}




import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docent',
  templateUrl: './docent.component.html'
  //styleUrls: ['./docent.component.css']
})
export class DocentComponent implements OnInit {
// ***** 
//even een basic functionaliteits testje maken: primitive two-way binding
private _michielsVar:string = "deze test werkt!"
  
get michielsVar():string{
  return this._michielsVar
}
set michielsVar(s:string){
  this._michielsVar = s;
}

changeVar($event){
  this.michielsVar = $event.target.value;
}
//  *****
private email:string = "deze";

getEmail(){
  return this.email;
}
changeEmail($event){
  this.email = $event.target.value;
}
//  *****
// real two-way binding
numbervar:number;
  constructor() { }
  ngOnInit(): void {
  }

}

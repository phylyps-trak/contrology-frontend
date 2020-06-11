import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

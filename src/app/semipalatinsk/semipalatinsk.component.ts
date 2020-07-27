import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semipalatinsk',
  templateUrl: './semipalatinsk.component.html',
  styleUrls: ['./semipalatinsk.component.css']
})
export class SemipalatinskComponent implements OnInit {

  constructor() { }

//  *****
private email: string = 'deze';

// real two-way binding
numbervar: number;

private _michielsVar: string = 'deze test werkt!';

  ngOnInit(): void {
  }

// *****
// even een basic functionaliteits testje maken: primitive two-way binding met getter en setter:

get michielsVar(): string{
  return this._michielsVar;
}
set michielsVar(s: string){
  this._michielsVar = s;
}

changeVar($event){
  this.michielsVar = $event.target.value;
}

getEmail(){
  return this.email;
}
changeEmail($event){
  this.email = $event.target.value;
}
}

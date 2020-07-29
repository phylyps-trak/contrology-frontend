import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocentService {

  constructor(private http: HttpClient) { }

  getTestClient(){
    return this.http.get('https://contrology.one/api/clients/id/3');
  }

}

//standard stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//my stuff
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home.service';
import { ClientsComponent } from './clients/clients.component';
import { ClientsService } from './clients.service';
import { DocentComponent } from './docent/docent.component';
import { DocentService } from './docent.service';
import { NgshitComponent } from './ngshit/ngshit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
//other stuff
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//bootstrap JS stuff
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsComponent,
    DocentComponent,
    NgshitComponent,
    NavbarComponent,
    NotfoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  
    RouterModule.forRoot( [
      {path: '', component: HomeComponent},
      {path: 'clients', component: ClientsComponent},
      {path: 'docent', component: DocentComponent},
      {path: '**', component: NotfoundComponent}

    ]),
],
  providers: [ClientsService, DocentService, HomeService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
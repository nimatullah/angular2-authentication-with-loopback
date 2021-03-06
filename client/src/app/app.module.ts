import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";
import { appRoute } from "./routes";
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TokenService } from "./authentication/token.service";
import { AuthenticationService } from "./authentication/authentication.service";
import { ComputerComponent } from './computer/computer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ComputerComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    TokenService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

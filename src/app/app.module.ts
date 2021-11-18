import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BentoModule } from '@bento/bento-ng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchemeDetailsComponent } from './scheme-details/scheme-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SchemeDetailsComponent
  ],
  imports: [
    BentoModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

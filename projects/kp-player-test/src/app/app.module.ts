import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {KpointAngularPlayerModule} from 'kpoint-angular-player'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KpointAngularPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

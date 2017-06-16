import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, FloorButtonComponent } from './app.component';

import { WfAngular, WfBroadcaster } from '../../../../4';


@NgModule({
  declarations: [
    AppComponent,
    FloorButtonComponent,
    WfAngular,
    WfBroadcaster
  ],
  imports: [
    BrowserModule,
    WfAngular,
    WfBroadcaster
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

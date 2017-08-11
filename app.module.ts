import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdDialogModule, MaterialModule, MdNativeDateModule, } from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { MainComponent } from './app.component';
import { HomeComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { priceChart } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    priceChart
  ],
  entryComponents: [priceChart],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MdDialogModule,
    MaterialModule,
    MdNativeDateModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

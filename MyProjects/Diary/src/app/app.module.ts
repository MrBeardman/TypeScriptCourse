import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DayDetailComponent } from './day-detail/day-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    DayDetailComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

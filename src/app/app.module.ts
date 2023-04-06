import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardDisplayComponent } from './card-display/card-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardFormComponent,
    CardDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

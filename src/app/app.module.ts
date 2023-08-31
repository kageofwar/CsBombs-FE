import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputHomeComponent } from './components/input-home/input-home.component';
import { MapInfoComponent } from './components/map-info/map-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputHomeComponent,
    MapInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

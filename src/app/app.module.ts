import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { InputHomeComponent } from './components/Principal/input-home/input-home.component';
import { MapInfoComponent } from './components/Principal/map-info/map-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './components/Principal/perfil/perfil.component';
import { CreateMapComponent } from './components/admin/create-map/create-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputHomeComponent,
    MapInfoComponent,
    PerfilComponent,
    CreateMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

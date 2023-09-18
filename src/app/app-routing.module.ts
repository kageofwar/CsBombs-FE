import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/headers/header/header.component';
import { InputHomeComponent } from './components/Principal/input-home/input-home.component';
import { MapInfoComponent } from './components/Principal/map-info/map-info.component';
import { PerfilComponent } from './components/Principal/perfil/perfil.component';
import { CreateMapComponent } from './components/admin/create-map/create-map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: InputHomeComponent
  },
  {
    path: 'map_info/:id',
    component: MapInfoComponent
  },  
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'Create-New-Map',
    component: CreateMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

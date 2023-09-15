import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/headers/header/header.component';
import { InputHomeComponent } from './components/Principal/input-home/input-home.component';
import { MapInfoComponent } from './components/Principal/map-info/map-info.component';
import { AdminPageComponent } from './components/principal/admin-page/admin-page.component';

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
    path: 'admin',
    component: AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

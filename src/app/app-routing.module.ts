import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosComponent } from './componentes/datos/datos.component';
import { HomeComponent } from './componentes/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'factura', component: DatosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../app/components/home/home.component";
import { NotasComponent } from "../app/components/notas/notas.component";
import {ModificarNotaComponent} from "../app/components/modificar-nota/modificar-nota.component"
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"notas",component:NotasComponent},
  {path:"modificar-nota",component:ModificarNotaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

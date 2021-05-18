import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecIngresoPage } from './selec-ingreso.page';

const routes: Routes = [
  {
    path: '',
    component: SelecIngresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecIngresoPageRoutingModule {}

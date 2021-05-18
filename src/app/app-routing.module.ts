import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./pages/ingresarEd/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./pages/creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registroEd/registro.module').then( m => m.RegistroPageModule)
  },
  
  {
    path: 'selec-ingreso',
    loadChildren: () => import('./pages/selec-ingreso/selec-ingreso.module').then( m => m.SelecIngresoPageModule)
  },
  {
    path: 'ingresoAd',
    loadChildren: () => import('./pages/admin/ingresoAd/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'registroAd',
    loadChildren: () => import('./pages/admin/registroAd/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./pages/roles/estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./pages/roles/administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    { path: 'principal', loadComponent: () => import ('./vistas/principal/principal').then(m => m.Principal) },
    { path: 'informacion', loadComponent: () => import ('./vistas/informacion/informacion').then(m => m.Informacion) }
];

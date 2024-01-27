import { Routes } from '@angular/router';
import { authGuard } from '../Auth/guards/Auth.guard';



export const routes: Routes = [
  {
    path: 'dashboard',
    canActivate : [authGuard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.routes').then((m) => m.routes),
  },
  {
    path : 'auth',
    canActivate : [authGuard],
    loadChildren :  () => import('./modules/auth/auth.routes').then(m => m.routes),
  }
];

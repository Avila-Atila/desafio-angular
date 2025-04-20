import { Routes } from '@angular/router';
import { autenticarGuard } from './services/autenticar.guard';
export const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent() {
      return import('./login/login.component').then(
        (component) => component.LoginComponent
      );
    },
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent() {
      return import('./home/home.component').then(
        (component) => component.HomeComponent
      );
    },
    canActivate: [autenticarGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

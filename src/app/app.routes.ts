import { Routes } from '@angular/router';
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
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then( c => c.DashboardComponent)},
  {path: 'user', loadComponent: () => import('./user/user.component').then( c => c.UserComponent)}
];

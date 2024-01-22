import { Routes } from '@angular/router';
import {provideState} from "@ngrx/store";
import {userFeatureKey, userReducer} from "./user/store/user.reducer";
import {dashboardFeature} from "./dashboard/store/dashboard.reducer";

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then( c => c.DashboardComponent),
    providers: [
      provideState(dashboardFeature),
    ]
  },
  { path: 'user',
    loadComponent: () => import('./user/user.component').then( c => c.UserComponent),
    providers: [
      provideState({ name: userFeatureKey, reducer: userReducer})
    ]
  }
];

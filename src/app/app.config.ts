import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import {userFeatureKey, userReducer} from "./user/store/user.reducer";
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {dashboardFeature} from "./dashboard/store/dashboard.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};


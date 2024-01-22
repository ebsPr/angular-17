import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import {userFeature, userFeatureKey, userReducer} from "./user/store/user.reducer";
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {dashboardFeature} from "./dashboard/store/dashboard.reducer";
import {provideHttpClient} from "@angular/common/http";
import {provideEffects} from "@ngrx/effects";
import {UserEffects} from "./user/store/user.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideState(userFeature),
    provideEffects(UserEffects),
]
};


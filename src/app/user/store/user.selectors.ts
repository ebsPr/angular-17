import {createFeatureSelector, createSelector} from "@ngrx/store";
import {userFeatureKey, UserState} from "./user.reducer";


export const selectUserFeature = createFeatureSelector<UserState>(userFeatureKey)


export const selectUser = createSelector(
  selectUserFeature,
  (state: UserState) => state.user
)

import {User} from "../../interfaces/user.model";
import {createFeature, createReducer, on} from "@ngrx/store";
import * as UserActions from './user.actions'
import {userActions} from "./user.actions";

export interface UserState {
  user: User | null
}

export const initialState: UserState = {
  user: null
}

export const userReducer = createReducer(
  initialState,
  on(userActions.setUser, (state,{user}) => ({ ...state,user}))
)


export const userFeatureKey = 'userStore'

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer: userReducer
})

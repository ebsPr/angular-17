import {User} from "../../interfaces/user.model";
import {createReducer, on} from "@ngrx/store";
import * as UserActions from './user.actions'

export interface UserState {
  user: User | null
}

export const initialState: UserState = {
  user: null
}

export const userReducer = createReducer(
  initialState,
  on(UserActions.login, (state,{user}) => ({ ...state,user}))
)


export const userFeatureKey = 'userStore'

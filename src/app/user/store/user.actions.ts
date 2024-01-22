import {createAction, createActionGroup, emptyProps, props} from "@ngrx/store";
import {User} from "../../interfaces/user.model";
import {EMPTY} from "rxjs";

// export const login = createAction(
//   '[Login Page] Login',
//   props<{ user: User}>()
// )

export const userActions = createActionGroup({
  source: 'Login Page',
  events: {
    setUser: props<{ user: User}>(),
    login: emptyProps
  }
})

import {createAction, createActionGroup, props} from "@ngrx/store";


// export const setHours = createAction(
//   '[Dashboard page] set Hours ',
//   props<{ hours: number}>()
// )
//
// export const setMood = createAction(
//   '[Dashboard page] set mood',
//   props<{ mood: string}>()
// )

export  const dashboardGroupActions = createActionGroup({
  source: 'Dashboard Page',
  events: {
    setHours:  props<{ hours: number}>(),
    setMood:   props<{ mood: string}>()
  }
})

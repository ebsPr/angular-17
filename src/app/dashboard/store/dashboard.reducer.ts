import {createFeature, createReducer, createSelector, on} from "@ngrx/store";
import {dashboardGroupActions} from './dashboard.actions'
export interface DashboardState {
  mood: string;
  hours: number;
}

export const initialState: DashboardState = {
  mood: '',
  hours: 0
}

export const dashboardReducer = createReducer(
  initialState,
  on(dashboardGroupActions.setHours, (state, {hours}) => ({ ...state, hours})),
  on(dashboardGroupActions.setMood, (state, {mood}) => ({ ...state, mood}))
)

export const dashboardKey = 'dashboardStore'

export const dashboardFeature = createFeature({
  name: dashboardKey,
  reducer: dashboardReducer,
  extraSelectors: ({selectMood,selectHours}) => {
    return {
      selectMoodAndHours : createSelector(
        selectMood,
        selectMood,
        (mood, hours) => `You have listened ${hours} of music and you are ${mood}`
      )
    }
  }
})

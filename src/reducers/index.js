import { combineReducers } from "redux"
import events, * as fromEvents from "./events"
import users, * as fromUsers from "./users"
import { reducer as formReducer } from "redux-form"

const eventApp = combineReducers({
  events,
  users,
  form: formReducer
})
export default eventApp

//Events
export const getSearchEventsResult = (offset, count, query, state) =>
  fromEvents.getSearchEventsResult(offset, count, query, state.events)

export const getEventsSearchTotalCount = (query, state) => fromEvents.getEventsSearchTotalCount(query, state.events)

export const getEventById = (state, id) => fromEvents.getEventById(state.events, id)
export const getIsEventFetching = (id, state) => fromEvents.getIsEventFetching(id, state.events)

export const getIfEventsSearchFetching = (offset, count, query, state) =>
    fromEvents.getIfEventsSearchFetching(offset, count, query, state.events)

//Users
export const getSearchUsersResult = (offset, count, query, state) =>
  fromUsers.getSearchUsersResult(offset, count, query, state.users)

export const getUsersSearchTotalCount = (query, state) => fromUsers.getUsersSearchTotalCount(query, state.users)

export const getIfUsersSearchFetching = (offset, count, query, state) =>
  fromUsers.getIfUsersSearchFetching(offset, count, query, state.users)

export const getUserById = (state, id) => fromUsers.getUserById(state.users, id)
export const getIsUserFetching = (id, state) => fromUsers.getIsUserFetching(id, state.users)

import { combineReducers } from "redux";
import events, * as fromEvents from "./events";
import users, * as fromUsers from "./users";
// import users from "./users";

const eventApp = combineReducers({
    events,
    users
});
export default eventApp;

export const getIsEventProcessing = state => fromEvents.getIsEventProcessing(state.events);

export const getAllAvailableEvents = state => fromEvents.getAllAvailableEvents(state.events);
export const getEventById = (id, state) => fromEvents.getEventById(id, state.events);
export const getIsEventFetching = (id, state) => fromEvents.getIsEventFetching(id, state.events);


export const getIsUserProcessing = state => fromUsers.getIsUserProcessing(state.users);
export const getAllAvailableUsers = state => fromUsers.getAllAvailableUsers(state.users);
export const getUserById = (id, state) => fromUsers.getUserById(id, state.users);
export const getIsUserFetching = (id, state) => fromUsers.getIsUserFetching(id, state.users);



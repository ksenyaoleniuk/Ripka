import { v4 } from "uuid";
import { deleteData, getData, postData } from "./api";

// const API_ENDPOINT = "http://localhost:3000";

export const fetchSliceEvents = num =>
    getData("http://localhost:3000/events?_start=" + num + "&_limit=4");

export const fetchEvents = () => getData('http://localhost:3000/events');

export const fetchEvent = id => getData(`http://localhost:3000/events/${id}`);

export const addEvent = newEvent =>
    postData("http://localhost:3000/events", newEvent);

export const fetchUsers = () => getData("http://localhost:3000/users");

export const fetchUser = id => getData(`http://localhost:3000/users/${id}`);

export const addUser = newUser =>
    postData("http://localhost:3000/users", newUser);

export const deleteEvent = async id =>
    await deleteData("http://localhost:3000/events", id);
import { deleteData, getData, postData, putData } from "./api"

const API_ENDPOINT = "http://localhost:3000"
export const CLOUDINARY_URL = "https://res.cloudinary.com/ucu/image/upload/"
export const API_KEY = "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"

export const findEvents = (query, offset, count) =>
  getData(`${API_ENDPOINT}/events?q=${query}&_page=${Math.floor(offset / count) + 1}&_limit=${count}`)

export const findUsers = (query, offset, count) =>
    getData(`${API_ENDPOINT}/users?q=${query}&_page=${Math.floor(offset / count) + 1}&_limit=${count}`)

export const fetchSliceEvents = num => getData(`${API_ENDPOINT}/events?_start=` + num + "&_limit=4")

export const fetchEvents = () => getData(`${API_ENDPOINT}/events`)

export const fetchEvent = id => getData(`${API_ENDPOINT}/events/${id}`)

export const addEvent = newEvent => postData(`${API_ENDPOINT}/events`, newEvent)

export const fetchUsers = () => getData(`${API_ENDPOINT}/users`)

export const fetchUser = id => getData(`${API_ENDPOINT}/users/${id}`)

export const addUser = newUser => postData(`${API_ENDPOINT}/users`, newUser)

export const deleteEvent = async id => await deleteData(`${API_ENDPOINT}/events`, id)

export const deleteUser = async id => await deleteData(`${API_ENDPOINT}/users`, id)

export const editEvent = (id, data) => putData(`${API_ENDPOINT}/events/${id}`, data)

export const editUser = (id, data) => putData(`${API_ENDPOINT}/users/${id}`, data)

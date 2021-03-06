import React from "react"
import {NavLink, withRouter} from "react-router-dom"
import moment from "moment"

import { connect } from "react-redux"
import {CLOUDINARY_URL} from "../../api/index"

import MapContainer from "../MapContainer/MapContainer"
import PageNotFound from "../PageNotFound/PageNotFound"

import { deleteEvent } from "../../actions/events"

import "../../styles/map.scss"
import "./EventDetails.scss"

import block from "../../helpers/BEM"
import {compose} from "ramda"
import {withEvent} from "../HOC/event"
import { branch, renderComponent, withHandlers, withProps } from "recompose"

const b = block("EventDetails")
const formatDate = date => new Date(moment(date).format()).toDateString()

const EventDetails = ({event, deleteEvent, onDeleteSuccess}) => (
            <div className={b()}>
                <div className={b("settings")}>
                        <NavLink className={b("settings-text")} to={"/events/edit/" + event.id}>Edit event</NavLink>

                        <button
                            className={b("settings-text")}
                            onClick={async () => {
                                await deleteEvent(event.id)
                              onDeleteSuccess()
                            }}
                        >
                            Delete event
                        </button>
                </div>
                <div className={b("header")}>
                    <div className={b("header", ["container"])}>
                        <h1 className={b("name")}>{event.name}</h1>
                        <h2 className={b("organization")}>{event.organization}</h2>
                        <div>
                            <p className={b("location")}>{event.location}</p>
                        </div>
                        <div className={b("options")}>
                            <button className={b("option-button")}>
                                <span className={b("icon", ["heard"])} />
                                Bookmark
                            </button>
                            <button className={b("option-button")}>
                                <span className={b("icon", ["flag"])} />
                                Report
                            </button>
                        </div>
                    </div>
                </div>
                <div className={b("details")}>
                    <div className={b("details", ["left-block"])}>
                        <div className={b("details-title")}>
                            <span className={b("icon", ["push-pin"])} />
                            <h3>Event Overview</h3>
                        </div>
                        <div>
                            <p className={b("story-title")}>Date & Time</p>
                            <p className={b("story")}>{formatDate(event.time)}</p>
                        </div>
                        <div>
                            <p className={b("story-title")}>Categories</p>
                            <p className={b("story")}>{event.category}</p>
                        </div>
                        <div>
                            <p className={b("story-title")}>Organization</p>
                            <p className={b("story")}>{event.organization}</p>
                        </div>
                        <div className={b("details-title")}>
                            <span className={b("icon", ["legal-paper"])} />
                            <h3>Event description</h3>
                        </div>
                            <p className={b("story")}>{event.description}</p>
                    </div>
                    <div className={b("details", ["right-block"])}>
                        <img className={b("photo")} src={CLOUDINARY_URL + "c_fill,q_90/" + event.photo + ".jpg"}
                             alt={"name"}/>
                        <div className={b("details-title")}>
                            <span className={b("icon", ["contact"])} />
                            <h3>Contacts of organization</h3>
                        </div>
                        <div>
                            <p className={b("story-title", ["phone"])}>Phone number</p>
                            <p className={b("story")}>{event.contacts}</p>
                        </div>
                        <div className={b("details-title")}>
                            <span className={b("icon", ["location"])} />
                            <h3>Location</h3>
                        </div>
                        <div>
                            <p className={b("story-title", ["location"])}>City, country</p>
                            <p className={b("story")}>{event.location}</p>
                        </div>
                        <div className="map__container-for-event">
                            <MapContainer events={[event.id]}/>
                        </div>
                    </div>
                </div>
            </div>
)

const enhance = compose(
    withRouter,
  withHandlers({
    onDeleteSuccess: ({ history }) => () => history.push("/events")
  }),
    withProps(({match}) => ({id: match.params.id})),
    withEvent,
    branch(({ event }) => !event, renderComponent(PageNotFound)),
  connect(null, {deleteEvent})
)

export default enhance(EventDetails)

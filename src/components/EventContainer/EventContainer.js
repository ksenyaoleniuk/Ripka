import Event from "../Event/Event";
import React, {Fragment} from "react";
import Cover from "../Landing/Landing";
import MapContainer from '../MapContainer/MapContainer'

import "../../../styles/event.less";
import "../../../styles/common.less"

const EventContainer = ({events, onEventClick}) => (
    <Fragment>
        <div className='event__subnav'>
            <button className='event__signUp'>Sign up</button>
            <span className='event__divider'></span>
            <button className='event__logIn'>Log in</button>
        </div>
        <h1 className="event__title">Events</h1>
        <div className="event__content">
            <div className="event__block">
                {events.map(event => (
                    <Event
                        key={event.id}
                        {...event}
                        onClick={() => onEventClick(event.id)}
                    />
                ))}
            </div>
            <MapContainer events={events}/>
        </div>
    </Fragment>
);

export default EventContainer;

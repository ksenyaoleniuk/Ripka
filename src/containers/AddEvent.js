import React from 'react'
import {addEvent} from '../actions/index'
import {connect} from 'react-redux'
import {DateTime} from "luxon"
import {Link} from "react-router-dom";
let AddEvent = ({dispatch}) => {
    let name, description, organization, contacts, year, month, day, hour, minute, location, photo;
    return (
        <div>
            <div className="add-event__title_container">
            <h1 className="add-event__title">Add event details</h1>
            </div>
<div className="add-event__subtitle_container">
            <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png"/>
                <h1 className="add-event__subtitle">Event Overview</h1>
</div>



        <div className="add-event__input_container">
                <p className="add-event__field">EVENT NAME</p>
                <input className="add-event__input" placeholder="Event Name" ref={node => {
                    name = node;
                }}/>
            </div>
            <div className="add-event__input_container">
                <p className="add-event__field">ORGANIZATION NAME</p>
                <input className="add-event__input" placeholder="Organization Name" ref={node => {
                    organization = node;
                }}/>
            </div>
            <div className="add-event__input_container">
                <p className="add-event__field">LOCATION</p>
                <input className="add-event__input" placeholder="Location" ref={node => {
                    location = node;
                }}/>
            </div>
            <div className="add-event__input_container">
                <p className="add-event__field">CONTACTS</p>
                <input className="add-event__input" placeholder="Contacts" ref={node => {
                    contacts = node;
                }}/>
            </div>
            <div className="add-event__input_container">
                <p className="add-event__field">EVENT DESCRIPTION & REQUIREMENTS</p>
                <input className="add-event__input" placeholder="Description" ref={node => {
                    description = node;
                }} required/>
            </div>
            <div className="add-event__input_container">
                <p className="add-event__field">ENTER DATE</p>
            <input className="add-event__input" placeholder="DD" ref={node => {
                day = node;
            }}/>
            <input className="add-event__input" placeholder="MM" ref={node => {
                month = node;
            }}/>
            <input className="add-event__input" placeholder="YYYY" ref={node => {
                year = node;
            }}/>
            </div>
            <div className="add-event__input_container">
            <p className="add-event__field">ENTER TIME</p>
            <input className="add-event__input" placeholder="HH" ref={node => {
                hour = node;
            }}/>
            <input className="add-event__input" placeholder="MM" ref={node => {
                minute = node;
            }}/>
        </div>
            <div className="add-event__input_container">
                <p className="add-event__field">DOWNLOAD PHOTO</p>
                <p className="add-event__input">
                <input className="add-event__photo" type='file'  ref={node => {
                    photo = node;}}
                />
                </p>

            </div>
            <div className="add-event__submit-container">


                <Link to="/">

                <button className="add-event__submit" onClick={() => {
                const toDate = DateTime.fromObject({
                    year: Number(year.value),
                    month: Number(month.value),
                    day: Number(day.value),
                    hour: Number(hour.value),
                    minute: Number(minute.value)
                });
                console.log("toDate:",toDate.toFormat("yyyy"))
                if (checkField([location.value,
                        description.value,
                        contacts.value,
                        name.value,
                        description.value,
                        year.value,
                        month.value,
                        day.value,
                        hour.value,
                        minute.value])
                ) {
                    dispatch(addEvent(
                        name.value,
                        description.value,
                        toDate,
                        organization.value,
                        contacts.value,
                        location.value,
                        photo.value,
                    ));

                }
                description.value =
                    contacts.value =
                    name.value =
                        description.value =
                        location.value =
                            minute.value =
                            year.value =
                                month.value =
                                hour.value =
                                    day.value =
                                        photo.value = ''
            }}>
                Add Event
            </button>

                </Link>
            </div>
        </div>
    );
};
const checkField = (array1) => {
    console.log("aaa", array1);
    for (let i in array1) {
        console.log('i:', array1[i]);
        if (array1[i] === "") {
            alert("Value should be between 0 - 100");
            return true
        }
        return true
    }
}


AddEvent = connect()(AddEvent);
export default AddEvent
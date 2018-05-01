import "../../styles/add-event.less";
import {Component} from "react";
import {DateTimePicker} from "react-datetime-picker";
import {connect} from "react-redux";
import {getIsEventProcessing} from "../../reducers";

class EventEdit extends Component {
    static defaultProps = {
        onSuccess() {}
    };
    static getDerivedStateFromProps(
        { isEventProcessing, onSuccess },
        { formSubmitted }
    ) {
        if (formSubmitted && !isEventProcessing) {
            onSuccess();
        }
        return {};
    }
    state = {
        name: "Name",
        description: `
      It's time for Lviv to wake up to the power of JavaScript.
      Dear all, we want to invite you to our April JavaScript Event. During this meetup we gonna listen two to cool speakers:
      Rostyslav Belmeha - “Angular with Redux do I need it?”
      Varenko Nodarii - "Web UI Performance checklist."
      April JavaScript Event is all about JavaScript and sharing our experience!
      Don't forget to register: https://goo.gl/NQ777x :)
      P.S. Whether you are going to code your first lines of JavaScript, or create some magic – feel free to join us, all skill levels are very welcome!
    `,
        organization: "SoftServe",
        contacts: "Hello",
        time: new Date(),
        location: "Hello",
        photo: "Hello",
        formSubmitted: false
    };
    handleSubmit = ev => {
        ev.preventDefault();
        const { addEvent } = this.props;
        const { formSubmitted, ...event } = this.state;

        //TODO: verify data;

        addEvent(event);
        this.setState({ formSubmitted: true });
    };

    changeHandler = property => ev => {
        const { value } = ev.target;
        this.setState({ [property]: value });
    };

    render() {
        const {
            name,
            description,
            organization,
            contacts,
            time,
            location,
            formSubmitted
        } = this.state;
        const { event } = this.props;

        if (!event) { return "Loading..."; }
        return (
            <form className="add-event" onSubmit={this.handleSubmit}>
                {formSubmitted && <div className="add-event__carpet" />}
                <div className="add-event__title_container">
                    <h1 className="add-event__title">Add event details</h1>
                </div>
                <div className="add-event__subtitle_container">
                    <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png" />
                    <h1 className="add-event__subtitle">Event Overview</h1>
                </div>

                <label className="add-event__input_container">
                    <span className="add-event__field">Event name</span>
                    <input
                        className="add-event__input"
                        placeholder="Event Name"
                        value={event.name}
                        onChange={this.changeHandler("name")}
                    />
                </label>
                <div className="add-event__input_container">
                    <p className="add-event__field">ORGANIZATION NAME</p>
                    <input
                        className="add-event__input"
                        placeholder="Organization Name"
                        value={event.organization}
                        onChange={this.changeHandler("organization")}
                    />
                </div>
                <div className="add-event__input_container">
                    <p className="add-event__field">LOCATION</p>
                    <input
                        className="add-event__input"
                        placeholder="Location"
                        value={event.location}
                        onChange={this.changeHandler("location")}
                    />
                </div>
                <div className="add-event__input_container">
                    <p className="add-event__field">CONTACTS</p>
                    <input
                        className="add-event__input"
                        placeholder="Contacts"
                        value={event.contacts}
                        onChange={this.changeHandler("contacts")}
                    />
                </div>

                <div className="add-event__input_container">
          <span className="add-event__field">
            EVENT DESCRIPTION & REQUIREMENTS
          </span>
                    <textarea
                        className="add-event__textarea"
                        placeholder="Description"
                        value={event.description}
                        onChange={this.changeHandler("description")}
                        required
                    />
                </div>

                <div className="add-event__input_container">
                    <span className="add-event__field">Time</span>
                    <DateTimePicker
                        value={event.time}
                        onChange={time => this.setState({ time })}
                    />
                </div>

                {/*<div className="add-event__input_container">*/}
                    {/*<p className="add-event__field">DOWNLOAD PHOTO</p>*/}
                    {/*<PhotoUpload photo={URL => this.setState({ photo: URL })} />*/}
                {/*</div>*/}

                <div className="add-event__submit-container">
                    <button className="add-event__submit">Save changes</button>
                </div>
            </form>
        );
    }
}


export default connect(
    state => ({
        isEventProcessing: getIsEventProcessing(state)
    }),
    { editEvent }
)(EventEdit);
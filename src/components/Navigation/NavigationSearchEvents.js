import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink, withRouter } from "react-router-dom"

import { searchEvents } from "../../actions/search"

import "./Navigation.scss"
import block from "../../helpers/BEM";

const b = block('Navigation')
class NavigationSearchEvents extends Component {
  state = {
    filter: ""
  }

  changeHandler = property => ev => {
    const { value } = ev.target
    const { searchEvents } = this.props
    searchEvents(ev.target.value)
    this.setState({ [property]: value })
  }

  render() {
    const { foundEvents } = this.props
    const { filter, formSubmitted } = this.state

    return (
      <form>
        {formSubmitted && <div className={b('carpet')} />}
        <div className={b('search-bar')}>
          <input
            value={filter}
            onChange={this.changeHandler("filter")}
            placeholder="Search by key word"
            className={b('search-bar_filter')}
          />
          <div className={b('search-bar_filter_content')}>
            {foundEvents.map(({ id, name }) => (
              <NavLink className={b('search-bar_filter_content_item')} key={id} to={"/events/" + id}>
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      </form>
    )
  }
}

NavigationSearchEvents = withRouter(
  connect(
    store => {
      const foundEvents = store.events.searchEvents
      return {
        foundEvents
      }
    },
    { searchEvents }
  )(NavigationSearchEvents)
)

export default NavigationSearchEvents

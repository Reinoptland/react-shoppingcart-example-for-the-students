import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CheckOutButton extends Component {
  static propTypes = {
    checkThisOut: PropTypes.func.isRequired,
    total: PropTypes.number
  }

  handleClick = () => {
    this.props.checkThisOut()
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}>I AM DONE SHOPPIN!</button>
        { this.props.total && <h1>THAT WILL BE: { this.props.total }</h1> }
      </div>
    )
  }
}

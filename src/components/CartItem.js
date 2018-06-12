import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CartItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    onPlusClick: PropTypes.func.isRequired
  }

  increment = () => {
    const { onPlusClick, id } = this.props
    onPlusClick(id)
  }

  render(){
    const { name, price, quantity} = this.props
    return (
      <div>
        <h4>{name}</h4>
        <h5>{price}</h5>
        <h6>Current quantity: {quantity}</h6>
        <button onClick={this.increment}>BUY ME! PLOX</button>
      </div>
    )
  }
}

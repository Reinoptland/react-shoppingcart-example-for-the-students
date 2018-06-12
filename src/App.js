import React, { Component } from 'react';
import './App.css';

import CartItem from './components/CartItem'
import CheckOutButton from './components/CheckOutButton'
import Clock from 'react-live-clock'

class App extends Component {
  state = { products: [
    {
        id: 1,
        name: "Prada Shoes",
        price: 570,
        quantity: 0
    },
    {
        id: 2,
        name: "Rolex Watch",
        price: 649,
        quantity: 0
    },
    {
        id: 3,
        name: "Paper clips",
        price: 0.1,
        quantity: 0
    }]
  }

  incrementQuantity = (productId) => {
    const newProducts = this.state.products.map(product => {
      if (product.id === productId) {
        product.quantity += 1
      }
      return product
    })

    this.setState({ products: newProducts })
  }

  checkThisOut = () => {
    const total = this.state.products.reduce((runningTotal, product) => {
      return runningTotal += product.quantity * product.price
    }, 0)

    this.setState({ total })
  }

  render() {
    return (
      <div className="App">
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
        {
          this.state.products.map(product => <CartItem
              key={product.id}
              onPlusClick={this.incrementQuantity}
              {...product}
            />
          )
        }
        <CheckOutButton checkThisOut={this.checkThisOut} total={this.state.total} />
      </div>
    );
  }
}

export default App;

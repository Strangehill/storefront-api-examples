import React, { Component } from 'react';
import styled from 'styled-components';

import Products from './components/Products';
import Cart from './components/Cart';

const AppHeader = styled.header`
  background-color: #222;
  background-image: url('https://unsplash.it/1000/300?image=823');
  background-size: cover;
  color: white;
  padding: 10px 10px;
`

const AppTitle = styled.div`
  padding: 80px 20px;
  text-align: center;
`

const AppViewCartWrapper = styled.div`
  float: right;
`

const AppViewCart = styled.button`
  font-size: 15px;
  border: none;
  background: none;
  cursor: pointer;
  color: white;
`

class App extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {}
    };
  }

  componentDidMount() {
    this.props.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    this.props.client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
    });

    this.props.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  addVariantToCart = (variantId, quantity) => {
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  updateQuantityInCart = (lineItemId, quantity) => {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

    return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart = (lineItemId) => {
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  handleCartClose = () => {
    this.setState({
      isCartOpen: false,
    });
  }

  render() {
    return (
      <div>
        <AppHeader>
          {!this.state.isCartOpen &&
            <AppViewCartWrapper>
              <AppViewCart onClick={()=> this.setState({isCartOpen: true})}>Cart</AppViewCart>
            </AppViewCartWrapper>
          }
          <AppTitle>
            <h1>{this.state.shop.name}: React Example</h1>
            <h2>{this.state.shop.description}</h2>
          </AppTitle>
        </AppHeader>
        <Products
          products={this.state.products}
          client={this.props.client}
          addVariantToCart={this.addVariantToCart}
        />
        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
      </div>
    );
  }
}

export default App;

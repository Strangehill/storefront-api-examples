import React from 'react';
import LineItem from './LineItem';
import Button from './Button';
import styled from 'styled-components';

const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e5e5e5;
  transform: translateX(100%);
  transition: transform 0.15s ease-in-out;
  ${props => props.CartOpen && `
    transform: translateX(0);
  ` }
`
const Header = styled.header`
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  flex: 0 0 auto;
  display: inline-block;
`
const LineItems = styled.ul`
  flex: 1 0 auto;
  margin: 0;
  padding: 20px;
`
const Footer = styled.footer`
  padding: 20px;
  border-top: 1px solid #e5e5e5;
  flex: 0 0 auto;
`
const CartInfo = styled.div`
  padding: 15px 20px 10px;
`
const Total = styled.div`
  float: left;
  text-transform: uppercase;
  ${props => props.Small && `
    font-size: 11px;
  ` }
`
const Pricing = styled.div`
  float: right;
  > span {
    margin-left: 5px;
    font-size: 16px;
    color: black;
  }
`

const Cart = (props) => {

  let openCheckout = () => window.open(props.checkout.webUrl);

  let line_items = props.checkout.lineItems.map((line_item) => {
    return (
      <LineItem
        updateQuantityInCart={props.updateQuantityInCart}
        removeLineItemInCart={props.removeLineItemInCart}
        key={line_item.id.toString()}
        line_item={line_item}
        />
      );
    }
  );

  return (
    <CartWrapper CartOpen={props.isCartOpen}>
      <Header>
        <h2>Your cart</h2>
        <Button
          onClick={props.handleCartClose}
          CartClose>
          ×
        </Button>
      </Header>
      <LineItems>
        {line_items}
      </LineItems>
      <Footer>
        <CartInfo>
          <Total Small>Subtotal</Total>
          <Pricing>
            <span>$ {props.checkout.subtotalPrice}</span>
          </Pricing>
        </CartInfo>
        <CartInfo>
          <Total Small>Taxes</Total>
          <Pricing>
            <span>$ {props.checkout.totalTax}</span>
          </Pricing>
        </CartInfo>
        <CartInfo>
          <Total Small>Total</Total>
          <Pricing>
            <span>$ {props.checkout.totalPrice}</span>
          </Pricing>
        </CartInfo>

        <Button CartCheckout onClick={openCheckout}>Checkout</Button>
      </Footer>
    </CartWrapper>
  )
}

export default Cart;

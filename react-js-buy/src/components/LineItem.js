import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const LineItemWrapper = styled.li`
  margin-bottom: 20px; overflow: hidden;
  backface-visibility: visible;
  min-height: 65px;
  position: relative;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
`
const Img = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 3px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #e5e5e5;
  position: absolute;
`
const Content = styled.div`
  width: 100%;
  padding-left: 75px;
`
const ContentRow = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 5px;
  position: relative;
`
const VariantTitle = styled.div`
  float: right;
  font-weight: bold;
  font-size: 11px;
  line-height: 17px;
  color: #767676;
`
const Title = styled.span`
  color: #4E5665;
  font-size: 15px;
  font-weight: 400;
`
const QuantityContainer = styled.div`
  border: 1px solid #767676;
  float: left;
  border-radius: 3px;
`
const Quantity = styled.span`
  color: black;
  width: 38px;
  height: 21px;
  line-height: 23px;
  font-size: 15px;
  border: none;
  text-align: center;
  -moz-appearance: textfield;
  background: transparent;
  border-left: 1px solid #767676;
  border-right: 1px solid #767676;
  display: block;
  float: left;
  padding: 0;
  border-radius: 0;
`
const Price = styled.span`
  line-height: 23px;
  float: right;
  font-weight: bold;
  font-size: 15px;
  margin-right: 40px;
`

const LineItem = (props) => {

  const decrementQuantity = (lineItemId) => {
    const updatedQuantity = props.line_item.quantity - 1
    props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  const incrementQuantity = (lineItemId) => {
    const updatedQuantity = props.line_item.quantity + 1
    props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  return (
    <LineItemWrapper>
      <Img>
        {props.line_item.variant.image ? <img src={props.line_item.variant.image.src} alt={`${props.line_item.title} product shot`}/> : null}
      </Img>
      <Content>
        <ContentRow>
          <VariantTitle>
            {props.line_item.variant.title}
          </VariantTitle>
          <Title>
            {props.line_item.title}
          </Title>
        </ContentRow>
        <ContentRow>
          <QuantityContainer>
            <Button LineItemQuantityUpdate onClick={() => decrementQuantity(props.line_item.id)}>-</Button>
            <Quantity>{props.line_item.quantity}</Quantity>
            <Button LineItemQuantityUpdate onClick={() => incrementQuantity(props.line_item.id)}>+</Button>
          </QuantityContainer>
          <Price>
            $ { (props.line_item.quantity * props.line_item.variant.price).toFixed(2) }
          </Price>
          <Button LineItemRemove onClick={()=> props.removeLineItemInCart(props.line_item.id)}>×</Button>
          </ContentRow>
        </Content>
      </LineItemWrapper>
  );
}

export default LineItem;

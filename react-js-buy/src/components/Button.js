import styled from 'styled-components';

const Button = styled.button`
  background-color: #2752ff;
  color: white;
  border: none;
  font-size: 1.2rem;
  padding: 10px 17px;
  cursor: pointer;
  &:hover, &:focus {
    background-color: #222222;
  }
  &:disabled {
  background: #bfbfbf;
  cursor: not-allowed;
  }
  ${props => props.CartClose && `
    position: absolute;
    right: 9px;
    top: 8px;
    font-size: 35px;
    color: #999;
    border: none;
    background: transparent;
    transition: transform 100ms ease;
    cursor: pointer;
  ` }
  ${props => props.CartCheckout && `
    margin-top: 20px;
    display: block;
    width: 100%;
  ` }
  ${props => props.LineItemQuantityUpdate && `
    color: #767676;
    display: block;
    float: left;
    height: 21px;
    line-height: 16px;
    font-family: monospace;
    width: 25px;
    padding: 0;
    border: none;
    background: transparent;
    box-shadow: none;
    cursor: pointer;
    font-size: 18px;
    text-align: center;
  ` }
  ${props => props.LineItemRemove && `
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background: 0;
    font-size: 20px;
    top: -4px;
    opacity: 0.5;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  ` }
`

export default Button;

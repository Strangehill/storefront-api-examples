import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import { injectGlobal } from 'styled-components';

const client = Client.buildClient({
  storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
  domain: 'graphql.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);

// the following global styles injection will result in an eslint warning. To avoid this I could replace "injectGlobal`" with "injectGlobal([`" and match the brackets and parenthesis at the end, or use the comment that follows.
// eslint-disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
  *, *:before, *:after { box-sizing: border-box; }
  html { font-size: 65%; }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  h1 {
    font-weight: 300;
    margin: 0 0 15px;
    font-size: 3rem;
  }

  h2 {
    font-weight: 300;
    margin: 0;
    font-size: 2rem;
  }
`

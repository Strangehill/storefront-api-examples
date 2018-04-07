import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 40px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = (props) => {
  let products = props.products.map((product) => {
    return (
      <Product
        addVariantToCart={props.addVariantToCart}
        client={props.client}
        key={product.id.toString()}
        product={product}
        />
      );
    }
  );

  return (
    <Wrapper>
      {products}
    </Wrapper>
  );
}

export default Products;

import React from 'react';
import { func, string, array, object, arrayOf, shape } from 'prop-types';

import Product from './Product';

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
  });

  return (
    <div className="Product-wrapper">
      {products}
    </div>
  );
}

Products.propTypes = {
  addVariantToCart: func,
  client: object,
  products: arrayOf(
    shape({
      title: string,
      options: arrayOf(
        shape({
          id: string,
          name: string,
          values: array
        })
      )
    })
  )
}

export default Products;

import React from 'react';
import PropTypes from 'prop-types';

import Product, { ProductType } from './Product';

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
  addVariantToCart: PropTypes.func,
  client: PropTypes.object,
  products: PropTypes.arrayOf(ProductType)
}

export default Products;

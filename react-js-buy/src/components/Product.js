import React, {Component} from 'react';
import VariantSelector from './VariantSelector';
import Button from './Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 0 1 31%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 3%;
`;

const Title = styled.h5`
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  opacity: 0.7;
`

const Price = styled.span`
  display: block;
  font-size: 1.1rem;
  opacity: 0.5;
  margin-bottom: 0.4rem;
`

const Option = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`

class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };
  }

  findImage = (images, variantId) => {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange = (event) => {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  handleQuantityChange = (event) => {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });
    return (
      <Wrapper>
        {this.props.product.images.length ? <img src={variantImage.src} alt={`${this.props.product.title} product shot`}/> : null}
        <Title>{this.props.product.title}</Title>
        <Price>${variant.price}</Price>
        {variantSelectors}
        <Option>
          Quantity
          <input min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
        </Option>
        <Button onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</Button>
      </Wrapper>
    );
  }
}

export default Product;

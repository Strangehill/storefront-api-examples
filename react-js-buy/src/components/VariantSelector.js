import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;

const VariantSelector = (props) => {
  return (
    <Select
      name={props.option.name}
      key={props.option.name}
      onChange={props.handleOptionChange}
      >
      {props.option.values.map((value) => {
        return (
          <option value={value} key={`${props.option.name}-${value}`}>{`${value}`}</option>
            )
          }
        )
      }
    </Select>
  )
}

export default VariantSelector;

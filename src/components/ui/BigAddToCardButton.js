import React from "react";
import styled from 'styled-components';


const AddToCardButton = styled.button`
  width: 200px;
  height: 42px;
  background-color: #00A87E;
  color: #131313;
  font-family: Montserrat,sans-serif;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid #0027601F;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 0 10px 0 rgb(0 39 96 / 12%);
  }
;
`

const BigAddToCardButton = ({text}) => {
  return (
      <AddToCardButton>{text}</AddToCardButton>
    )
}

export default BigAddToCardButton
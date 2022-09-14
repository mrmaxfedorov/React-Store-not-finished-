import React from "react";
import styled from 'styled-components';
import { FC } from 'react';

interface ButtonProps {
  text: string;
}

const Button = styled.button`
  width: 200px;
  height: 42px;
  background-color: #D58C51;
  color: #131313;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  border: none;
  cursor: pointer;
;
`

export const OrangeButton: FC <ButtonProps> = ({text}) => {
  return (
      <Button>{text}</Button>
    )
}
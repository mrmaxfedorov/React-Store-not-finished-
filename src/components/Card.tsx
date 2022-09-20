import { FC } from 'react';
import React from 'react';
import addToBucketIcon from '../icons/regularAddIcon.svg';
import styled from 'styled-components';
import HoveredAddIcon from '../icons/hoveredAddIcon.svg';

interface ICardStyled {
  isActive?: boolean;
}

const CardWrapper = styled.div<ICardStyled>`
  border: 1px solid #D58C51;
  width: 311px;
  height: 550px;
  position: relative;
`;
const CardImage = styled.img`
  padding: 42px 0 30px 20px;
`;
const CardBigText = `
  padding-left: 21px;
  font-weight: 500;
  font-family: Montserrat;
  color: #FFFFFF;
  font-size: 17px;
`;
const CardTitle = styled.h2`
  ${CardBigText};
  padding-right: 20px;
  margin-bottom: 9px;
`;
const CardPrice = styled.p`
  ${CardBigText};
  margin-right: 7px;
`;
const CardSmallText = `
  font-weight: 400;
  line-height: 20px;
  font-family: Montserrat;
  color: #FFFFFF;
  font-size: 14px;
`;
const CardDescription = styled.p`
  ${CardSmallText};
  padding-left: 21px;
  padding-right: 25px;
`;
const CardWeight = styled.p`
  ${CardSmallText};
`;
const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: auto;
`;
const CardBottomLeft = styled.div`
  position: absolute;
  bottom: 35px;
  display: flex;
  flex-direction: row;
`;
const CardIcon = styled.img`
  width: 30px;
  right: 30px;
  position: absolute;
  bottom: 32px;
  cursor: pointer;
  &:hover {
    background: url(${HoveredAddIcon});
  }
`;
const CardButton = styled.button`
  padding: 0;
  border: 0;
`

interface ICardProps {
  url: string,
  title: string,
  description: string,
  price: string,
  weight: string,
  handleclick: any,
}

export const Card: FC<ICardProps> = ({ url, title, description, price, weight, handleclick }) => {
  return (
    <CardWrapper>
      <CardImage src={url} alt="" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        {description}
      </CardDescription>
      <CardBottom>
        <CardBottomLeft>
          <CardPrice>{price}  ₽</CardPrice>
          <CardWeight>/ {weight}</CardWeight>
        </CardBottomLeft>
        <CardButton onClick={handleclick} className="card__button">
          <CardIcon src={addToBucketIcon} alt="" />
        </CardButton>
      </CardBottom>
    </CardWrapper>
  );
};



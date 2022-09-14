import addToBucketIcon from '../icons/regularAddIcon.svg';
import styled from 'styled-components';
import { FC } from 'react';
import React from 'react';

interface ICardStyled {
  isActive?: boolean;
}
   
const CardWrapper = styled.div<ICardStyled>`
  border: 1px solid #D58C51;
  width: 311px;
  height: 550px;
  position: relative;
  
`

interface ICardProps {
  url: string,
  title: string,
  description: string,
  price: string,
  weight: string,
  handleclick: any,
}

export const Card: FC <ICardProps> = ({url, title, description, price, weight, handleclick}) =>  { 
  return (
    <CardWrapper>
      <img className="card__img" src={url} alt="" />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">
        {description}
      </p>
      <div className="card__bottom">
        <div className="card__bottom-left">
          <p className="card__price">{price}</p>
          <p className="card__weight">{weight}</p>
        </div>
        <button onClick={handleclick} className="card__button">
          <img id='cardIcon' className="card__icon" src={addToBucketIcon} alt=""/>
        </button>
      </div>
    </CardWrapper>
    );
};



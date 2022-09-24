import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/reducers/cart';
import addToBucketIcon from '../icons/regularAddIcon.svg';
import { CardImage, CardTitle, CardPrice, CardDescription, CardWeight, CardBottom, CardBottomLeft, CardIcon, CardButton, CardWrapper } from './Card.styled'

export const Card = ({ url, title, description, price, weight }) => {

  const dispatch = useDispatch()

  const handleAddToCart = () => {

    let item = {
      id: uuidv4(),
      title: title,
      url: url,
      price: price
    }

    dispatch(addToCart(item))
  }

  return (
    <CardWrapper>
      <CardImage src={url} alt="" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        {description}
      </CardDescription>
      <CardBottom>
        <CardBottomLeft>
          <CardPrice>{price} ₽</CardPrice>
          <CardWeight>/{weight}</CardWeight>
        </CardBottomLeft>
        <CardButton onClick={handleAddToCart} className="card__button">
          <CardIcon src={addToBucketIcon} alt="" />
        </CardButton>
      </CardBottom>
    </CardWrapper>
  );
};



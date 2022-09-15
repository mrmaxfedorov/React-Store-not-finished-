import React from 'react';
import { FC } from 'react';
import { CartItemWrapper } from '../pages/Cart.styled';
import { CartItemImage } from '../pages/Cart.styled';
import { CartItemTitle } from '../pages/Cart.styled';
import { CartItemPrice } from '../pages/Cart.styled';
import { CartItemRemoveButton } from '../pages/Cart.styled';
import { CartItemRemoveImage } from '../pages/Cart.styled';
import removeItem from '../icons/removeItemIcon.svg';

interface CartItemsProps {
  url: string,
  title: string,
  price: string,
}

export const CartItem: FC <CartItemsProps> = ({ url, title, price }) => {
  return (
    <CartItemWrapper>
      <CartItemImage src={url} alt="" />
      <CartItemTitle>{title}</CartItemTitle>
      <CartItemPrice>{price} ₽</CartItemPrice>
      <CartItemRemoveButton>
        <CartItemRemoveImage src={removeItem} alt="" />
      </CartItemRemoveButton>
    </CartItemWrapper>
  )
}

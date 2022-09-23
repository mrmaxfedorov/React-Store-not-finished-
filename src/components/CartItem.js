import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/reducers/cart';
import { CartItemWrapper, CartItemImage, CartItemTitle,CartItemPrice, CartItemRemoveImage, CartItemRemoveButton  } from '../pages/Cart.styled';
import removeItem from '../icons/removeItemIcon.svg';


export const CartItem = ({ id, url, title, price }) => {

  const dispatch = useDispatch()  
  const handleRemoveItem = () => {
    dispatch(removeFromCart(id))
  }

  return (
    <CartItemWrapper>
      <CartItemImage src={url} alt="" />
      <CartItemTitle>{title}</CartItemTitle>
      <CartItemPrice>{price} ₽</CartItemPrice>
      <CartItemRemoveButton onClick={handleRemoveItem}>
        <CartItemRemoveImage src={removeItem} alt="" />
      </CartItemRemoveButton>
    </CartItemWrapper>
  )
}

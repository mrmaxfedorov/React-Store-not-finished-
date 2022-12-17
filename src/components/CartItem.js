import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../store/reducers/cart';
import { CartItemWrapper, CartItemImage, CartItemTitle,CartItemPrice, CartItemRemoveButton  } from '../pages/Cart.styled';
import { passItem } from '../store/reducers/cardReducer';


export const CartItem = ({ id, url, title, description, price, weight }) => {

  const dispatch = useDispatch()  

  const handleRemoveItem = (event) => {
    event.preventDefault();
    dispatch(removeFromCart(id))
  }

  const handlePassItem = () => {
    let item = {
      id: id,
      title: title,
      description: description,
      url: url,
      price: price,
      weight: weight
    }
    dispatch(passItem(item))
  }

  return (
    <Link to='/item' style={{ textDecoration: "none" }} onClick={handlePassItem}>
    <CartItemWrapper>
      <CartItemImage src={url} alt="" />
      <CartItemTitle>{title}</CartItemTitle>
      <CartItemPrice>${price}</CartItemPrice>
      <CartItemRemoveButton onClick={handleRemoveItem}>
      </CartItemRemoveButton>
    </CartItemWrapper>
    </Link>
  )
}

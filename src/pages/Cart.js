import React from 'react';
import { Link } from "react-router-dom";
// import CartProductsList from '../components/CartProducts'; WTF
import {ProductsList} from '../components/Products';
import arrowBack from '../icons/arrowLeft.svg';
import OrangeButton from '../components/ui/Button';
import { CartPage, Container, Header, ArrowLeft, HeaderTitle, CartList, ContainerBottom, CartFooter, CartTotal, CartPrice } from './Cart.styled';
import { CartItem } from '../components/CartItem'
import { useSelector } from 'react-redux';

export const Cart = () => {

  const cart = useSelector(state => state.cart.cart)
  const totalCartSum = useSelector(state => state.cart.totalCartSum)

  return (
    <CartPage>
      <Container>
        <Header>
          <Link to='/'>
            <ArrowLeft src={arrowBack} />
          </Link>
          <HeaderTitle>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</HeaderTitle>
        </Header>
        <CartList>
          {cart.map(item => {
            const { id, url, title, price, weight, description } = item
            return (
                <CartItem
                  id={id}
                  url={url}
                  title={title}
                  price={price}
                  weight={weight}
                  description={description}
                  // key={id}
                />
            )
          })}
        </CartList>
      </Container>
      <ContainerBottom>
        <CartFooter>
          <CartTotal>ЗАКАЗ НА СУММУ: <CartPrice> {totalCartSum} ₽</CartPrice>
          </CartTotal>
          <OrangeButton text={'Оформить заказ'} />
        </CartFooter>
      </ContainerBottom>
    </CartPage>
  )
}
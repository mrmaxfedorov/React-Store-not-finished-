import React from 'react';
import { Link } from "react-router-dom";
// import CartProductsList from '../components/CartProducts';
import arrowBack from '../icons/arrowLeft.svg';
import OrangeButton from '../components/ui/Button';
import { CartPage, Container, Header, ArrowLeft, HeaderTitle, CartList, ContainerBottom, CartFooter, CartTotal, CartPrice } from './Cart.styled';
import { CartItem } from '../components/CartItem'
import { useSelector } from 'react-redux';

export const Cart = () => {

  const { cart, totalCartSum } = useSelector(state => state.cart)

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
            const { id, url, title, price } = item
            return (
              <CartItem
                id={id}
                url={url}
                title={title}
                price={price}
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
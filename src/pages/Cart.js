import React from 'react';
import { Link } from "react-router-dom";
import arrowBack from '../icons/arrowLeft.svg';
import BigAddToCardButton from '../components/ui/BigAddToCardButton';
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
          <HeaderTitle>YOUR CART</HeaderTitle>
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
          <CartTotal>TOTAL: <CartPrice> ${totalCartSum.toFixed(2)}</CartPrice>
          </CartTotal>
          <BigAddToCardButton text={'Place order'} />
        </CartFooter>
      </ContainerBottom>
    </CartPage>
  )
}
import React from 'react';
import { FC } from 'react';
import { Link } from "react-router-dom";
import { CartProductsList } from 'src/components/CartProducts';
import arrowBack from '../icons/arrowLeft.svg';
import { OrangeButton } from 'src/components/ui/Button';
import { CartPage, Container, Header, ArrowLeft, HeaderTitle, CartList, ContainerBottom, CartFooter, CartTotal, CartPrice } from './Cart.styled';
import { CartItem } from '../components/CartItem'

export const Cart: FC = () => {
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
          {CartProductsList.map(key => {
            const { img, name, price } = key
            return (
              <CartItem
                url={img}
                title={name}
                price={price}
              />
            )
          })}
        </CartList>
      </Container>
      <ContainerBottom>
        <CartFooter>
          <CartTotal>ЗАКАЗ НА СУММУ: <CartPrice> 6 220 ₽</CartPrice>
          </CartTotal>
          <OrangeButton text={'Оформить заказ'} />
        </CartFooter>
      </ContainerBottom>
    </CartPage>
  )
}
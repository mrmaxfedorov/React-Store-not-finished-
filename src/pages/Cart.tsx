import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';
import { CartProductsList } from 'src/components/CartProducts';
import arrowBack from '../icons/arrowLeft.svg';
import removeItem from '../icons/removeItemIcon.svg';
import { OrangeButton } from 'src/components/ui/Button';

const CartPage = styled.main`
  background-color: #161516;
  height: 100vh;
`
const Container = styled.div`
  width: 880px;
  margin: 0 auto;
  height: calc(100vh - 92px);
`
const Header = styled.div`
  min-height: 85px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 63px;
  align-items: end;
  padding-bottom: 41px;
`
const ArrowLeft = styled.img` 
  cursor: pointer;
`
const HeaderTitle = styled.h1`
  font-family: Montserrat;
  color: #FFFFFF;
  font-size: 31px;
  font-weight: 700;
  line-height: 37px;
`
const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`
const CartItemWrapper = styled.div`
  /* width: 880px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0px;
`
const CartItemImage = styled.img`
  width: 122px;
  padding-right: 70px;
  cursor: pointer;
`
const CartItemTitle = styled.h2`
  font-family: Montserrat;
  color: #FFFFFF;
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
  min-width: 500px;
  cursor: pointer;
`
const CartItemPrice = styled.p`
  font-family: Montserrat;
  color: #D58C51;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
`
const CartItemRemoveButton = styled.button` 
  padding: 0;
  border: 0;
  background-color: #161516;
  cursor: pointer;
`
const CartItemRemoveImage = styled.img`
  width: 30px;
`

interface CartItemsProps {
  url: string,
  title: string,
  price: string,
}

const CartItem: FC<CartItemsProps> = ({ url, title, price }) => {
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

const ContainerBottom = styled.div`
  border-top:#D58C51 solid 1px;
  min-width: 100vh;
`
const CartFooter = styled.footer`
  width: 880px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`
const CartTotal = styled.p`
  position: relative;
  color: #FFFFFF;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: 400;
  line-height: 26px;
`
const CartPrice = styled.p`
  position: absolute;
  right: -80px;
  top: 3px;
  color: #D58C51;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
;
  font-family: Montserrat;
`
export const Cart: FC = () => {
  return (
    <CartPage>
      <Container>
        <Header>
          <ArrowLeft src={arrowBack} />
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
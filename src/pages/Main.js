import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import bucketIcon from '../icons/bucketIcon.svg';
import {ProductsList} from '../components/ProductsList';
import {Card} from '../components/Card';
import {
  MainPage,
  Container,
  Header,
  HeaderTitle,
  HeaderUpperRight,
  HeaderText,
  HeaderItems,
  HeaderPrice,
  HeaderGoToCartButton,
  Menu
} from './Main.styled';

export const Main = () => {

  const totalCartSum = useSelector(state => state.cart.totalCartSum)
  const totalCartItems = useSelector(state => state.cart.totalCartItems)
  // const card = useSelector(state => state.card.card)

  return (
    <MainPage>
      <Container>
        <Header>
          <HeaderTitle>THE PASTA PLACE</HeaderTitle>
          <HeaderUpperRight>
            <HeaderText>
              <HeaderItems>{totalCartItems} {(totalCartItems === 0) ? 'items' : (totalCartItems === 1) ? 'item' : 'items'}</HeaderItems>
              <HeaderPrice>${totalCartSum.toFixed(2)}</HeaderPrice>
            </HeaderText>
            <Link to='/cart' >
              <HeaderGoToCartButton src={bucketIcon} alt='' />
            </Link>
          </HeaderUpperRight>
        </Header>
        <Menu>
          {ProductsList.map((item) => {
            const { id, img, name, description, price, weight } = item
            return (
              <Card
                id={id}
                url={img}
                title={name}
                description={description}
                price={price}
                weight={weight}
              />
            )
          })}
        </Menu>
      </Container>
    </MainPage>
    )
}
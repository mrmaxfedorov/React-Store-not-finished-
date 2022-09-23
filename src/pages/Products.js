import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import bucketIcon from '../icons/bucketIcon.svg'
import {ProductsList} from '../components/Products';
import {Card} from '../components/Card';
import { MainPage, Container, Header, HeaderTitle, HeaderUpperRight, HeaderText, HeaderItems, HeaderPrice, HeaderGoToCartButton, Menu } from './Products.styled';

export const Products = () => {

  const totalCartSum = useSelector(state => state.cart.totalCartSum)
  const totalCartItems = useSelector(state => state.cart.totalCartItems)

  return (
    <MainPage>
      <Container>
        <Header>
          <HeaderTitle>НАША ПРОДУКЦИЯ</HeaderTitle>
          <HeaderUpperRight>
            <HeaderText>
              <HeaderItems>{totalCartItems} товара</HeaderItems>
              <HeaderPrice>на сумму {totalCartSum} ₽</HeaderPrice>
            </HeaderText>
            <Link to='/cart'>
              <HeaderGoToCartButton src={bucketIcon} alt='' />
            </Link>
          </HeaderUpperRight>
        </Header>
        <Menu>
          {ProductsList.map(key => {
            const { img, name, description, price, weight } = key
            return (
              <Card
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
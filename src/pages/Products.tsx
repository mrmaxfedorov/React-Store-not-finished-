import React, { useState } from 'react';
import { Link } from "react-router-dom";
import bucketIcon from '../icons/bucketIcon.svg'
import {ProductsList} from '../components/Products';
import {Card} from '../components/Card';
import { MainPage, Container, Header, HeaderTitle, HeaderUpperRight, HeaderText, HeaderItems, HeaderPrice, HeaderGoToCartButton, Menu } from './Products.styled';

export const Products = () => {
  const [totalSum, setTotalSum] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const addPriceProduct = (price: string) => {
    setTotalSum (totalSum + Number(price))
    setTotalItems (totalItems + 1)
  }

  return (
    <MainPage>
      <Container>
        <Header>
          <HeaderTitle>НАША ПРОДУКЦИЯ</HeaderTitle>
          <HeaderUpperRight>
            <HeaderText>
              <HeaderItems>{totalItems} товара</HeaderItems>
              <HeaderPrice>на сумму {totalSum} ₽</HeaderPrice>
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
                handleclick={(e: any) => addPriceProduct(price)}
              />
            )
          })}
        </Menu>
      </Container>
    </MainPage>
    )
}
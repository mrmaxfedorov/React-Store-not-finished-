import React from 'react';
import bucketIcon from '../icons/bucketIcon.svg'
import {ProductsList} from '../components/Products';
import {Card} from '../components/Card';
import { MainPage, Container, Header, HeaderTitle, HeaderUpperRight, HeaderText, HeaderItems, HeaderPrice, HeaderGoToCartButton, Menu } from './Products.styled';

export const Products = () => {
  const addPriceProduct = (price: string) => {
    console.log(price)
  }

  return (
    <MainPage>
      <Container>
        <Header>
          <HeaderTitle>НАША ПРОДУКЦИЯ</HeaderTitle>
          <HeaderUpperRight>
            <HeaderText>
              <HeaderItems>3 товара</HeaderItems>
              <HeaderPrice>на сумму 3 500 ₽</HeaderPrice>
            </HeaderText>
            <HeaderGoToCartButton src={bucketIcon} alt='' />
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
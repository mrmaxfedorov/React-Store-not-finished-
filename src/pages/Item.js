import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import bucketIcon from '../icons/bucketIcon.svg';
import { ItemPage, Container, Header, ArrowLeft } from './Item.styled';
import { HeaderUpperRight, HeaderText, HeaderItems, HeaderPrice, HeaderGoToCartButton } from './Main.styled';
import arrowBack from '../icons/arrowLeft.svg';
import { ItemProduct } from '../components/ItemProduct';


export const Item = () => {

  const totalCartSum = useSelector(state => state.cart.totalCartSum)
  const totalCartItems = useSelector(state => state.cart.totalCartItems)
  const card = useSelector(state => state.card.card)

    return (
      <ItemPage>
        <Container>
          <Header>
            <Link to="/">
              <ArrowLeft src={arrowBack} />
            </Link>
            <HeaderUpperRight>
              <HeaderText>
                <HeaderItems>{totalCartItems} {(totalCartItems === 0) ? 'items' : (totalCartItems === 1) ? 'item' : 'items'}</HeaderItems>
                <HeaderPrice>${totalCartSum.toFixed(2)}</HeaderPrice>
              </HeaderText>
              <Link to="/cart">
                <HeaderGoToCartButton src={bucketIcon} alt="" />
              </Link>
            </HeaderUpperRight>
          </Header>
          <ItemProduct
            url={card.url}
            title={card.title}
            description={card.description}
            price={card.price}
            weight={card.weight}
          />
        </Container>
      </ItemPage>
    );
}
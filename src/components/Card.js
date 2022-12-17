import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { passItem } from "../store/reducers/cardReducer";
import { addToCart } from "../store/reducers/cart";
import {
  CardImage,
  CardTitle,
  CardPrice,
  CardDescription,
  CardWeight,
  CardBottom,
  CardBottomLeft,
  CardButton,
  CardWrapper,
} from "./Card.styled";

export const Card = ({ id, url, title, description, price, weight }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.preventDefault();
    let item = {
      id: uuidv4(),
      title: title,
      description: description,
      url: url,
      price: price,
      weight: weight
    };
    dispatch(addToCart(item));
  };

  const handlePassItem = () => {
    let item = {
      id: id,
      title: title,
      description: description,
      url: url,
      price: price,
      weight: weight
    }
    dispatch(passItem(item))
  }

  return (
    <Link to='/item' style={{ textDecoration: "none" }} onClick={handlePassItem}>
      <CardWrapper>
        <CardImage src={url} alt="" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardBottom>
          <CardBottomLeft>
            <CardPrice>${price}</CardPrice>
            <CardWeight>/ {weight}</CardWeight>
          </CardBottomLeft>
          <CardButton
            onClick={handleAddToCart}
            className="card__button"
          ></CardButton>
        </CardBottom>
      </CardWrapper>
    </Link>
  );
};

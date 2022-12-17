import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addToCart } from "../store/reducers/cart";
import BigAddToCardButton from "./ui/BigAddToCardButton";
import {
  Product,
  ProductContent,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductBottom,
  ProductPrice,
  ProductWeight,
} from "../pages/Item.styled";

export const ItemProduct = ({ id, url, title, description, price, weight }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    let item = {
      id: uuidv4(),
      title: title,
      description: description,
      url: url,
      price: price,
      weight: weight,
    };

    dispatch(addToCart(item));
  };

  return (
    <Product>
      <ProductImage src={url} />
      <ProductContent>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
        <ProductBottom>
          <ProductPrice>${price}</ProductPrice>
          <ProductWeight> / {weight}</ProductWeight>
          <BigAddToCardButton text={"Add to cart"} onClick={handleAddToCart} />
        </ProductBottom>
      </ProductContent>
    </Product>
  );
};

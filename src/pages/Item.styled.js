import styled from "styled-components";
import HoveredBackIcon from "../icons/arrowLeftHovered.svg";

export const ItemPage = styled.div`
  background-color: #fff;
  height: 100vh;
`
export const Container = styled.div`
  width: 1320px;
  margin: 0 auto;
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
  margin-bottom: 30px;
  min-height: 45px;
`
export const ArrowLeft = styled.img` 
  cursor: pointer;
  width: 50px;
  &:hover {
    content: url(${HoveredBackIcon});
    font-size: 50px;
  }
`;
export const Product = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  gap: 200px;
`
export const ProductImage = styled.img`
  width: 500px;
`
export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 520px;
  gap: 24px;
`
export const ProductTitle = styled.h2`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 31px;
  color: #00A87E;
`
export const ProductDescription = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #333333;
`
export const ProductBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ProductPrice = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 23px;
  color: #00A87E;
  padding-right: 7px
`
export const ProductWeight = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding-right: 58px;
`


import styled from "styled-components";
import HoveredBackIcon from "../icons/arrowLeftHovered.svg";
import removeItemIcon from '../icons/removeItemIcon.svg';
import removeItemIconHovered from '../icons/removeItemIconHovered.svg'

export const CartPage = styled.main`
  background-color: #fff;
  height: 100vh;
  /* overflow: auto; */ // questions
`;
export const Container = styled.div`
  width: 880px;
  margin: 0 auto;
  height: calc(100vh - 92px);
`;
export const Header = styled.div`
  min-height: 85px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 63px;
  align-items: end;
  padding-bottom: 41px;
`;
export const ArrowLeft = styled.img`
  cursor: pointer;
  width: 50px;
  &:hover {
    content: url(${HoveredBackIcon});
    font-size: 50px;
  }
`;
export const HeaderTitle = styled.h1`
  position: relative;
  top: -12px;
  font-family: Montserrat,sans-serif;
  color: #154891;
  font-size: 31px;
  font-weight: 700;
  line-height: 37px;
  bottom: 20px;
`;
export const CartList = styled.div`
  height: calc(100vh - 218px);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  gap: 33px;
  padding: 6px 8px;
  &::-webkit-scrollbar {
    display: none;
    -webkit-overflow-scrolling: touch;
  }
`;
export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  border: 1px solid #0027601F;
  border-radius: 10px;
  box-shadow: 0 0 3px 0 rgb(0 39 96 / 12%);
  padding: 2px 19px;
  &:hover {
    box-shadow: 0 0 7px 0 rgb(0 39 96 / 12%);
  }
`;
export const CartItemImage = styled.img`
  width: 122px;
  padding-right: 70px;
  cursor: pointer;
`;
export const CartItemTitle = styled.h2`
  font-family: Montserrat,sans-serif;
  color: #00A87E;
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
  min-width: 500px;
  cursor: pointer;
`;
export const CartItemPrice = styled.p`
  font-family: Montserrat,sans-serif;
  color: #00A87E;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
`;
export const CartItemRemoveButton = styled.button`
  padding: 0;
  border: 0;
  width: 30px;
  height: 30px;
  background-image: url(${removeItemIcon});
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background: url(${removeItemIconHovered});
  }
`;
export const ContainerBottom = styled.div`
  border-top: #00A87E solid 1px;
  min-width: 100vh;
`;
export const CartFooter = styled.footer`
  width: 880px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;
export const CartTotal = styled.p`
  position: relative;
  color: #333333;
  font-family: Montserrat,sans-serif;
  font-size: 21px;
  font-weight: 500;
  line-height: 26px;
`;
export const CartPrice = styled.p`
  position: absolute;
  right: -80px;
  top: 3px;
  color: #00A87E;
  font-family: Montserrat,sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
`;

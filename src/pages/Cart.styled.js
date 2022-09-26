import styled from "styled-components";
import HoveredBackIcon from "../icons/arrowLeftHovered.svg";
import removeItemIcon from '../icons/removeItemIcon.svg';
import removeItemIconHovered from '../icons/removeItemIconHovered.svg'

export const CartPage = styled.main`
  background-color: #161516;
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
  &:hover {
    content: url(${HoveredBackIcon});
    font-size: 50px;
  }
`;
export const HeaderTitle = styled.h1`
  font-family: Montserrat;
  color: #ffffff;
  font-size: 31px;
  font-weight: 700;
  line-height: 37px;
`;
export const CartList = styled.div`
  height: calc(100vh - 218px);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  gap: 33px;
  &::-webkit-scrollbar {
    display: none;
    -webkit-overflow-scrolling: touch;
  }
`;
export const CartItemWrapper = styled.div`
  /* width: 880px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0px;
`;
export const CartItemImage = styled.img`
  width: 122px;
  padding-right: 70px;
  cursor: pointer;
`;
export const CartItemTitle = styled.h2`
  font-family: Montserrat;
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
  min-width: 500px;
  cursor: pointer;
`;
export const CartItemPrice = styled.p`
  font-family: Montserrat;
  color: #d58c51;
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
  border-top: #d58c51 solid 1px;
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
  color: #ffffff;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: 400;
  line-height: 26px;
`;
export const CartPrice = styled.p`
  position: absolute;
  right: -80px;
  top: 3px;
  color: #d58c51;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  font-family: Montserrat;
`;

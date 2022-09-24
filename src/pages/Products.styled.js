import styled from "styled-components";

export const MainPage = styled.main`
  background-color: #161516;
  height: 100vh;
  overflow: auto;
`;
export const Container = styled.div`
  width: 1302px;
  margin: 0 auto;
`;
export const Header = styled.header`
  padding-top: 48px;
  margin-bottom: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderTitle = styled.h1`
  font-family: Montserrat;
  color: #FFFFFF;
  font-size: 31px;
`;
export const HeaderUpperRight = styled.div`
  display: flex;
  flex-direction: row;
`;
export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
export const HeaderItems = styled.p`
  font-family: Montserrat;
  color: #FFFFFF;
  font-size: 17px;
  text-align: end;
`;
export const HeaderPrice = HeaderItems;
export const HeaderGoToCartButton = styled.img`
  width: 50px;
  cursor: pointer;
`;
export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  column-gap: 16px;
  height: calc(100vh - 259px);
  overflow-x: auto;
  padding-bottom: 80px;

  &::-webkit-scrollbar {
  display: none;
  -webkit-overflow-scrolling: touch;
  }
`;

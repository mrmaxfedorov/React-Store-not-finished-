import styled from "styled-components";

export const MainPage = styled.main`
  background-color: #ffffff;
  height: 100vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
    -webkit-overflow-scrolling: touch;
  }
`;
export const Container = styled.div`
  width: 1320px;
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
  font-family: Montserrat, sans-serif;
  color: #154891;
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
  font-family: Montserrat, sans-serif;
  color: #333333;
  font-size: 17px;
  text-align: end;
`;
export const HeaderPrice = HeaderItems;
export const HeaderGoToCartButton = styled.img`
  width: 50px;
  cursor: pointer;
  &:hover {
    transform: translateY(1px);
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  column-gap: 16px;
  height: calc(100vh - 259px);
  overflow-x: auto;
  padding: 8px 8px 80px 8px;

  &::-webkit-scrollbar {
  display: none;
  -webkit-overflow-scrolling: touch;
  }
`;

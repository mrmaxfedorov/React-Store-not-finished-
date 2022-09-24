import styled from "styled-components";
import HoveredAddIcon from '../icons/hoveredAddIcon.svg';

export const CardImage = styled.img`
  padding: 42px 0 30px 20px;
`;
export const CardBigText = `
  padding-left: 21px;
  font-weight: 500;
  font-family: Montserrat;
  color: #FFFFFF;
  font-size: 17px;
`;
export const CardTitle = styled.h2`
  ${CardBigText};
  padding-right: 20px;
  margin-bottom: 9px;
  
`;
export const CardPrice = styled.p`
  ${CardBigText};
  margin-right: 7px;
`;
const CardSmallText = `
  font-weight: 400;
  line-height: 20px;
  font-family: Montserrat;
  color: #FFFFFF;
  font-size: 14px;
`;
export const CardDescription = styled.p`
  ${CardSmallText};
  padding-left: 21px;
  padding-right: 25px;
`;
export const CardWeight = styled.p`
  ${CardSmallText};
`;
export const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: auto;
`;
export const CardBottomLeft = styled.div`
  position: absolute;
  bottom: 35px;
  display: flex;
  flex-direction: row;
`;
export const CardIcon = styled.img`
  width: 30px;
  right: 30px;
  position: absolute;
  bottom: 32px;
  cursor: pointer;
  &:hover {
    background: url(${HoveredAddIcon});
  }
`;
export const CardButton = styled.button`
  padding: 0;
  border: 0;
`;
export const CardWrapper = styled.div`
  border: 1px solid #D58C51;
  width: 311px;
  height: 550px;
  position: relative;
  &:hover ${CardTitle} {
    color: #D58C51;
  }
  &:hover ${CardDescription} {
    color: #D58C51;
  }
  &:hover ${CardWeight} {
    color: #D58C51;
  }
  &:hover ${CardPrice} {
    color: #D58C51;
  }
`
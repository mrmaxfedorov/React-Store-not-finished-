import styled from "styled-components";
import HoveredAddIcon from "../icons/hoveredAddIcon.svg";
import addToBucketIcon from "../icons/regularAddIcon.svg";

export const CardImage = styled.img`
  padding: 25px 0 20px 0;
  max-width: 100%;
`;
export const CardBigText = `
  padding-left: 21px;
  font-weight: 700;
  font-family: Montserrat;
  color: #00A87E;
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
  font-weight: 500;
  line-height: 20px;
  font-family: Montserrat;
  color: #333333;
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
export const CardButton = styled.button`
  border: 0;
  width: 30px;
  height: 30px;
  right: 30px;
  background-image: url(${addToBucketIcon});
  background-color: transparent;
  position: absolute;
  bottom: 32px;
  cursor: pointer;
  &:hover {
    background: url(${HoveredAddIcon});
  }
`;
export const CardWrapper = styled.div`
  border: 1px solid #0027601F;
  border-radius: 10px;
  box-shadow: 0 0 3px 0 rgb(0 39 96 / 12%);
  width: 311px;
  height: 550px;
  position: relative;
  
  &:hover {
    box-shadow: 0 0 7px 0 rgb(0 39 96 / 12%);
  }
  
  &:hover ${CardTitle} {
    text-shadow: 1px 1px rgb(0 39 96 / 12%);
  }

  &:hover ${CardDescription} {
    text-shadow: 1px 1px rgb(0 39 96 / 12%);
  }

  &:hover ${CardWeight} {
    text-shadow: 1px 1px rgb(0 39 96 / 12%);
  }

  &:hover ${CardPrice} {
    text-shadow: 1px 1px rgb(0 39 96 / 12%);
  }
`;

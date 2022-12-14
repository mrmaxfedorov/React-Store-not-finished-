import React from 'react';

export const AddToCartIcon = ({fill, stroke}) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="14.5" stroke={stroke}/>
      <path d="M15 9.28564V20.3571" stroke={stroke}stroke-width="2" stroke-linecap="round"/>
      <path d="M20.3569 14.8214L9.28551 14.8213" stroke={stroke} stroke-width="2" stroke-linecap="round"/>
    </svg>
    )
}
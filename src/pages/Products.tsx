import React from 'react';
import bucketIcon from '../icons/bucketIcon.svg'
import {ProductsList} from '../components/Products';
import {Card} from '../components/Card';
import '../App.css';
import '../components/Card.css';

export const Products = () => {
  const addPriceProduct = (price: string) => {
    console.log(price)
  }

  return (
    <main className='main-page'>
    <div className="container">
      <header className='header'>
        <h1 className='header__title'>НАША ПРОДУКЦИЯ</h1>
        <div className="header__upper-right">
          <div className="header__text">
            <p className='header__items'>3 товара</p>
            <p className='header__price'>на сумму 3 500 ₽</p>
          </div>
          <img className='header__bucket' src={bucketIcon} alt='' />
        </div>
      </header>
      <div className="menu">
        {ProductsList.map(key => {
          const {img, name, description, price, weight} = key
          return (
            <Card
              url={img}
              title={name}
              description={description}
              price={price}
              weight={weight}
              handleclick={(e: any) => addPriceProduct(price)}
            />
            )
        })}
      </div>
    </div>
  </main>
    )
}
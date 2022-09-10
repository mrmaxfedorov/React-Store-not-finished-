import Card from '../src/components/Card.js';
import './App.css';
import './components/Card.css';
// import oystersImage from '../src/images/1.png';
// import ribsImage from '../src/images/2.png';
// import shrimpsImage from '../src/images/3.png';
import bucketIcon from './images/bucketIcon.svg';
import {Products} from './components/Products.js';

function App() {
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
          {Products.map(key => {
            const {img, name, description, price, weight} = key
            return (
              <Card
                url={img}
                title={name}
                description={description}
                price={price}
                weight={weight}
              />
              )
          })}
           {/* <Card
          url={oystersImage}
          title={'Устрицы по рокфеллеровски'}
          description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
          price={'2 700 ₽'}
          weight={'/ 500 г.'}
          />
           <Card 
          url={ribsImage}
          title={'Свиные ребрышки на гриле с зеленью'}
          description={'Не следует, однако забывать, что реализация намеченных плановых'}
          price={'1 600 ₽'}
          weight={'/ 750 г.'}
          />
           <Card 
          url={shrimpsImage}
          title={'Креветки по-королевски в лимонном соке'}
          description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'}
          price={'1 820 ₽'}
          weight={'/ 7 шт.'}
          />
           <Card 
          url={oystersImage}
          title={'Устрицы по рокфеллеровски'}
          description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
          price={'2 700 ₽'}
          weight={'/ 500 г.'}
          />
           <Card 
          url={oystersImage}
          title={'Устрицы по рокфеллеровски'}
          description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
          price={'2 700 ₽'}
          weight={'/ 500 г.'}
          />
           <Card 
          url={ribsImage}
          title={'Свиные ребрышки на гриле с зеленью'}
          description={'Не следует, однако забывать, что реализация намеченных плановых'}
          price={'1 600 ₽'}
          weight={'/ 750 г.'}
          />
           <Card 
          url={shrimpsImage}
          title={'Креветки по-королевски в лимонном соке'}
          description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'}
          price={'1 820 ₽'}
          weight={'/ 7 шт.'}
          />
           <Card 
          url={oystersImage}
          title={'Устрицы по рокфеллеровски'}
          description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
          price={'2 700 ₽'}
          weight={'/ 500 г.'}
          /> */}
        </div>
      </div>
    </main>
  );
}

export default App;

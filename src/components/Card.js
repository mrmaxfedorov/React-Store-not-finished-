import addToBucketIcon from '../images/regularAddIcon.svg'

function Card({url, title, description, price, weight}) {
  return (
    <div className="card">
      <img className="card__img" src={url} alt="" />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">
        {description}
      </p>
      <div className="card__bottom">
        <div className="card__bottom-left">
          <p className="card__price">{price}</p>
          <p className="card__weight">{weight}</p>
        </div>
        <img id='cardIcon' className="card__icon" src={addToBucketIcon} alt=""/>
      </div>
    </div>
    );
}


export default Card;
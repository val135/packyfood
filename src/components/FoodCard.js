import React from 'react';

const FoodCard = (props) => {
    return (
        <div className="card" style="width: 18rem;">
        <img className="card-img-top"
        src={`${props.imgFood}`}
        alt={`${props.title}-cardImage`} />
            <div className="card-body">
            <h5 className="card-title">{props.nameRestaurant}</h5>
            <p className="card-text">{props.surpriseDescription}</p>
            <p className="card-price">{props.price}</p>
            <a className="btn btn-sm btn-primary" to="/comprar">Comprar</a>
            </div>
      </div>
    );
}

export default FoodCard;
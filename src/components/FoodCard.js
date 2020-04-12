import React from 'react';
import './FoodCard.css'

const FoodCard = (props) => {
    return (
        <div className='foodcard-wrapper' >
            <div className='img-product-container'>
                <img 
                    src={`https://firebasestorage.googleapis.com/v0/b/packyfood-80156.appspot.com/o/${props.imgFood}`}
                    alt={`${props.title}-cardImage`} />
            </div>    
            <div >
                <h5 >{props.nameRestaurant}</h5>
                <p >{props.surpriseDescription}</p>
                <p >Precio: {props.price}</p>
            </div>
      </div>
    );
}

export default FoodCard;
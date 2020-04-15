import React from 'react';
import './FoodCard.css'

const FoodCard = (props) => {
    return (
        
        <div className="container-fluid">
            <div className="row foodcard-wrapper w-100">

                {/*columnas del contenedor*/}
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className='img-product-container'>
                        <img
                            src={`https://firebasestorage.googleapis.com/v0/b/packy-f9264.appspot.com/o/${props.imgFood}`}
                            alt={`${props.title}-cardImage`} />
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-8 product-texts">
                    <div >
                        <h5 className="product-title" >{props.nameRestaurant}</h5>
                        <p className="product-text" >{props.surpriseDescription}</p>
                        <p className="product-price">Precio: {props.price}</p>                      
                        <br/>
                        <a href="https://api.whatsapp.com/send?phone=573002640177&text=Me%20gustaria%20obtener%20su%20Packy%20de%20hoy" target="_blank"className="button btn btn-primary read-more mt-2">Adquirir usando Whatsapp</a>
                        
                    </div>
                </div>
            </div>
        </div>

                        







        /*
        <div className='foodcard-wrapper'>
            <div className='img-product-container'>
                <img 
                    src={`https://firebasestorage.googleapis.com/v0/b/packyfood-80156.appspot.com/o/${props.imgFood}`}
                    alt={`${props.title}-cardImage`} />
            </div>    
            <div >
                <h5 className="product-title" >{props.nameRestaurant}</h5>
                <p className="product-text" >{props.surpriseDescription}</p>
                <p className="product-price">Precio: {props.price}</p>
            </div>
      </div>
      */
    );
}

export default FoodCard;
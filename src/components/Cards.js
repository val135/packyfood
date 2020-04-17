import React from 'react';
import Card from './Card';
import { restaurantsData } from '../restaurantsData'

// esto aparece en App
const Cards = (props) => {  
    const restaurantsToShow = (props.filter === '') ? restaurantsData : restaurantsData.filter(restaurant => restaurant.category === props.filter);
    return (
        <div className="container-fluid">
            <a href='/' name="targetrestaurantes" alt='restaurant' style={{visibility: 'hidden', position: 'absolute'}}>Go to restaurant</a>
            <h3 className="text-center selection-restaurantes">Selecciona tu restaurante favorito y compra un paquete sorpresa por un precio muy económico</h3>
            <div className="row container-fluid cont-restaurantes mx-auto justify-content-center w-100"> 
                {restaurantsToShow.map((restaurantData, index) => <Card key={index} {...restaurantData} />)}
            </div>
        </div> 
    );
  };

export default Cards;
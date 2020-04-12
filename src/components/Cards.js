import React from 'react';
import Card from './Card';
import { restaurantsData } from '../restaurantsData'

// esto aparece en App
const Cards = () => {
    return (
        <div className="container-fluid"><a name="targetrestaurantes"></a>
            <h3 class="text-center selection-restaurantes">Selecciona tu restaurante favorito y compra un paquete sorpresa por un precio muy económico</h3>
            <div className="row container-fluid cont-restaurantes mx-auto justify-content-center w-100"> 
                {restaurantsData.map((restaurantData, index) => <Card key={index} {...restaurantData} />)}
            </div>
        </div> 
    );
  };

export default Cards;
import React from 'react';
import Card from './Card';
import { restaurantsData } from '../restaurantsData'

// esto aparece en App
const Cards = () => {
    return (
        <div className="container-fluid">
            <div className="row container-fluid web-projects mx-auto justify-content-center w-100"> 
                {restaurantsData.map((restaurantData, index) => <Card key={index} {...restaurantData} />)}
            </div>
        </div> 
    );
  };

export default Cards;
import React from 'react';
import FoodCard from '../components/FoodCard';
import { restaurantProduct } from '../restaurantsData';

const BuyView = (props) => {
    const restaurant = restaurantProduct[props.match.params.id];
    return (
        <FoodCard {...restaurant} />
    );
}

export default BuyView;
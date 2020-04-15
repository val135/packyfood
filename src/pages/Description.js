import React from 'react';
import DescriptionPacky from '../components/DescriptionPacky';
import { restaurantProduct } from '../restaurantsData';

const Description = (props) => {
    const restaurant = restaurantProduct[props.match.params.id];
    return (
        <DescriptionPacky {...restaurant} />
    );
}

export default Description;
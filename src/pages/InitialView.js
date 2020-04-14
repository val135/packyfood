import React from 'react';
import About from '../components/About';
import Cards from '../components/Cards';
import FilterRestaurant from '../components/FilterRestaurant';
import MapContainer  from '../components/MapContainer';

const InitialView = () => {
    return (
        <main>  
            <About />
            <FilterRestaurant />
            <Cards />
            <MapContainer />
        </main>
    );
}

export default InitialView;
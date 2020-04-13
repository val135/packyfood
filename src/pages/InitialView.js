import React from 'react';
import About from '../components/About';
import Cards from '../components/Cards';
import MapContainer  from '../components/MapContainer';

const InitialView = () => {
    return (
        <main>  
            <About />
            <Cards />
            <MapContainer />
        </main>
    );
}

export default InitialView;
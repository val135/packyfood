import React, { Component } from 'react';
import About from '../components/About';
import Cards from '../components/Cards';
import FilterRestaurant from '../components/FilterRestaurant';
import MapContainer  from '../components/MapContainer';

class InitialView extends Component {

    constructor() {
        super();
        this.state = {
            chosenType: ''
        }
    }

    chosenRestaurantType = (e) => {
        this.setState({ chosenType: e.target.value });
    }

    render() {
        return (
            <main>  
                <About />
                <FilterRestaurant onChosenRestaurantType={this.chosenRestaurantType} />
                <Cards filter={this.state.chosenType} />
                <MapContainer />
            </main>
        );
    }
}

export default InitialView;
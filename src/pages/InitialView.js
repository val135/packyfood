import React, { Component } from 'react';
import About from '../components/About';
import Cards from '../components/Cards';
import FilterRestaurant from '../components/FilterRestaurant';
import MapContainer  from '../components/MapContainer';
import DescriptionPacky from '../components/DescriptionPacky';

class InitialView extends Component {

    constructor() {
        super();
        this.state = {
            chosenType: '',
            descriptionShown: false
        }
    }

    showFullDescription = () => {
        this.setState({ descriptionShown: true });
    }

    chosenRestaurantType = (e) => {
        this.setState({ chosenType: e.target.value });
    }

    render() {
        if (this.state.descriptionShown === true) {
            return (
            <main>  
                <About onClickDescription = {this.showFullDescription}/>
                <DescriptionPacky />
                <MapContainer />
            </main>
            )
        } else {
            return (
                <main>
                    <About onClickDescription = {this.showFullDescription}/>
                    <FilterRestaurant onChosenRestaurantType={this.chosenRestaurantType} />
                    <Cards filter={this.state.chosenType} />
                    <MapContainer />
                </main>
            );
        } 
    }
}

export default InitialView;
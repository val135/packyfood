import React from 'react';
import { restaurantsList } from '../restaurantsData';
import './FilterRestaurant.css'

const FilterRestaurant = (props) => {
  return (
    <div className="filter-wrapper">
      <label name="restaurant-filter">
        <p className="intro-packy">Filtra los restaurantes por categorías</p>
      </label>
      <select onChange={props.onChosenRestaurantType} name="resturant-filter" className="filter-select" >
        {restaurantsList.map(restaurant => {
          return <option key={restaurant.id} value={restaurant.value}>{restaurant.kindFood}</option>;
        })}
      </select>
    </div>
  )
};

export default FilterRestaurant;

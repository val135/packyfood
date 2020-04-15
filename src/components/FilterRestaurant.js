import React from 'react';
import { restaurantsList } from '../restaurantsData';
import './FilterRestaurant.css'

const FilterRestaurant = (props) => {
  return (
    <div className="filter-wrapper">
      <label name="resturant-filter">
        <h2 className="font-weight-bold">Opciones de comida</h2>
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

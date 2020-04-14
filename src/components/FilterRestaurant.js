import React from 'react';
import { restaurantsList } from '../restaurantsData';

const FilterRestaurant = () => {
  return (
    <div className="form-group">
      <label for="exampleFormControlSelect1" ><h1>Opciones de comida</h1></label>
      <select className="form-control" id="exampleFormControlSelect1">
        <option>Saludable</option>
        <option>Rápida</option>
        <option>Italiana</option>
        <option>Oriental</option>
      </select>
    </div>
  );
};

export default FilterRestaurant;

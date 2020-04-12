import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    return (  
        <div className="card d-flex-md-row cont-restaurante mx-3 px-3 pt-3 mb-3 pb-1 rounded">
            <a href='/' name="targetprojects" style={{visibility: 'hidden', position: 'absolute'}}>Go to projects</a>
            <img className="card-img-top logo-restaurante border-left border-right border-bottom"
                src={`https://firebasestorage.googleapis.com/v0/b/packyfood-80156.appspot.com/o/${props.imgLogo}`}
                alt={`${props.title}-cardImage`} />
            <div className="card-body mx-1 px-1">
                <h5 className="card-title"><b>{props.nameRestaurant}</b></h5>
                <p className="card-text">{props.text}</p>
                <Link className="btn btn-sm btn-primary" to="/buy-view">Ver más</Link>
            </div>
        </div>
    )
}

export default Card;

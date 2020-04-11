import React from 'react';


function Card(props) {
    return (
        <div className="card d-flex-md-row project-container mx-3 px-3 pt-3 mb-3 pb-1 rounded">
            <a href='/' name="targetprojects" style={{visibility: 'hidden'}}>Go to projects</a>
            <img className="card-img-top project-pic border-left border-right border-bottom" src={props.img} alt={`${props.title}-cardImage`} />
            <div className="card-body mx-1 px-1">
                <h5 className="card-title"><b>{props.titulo}</b></h5>
                <p className="card-text">{props.description}</p>
                <a href={props.urlButtom} target="blank_" className="btn btn-sm btn-primary">See more</a>
            </div>
        </div> 
    )
}

export default Card;

import React from 'react';
import {Link} from 'react-router-dom'


function About(props) {
    return (
        <div className="row about-container mx-0">
            <div className="col-xs-12 col-sm-6 col-md-4 pr-4 foto-about-cont">
                <img className="foto-about rounded-circle justify-content-end" src="./about-packy.png" alt="PackyFood"/>
        </div>
                <div className="col-xs-12 col-sm-6 col-md-8 px-5 about-info">
                    <h2><b>¿Qué hacemos?</b></h2>
                    <h3 class="slogan">Ofrecemos paquetes sorpresa de comida en buen estado a precios muy económicos.</h3>
                    <p className="about-texto">Nos preocupamos por tu alimentación y queremos evitar la pérdida de comida en el mundo. <br />
                Por eso, proponemos packyFood, una aplicación en la que podrás encontrar comida de nuestros restaurantes aliados a precios más bajos de lo normal.
                ¡Come mejor por un precio menor!<a name="targetabout" href='/' style={{visibility: 'hidden'}}>about</a>
                </p>
                    <Link to='/description'>
                    <button onClick={props.onClickDescription} className="button btn btn-primary read-more mt-2">Saber más</button>
                    </Link>
                </div>
            </div>
    )
}
export default About;



    
        
        
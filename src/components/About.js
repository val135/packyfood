import React from 'react';

function About() {
    return (

        <div className="row about-container mx-0">
            <div className="col-xs-12 col-sm-6 col-md-4 pr-4 foto-about-cont"><a name="targetabout"></a>
                <img className="foto-about rounded-circle justify-content-end" src="./about-packy.png" alt="PackyFood"/>
        </div>
                <div className="col-xs-12 col-sm-6 col-md-8 px-5 about-info">
                    <h2><b>¿Qué hacemos?</b></h2>
                    <p className="about-texto">Nos preocupamos por tu alimentación y queremos evitar la pérdida de comida en el mundo. <br />
                Por eso, proponemos packyFood, una aplicación en la que podrás encontrar comida de nuestros restaurantes aliados a precios muy bajos.
                <br /><br />
                ¡Come mejor por un precio menor!
                </p>
                    <a href="./pages/profile.html" className="button btn btn-primary read-more mt-2">Saber más</a>
                </div>
            </div>
    )
}

export default About;



    
        
        
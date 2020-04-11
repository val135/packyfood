import React from 'react';

function about() {
    return (
        <div class="row about-me mx-0">
            <div class="col-xs-12 col-sm-6 col-md-4 pr-4 about-me-pic"><a name="targetabout"></a>
                <img class="profile-pic rounded-circle justify-content-end" src="/about-packy.png" alt="Valentina Arango Eastman" />
            </div>
            <div class="col-xs-12 col-sm-6 col-md-8 px-5 about-me-info">
                <h2><b>¿Qué hacemos?</b></h2>
                <p class="about-me-text">Nos preocupamos por tu alimentación y queremos evitar la pérdida de comida en el mundo. <br/>
                Por eso, proponemos packyFood, una aplicación en la que podrás encontrar comida de nuestros restaurantes aliados a precios muy bajos. 
                <br /><br />
                ¡Come mejor por un precio menor!
                </p>
                <a href="./pages/profile.html" class="button btn btn-primary read-more mt-2">Read more</a>
            </div>
        </div>

    )
}

export default about;
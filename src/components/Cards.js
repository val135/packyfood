import React from 'react';
import Card from './Card';

class Cards extends React.Component {

    render() {
        return (                  
            <div className="container-fluid">
                <div className="row container-fluid web-projects mx-auto justify-content-center w-100"> 
                    <Card
                    img = {'/project-web-viajecdotas.png'}
                    titulo={'Soy un titulo'}
                    description = {'Aquí vsdawefrtwyty'}
                    urlButtom = {'https://val135.github.io/landing-product/'}
                    />
                    <Card
                    titulo={'Soy otro titulo'}
                    />    
                </div>
            </div>        
        )
    }
}

export default Cards;
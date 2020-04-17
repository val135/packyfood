import React from 'react';
import {Link} from 'react-router-dom'

const DescriptionPacky = (props) => {
    return (

        <div className="container-fluid">

            {/* primer row con una columna */}
            <div className="row text-center cont-description-packy">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <p>A través de PackyFood puedes obtener un paquete <b>sorpresa o “Packy”</b> de restaurantes y locales de comida <br />a precios realmente económicos.
                    Nuestros aliados se encargan de ofrecer productos elaborados durante el día <br />que por diferentes motivos no fueron vendidos, pero que cumplen 100% con todas las condiciones de salubridad para ser entregados <br />a personas como tú, que  seguro los disfrutarán.<br />
                        <br /><b>
                            Di no al desperdicio de alimentos y únete a nosotros para buscar un mundo más sostenible.<br />
                    Sigue los pasos a continuación para obtener hoy mismo tu “Packy”.</b></p>
                </div>
            </div>

            {/* segundo row con tres columnas */}
            <div className="row text-center cont-steps justify-content-around">
                <div className="col-xs-12 col-sm-12 col-md-3 steps">
                    <img className="step justify-content-center" src="./packy-step1.png" alt="PackyFood" />
                </div>

                <div className="col-xs-12 col-sm-12 col-md-3 steps">
                    <img className="step justify-content-center" src="./packy-step2.png" alt="PackyFood" />
                </div>

                <div className="col-xs-12 col-sm-12 col-md-3 steps">
                    <img className="step justify-content-center" src="./packy-step3.png" alt="PackyFood" />
                </div>
            </div>
            <div className="container about-btn center-text">            
                <Link to='/'>
                        <button onClick={props.onClickDescription} className="button btn btn-primary read-more mt-2">Ver Packies disponibles </button>
                </Link>
            </div>
        </div>          
    )
}

export default DescriptionPacky;
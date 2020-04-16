import React from 'react';




const DescriptionPacky = () => {
    return (

        <div className="container-fluid">

            {/* primer row con una columna */}
            <div className="row text-center cont-description-packy">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <p>A través de PackyFood puedes obtener un paquete de comida sorpresa o “Packy” de los mejores restaurantes <br />de la ciudad a precios nunca antes vistos.
                    Nuestros aliados se encargan de ofrecer productos elaborados durante el día que por diferentes motivos no fueron vendidos, pero que cumplen 100% con todas las condiciones de salubridad para ser entregados a personas como tú, que  seguro los disfrutarán.<br />
                        <br /><b>
                            Di no al desperdicio de alimentos y únete a nosotros para luchar por un mundo más sostenible.<br />
                    Sigue los pasos a continuación para obtener hoy mismo tu “Packy”.</b></p>
                </div>
            </div>

            {/* segundo row con tres columnas */}
            <div className="row text-center w-75 cont-steps justify-content-around">
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
                <button className="button btn btn-primary read-more mt-2">Ver Packies disponibles</button>
            </div>


        </div>

  




                

        
    )
}

export default DescriptionPacky;
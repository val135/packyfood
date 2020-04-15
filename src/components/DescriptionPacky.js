import React from 'react';




function DescriptionPacky () {
    return (
        
        <div className="container-fluid">

            {/* primer row con una columna */}
            <div className="row text-center w-75 description-packy">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <p>A través de PackyFood puedes obtener un paquete de comida sorpresa o “Packy” de los mejores restaurantes de la ciudad a precios nunca antes vistos.
                    <br/>
                    Nuestros aliados se encargan de ofrecer productos elaborados durante el día que por diferentes motivos no fueron vendidos, pero que cumplen 100% con todas las condiciones de salubridad para ser entregados a personas como tú, que  seguro los disfrutarán.
                    <br/>
                    Di no al desperdicio de alimentos y únete a nosotros para luchar por un mundo más sostenible.
                    Sigue los pasos a continuación para obtener hoy mismo tu “Packy”.</p>
                </div>
            </div>


            {/* segundo row con tres columnas */}
            <div className="row text-center w-100">
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <img className="step justify-content-center" src="./packy-step1.png" alt="PackyFood"/>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4">
                    <img className="step justify-content-center" src="./packy-step1.png" alt="PackyFood"/>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4">
                    <img className="step justify-content-center" src="./packy-step1.png" alt="PackyFood"/>
                </div>

            </div>
        </div>




                

        
    )
}

export default DescriptionPacky;
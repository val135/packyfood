import React from 'react'


function Bottom() {
    return (
        <div className="container-fluid">
            <div className="row contacto mx-0 w-100">

                <div className="col-xs-12 col-sm-12 col-md-12 contact-info text-center">
                    <h2 className="text-white"><b>¿Tienes preguntas o sugerencias?</b></h2>
                    <p className="contacto-texto">¡Contáctanos! Estaremos felices de atenderte
               <br />
               (+57) 3002640177 | Cra 37 # 16-25, Medellín
           </p>
            
                <div className="follow-info flex-column"> <a name="targetcontacto"></a>
                        <div className="text-center ">
                            <h5><b>¡Síguenos en redes!</b></h5>
                        </div><div className="social-media">
                            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/DerlyVivianaMur "><i className="fab fa-twitter "></i></a>
                            <a href="https://www.instagram.com/derlyvivianams/ "><i className="fab fa-instagram "></i></a>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Bottom;
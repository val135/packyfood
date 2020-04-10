import React from 'react'


function Bottom() {
    return (

        <div className="container-fluid">
            <div className="row contact-me mx-0 w-100">
                <div className="col-xs-12 col-sm-6 col-md-4 text-center"> <a name="targetcontact"></a>
                    <div className="col-xs-12 col-sm-5 col-md-8 float-right contact-group">
                        <h2 className="text-center text-white pt-1 contact-text"><b>Contact me!</b></h2>
                        <div className="row w-75 mx-auto mt-2 contact-icons">
                            <div className="col-4"><a href="https://github.com/val135"><i className="fab fa-github"></i></a></div>
                            <div className="col-4"><a href="https://www.linkedin.com/in/valentina-arango-eastman-76735568"><i className="fab fa-linkedin"></i></a></div>
                            <div className="col-4"><a href="https://facebook.com/valentina.eastman"><i className="fab fa-facebook-square"></i></a></div>

                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-7 col-md-8 px-5 my-job-cont">
                    <h2 className="text-white my-job"><b>Did you like my work?</b></h2>
                    <p className="contact-me-text">Let’s talk! I am available for freelance projects
                    and full-time employment.
                    <br/><br/>
                            Valentina Arango Eastman
                    <br/>
                            valarangoe@gmail.com  |  (+57) 3002640177
                </p>
            </div>
        </div>
        </div>
    )
}

export default Bottom;
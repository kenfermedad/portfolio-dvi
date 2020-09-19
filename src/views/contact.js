import React from 'react';

export default function Contact() {
    return (
        <div className="presentation row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 info">
                <h1 className="display-4 info-h1">Daniel Velásquez Iturrate</h1>
                <h3 className="info-h3">Contact Me!</h3>
                <p>If you are interested in hiring my services, contact me at any of these ways:</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 contact">
                <div><i className="fa fa-phone-square" aria-hidden="true"></i> +58 (424) 140-0496</div>
                <div><i className="fa fa-fax" aria-hidden="true"></i> +58 (212) 242-7764</div>
                <div><i className="fa fa-envelope" aria-hidden="true"></i>velasqueziturrate@gmail.com</div>
                <div><i className="fa fa-linkedin-square" aria-hidden="true"></i><a href="https://www.linkedin.com/in/daniel-velasquez-iturrate" target="_blank" rel="noopener noreferrer"> /daniel-velasquez-iturrate</a></div>
            </div>


            {/* ELIMINAR */}
            <div className="col-lg-12 justify-content-center">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active text-align-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/4.jpg?alt=media&token=34d54131-a9ab-4b04-a4a7-b0ab9a6da8b5" className="d-block w-500 img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/2.jpg?alt=media&token=e7346b5c-91c7-45e8-a118-030dfe81f88e" className="d-block w-500 img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/3.jpg?alt=media&token=0dac85be-d08c-4157-8d74-ac1d4268fed6" className="d-block w-500 img-fluid" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-lg-12 m-5 text-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251097.9246351096!2d-67.03045459854458!3d10.468698790429963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58adcd824807%3A0x93dd2eae0a998483!2sCaracas%2C%20Distrito%20Capital!5e0!3m2!1ses-419!2sve!4v1600549084915!5m2!1ses-419!2sve" width="400" height="300" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0" title="Caracas" className=""></iframe>
            </div>
            {/* ELIMINAR */}
        </div>
    );
}
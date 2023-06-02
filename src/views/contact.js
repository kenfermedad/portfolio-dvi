import React from 'react';

export default function Contact() {
    return (
        <div className="presentation row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 info">
                <h1 className="display-4 info-h1">Cesar Lares</h1>
                <h3 className="info-h3">Contact Me!</h3>
                <p>If you are interested in hiring my services, contact me at any of these ways:</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 contact">
                <div><i className="fa fa-phone-square" aria-hidden="true"></i>+5491124035669</div>
                <div><i className="fa fa-envelope" aria-hidden="true"></i>cesarlaresrosas@gmail.com</div>
                <div><i className="fab fa-linkedin" /><a href="https://www.linkedin.com/in/cesar-lares-48802714a/" target="_blank" rel="noopener noreferrer"> /cesar-lares</a></div>
                <div><i class="fas fa-map-marker-alt" aria-hidden="true"></i>Av Rivadavia 2982, CABA, Argentina</div>
            </div>
        </div>
    );
}
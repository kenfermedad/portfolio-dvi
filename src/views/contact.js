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
                <div><i className="fa fa-phone-square" aria-hidden="true"></i>+34654288465</div>
                <div><i className="fa fa-envelope" aria-hidden="true"></i>velasqueziturrate@gmail.com</div>
                <div><i className="fab fa-linkedin" /><a href="https://www.linkedin.com/in/daniel-velasquez-iturrate" target="_blank" rel="noopener noreferrer"> /daniel-velasquez-iturrate</a></div>
                <div><i class="fas fa-map-marker-alt" aria-hidden="true"></i>Nuestra Señora del Villar, 9, Madrid, España 28017</div>
            </div>
        </div>
    );
}
import React from 'react';
import Education from '../components/resume/education';
import Experience from '../components/resume/experience';
import Certifications from '../components/resume/certifications';

export default function Resume() {
    return (
        <div className="presentation">
            <div className="row resume">
                <div className="col-md-12 col-lg-4 resume-left-col" >
                    <div className="text-center">
                        <img className="avatar-img-resume" src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FAvatarResume.jpg?alt=media&token=c61e2763-6bca-4abb-9af8-275924484328" alt="Avatar Daniel Velásquez Iturrate" />
                    </div>
                    <h2 className="resume-h2">Daniel Velásquez Iturrate</h2>
                    <h4 className="sub-resume">Software Developer</h4>
                    <hr className="hr-resume-left" />
                    <p>I am a Systems Engineer with knowledge in software development, especially in the Front End area. In addition, I am interested in learning about Data Science, AWS, IA and Google Cloud.</p>
                    <hr className="hr-resume-left" />
                    <h5>Address</h5>
                    <p>Nuestra Señora del Villar, 9, Madrid,España 28017</p>
                    <h5>Phone</h5>
                    <p>+34654288465</p>
                    <h5>Email</h5>
                    <p>velasqueziturrate@gmail.com</p>
                    {/* <h5>Web</h5>
                    <p>mywebsite.com</p> */}
                    <hr className="hr-resume-left" />
                    <h5>Attitudes</h5>
                    <ul>
                        <li>
                        Intermediate level of English
                        </li>
                        <li>
                        Advanced level in Microsoft tools
                        </li>
                        <li>
                        Basic knowledge of digital marketing
                        </li>
                    </ul>
                    <hr className="hr-resume-left" />
                    <h5>Download Curriculum Vitae</h5>
                    <div className="row">
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/doc%2FSD%20-%20Daniel%20Vel%C3%A1squez%20Iturrate%20-%20CV%20English.pdf?alt=media&token=2dad344b-1004-42ff-94f0-9be600f1377d" rel="noopener noreferrer" target="_blank" alt="Download English">English <i className="fas fa-download"/></a></div>
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/doc%2FSD%20-%20Daniel%20Vel%C3%A1squez%20Iturrate%20-%20CV%20Espa%C3%B1ol.pdf?alt=media&token=b16d8976-c53d-4069-a246-f1afa601ef1f" rel="noopener noreferrer" target="_blank" alt="Download Español">Español <i className="fas fa-download" /></a></div>
                    </div>
                    <hr className="hr-resume-left" />
                    <h5>Download Cover Letter</h5>
                    <div className="row">
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/doc%2FSD%20-%20Cover%20Letter%20General.pdf?alt=media&token=0e57e1f6-cdb4-4db1-8d6c-ac06923ee18e" rel="noopener noreferrer" target="_blank" alt="Download English">English <i className="fas fa-download"/></a></div>
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/doc%2FSD%20-%20Carta%20de%20Presentaci%C3%B3n%20General.pdf?alt=media&token=b9c9ec4d-c254-4928-bf38-1c59b28af1f9" rel="noopener noreferrer" target="_blank" alt="Download Español">Español <i className="fas fa-download" /></a></div>
                    </div>
                    <hr className="hr-resume-left" />
                    {/* Link LinkedIn */}
                    {/*
                    <div className="LI-profile-badge align-items-center"  data-version="v1" data-size="medium" data-locale="es_ES" data-type="horizontal" data-theme="dark" data-vanity="daniel-velasquez-iturrate"><a className="LI-simple-link" href='https://ve.linkedin.com/in/daniel-velasquez-iturrate?trk=profile-badge'>Daniel Velásquez Iturrate</a></div>
                    <hr className="hr-resume-left" /> */}
                </div>
                <div className="col-md-12 col-lg-8 resume-right-col">
                    <h2>Education</h2>
                    <Education
                        startDateSchool="Sep 2010"
                        endDateSchool="Jul 2015"
                        schoolName="Unidad Educativa Colegio San Agustín El Marqués"
                        schoolDescription="High School Diploma with a focus on Science"
                        startDateUniversity="Sep 2015"
                        endDateUniversity="Mar 2020"
                        universityName="Universidad Metropolitana"
                        universityDescription="Systems Engineer Degree"
                    />
                    <hr className="hr-resume-right" />
                    <h2>Work Experience</h2>
                    <Experience
                        startDateJob="Sep 2019"
                        endDateJob="Sep 2020"
                        jobName="Global Ratings C.A."
                        jobDescription="Design, planning and development of web pages
                    company corporate"
                    />
                    <hr className="hr-resume-right" />
                    <h2>Certifications</h2>
                    <Certifications/>
                    <hr className="hr-resume-right" />
                </div>
            </div>
        </div>
    );
}
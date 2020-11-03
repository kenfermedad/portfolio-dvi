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
                    <p>I am a Systems Engineer with knowledge in software development, especially in the Front End area. In addition, I am interested in learning about SAP, AWS, IA and Google Cloud.
                    </p>
                    <hr className="hr-resume-left" />
                    <h5>Address</h5>
                    <p>Caracas, La Urbina, 1073, Venezuela</p>
                    <h5>Phone</h5>
                    <p>+58 (424) 140-0496</p>
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
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/doc%2FDaniel%20Vel%C3%A1squez%20Iturrate%20-%20CV%20English.pdf?alt=media&token=74d576f4-99e2-4eda-bfee-bd9c6b1122b4" rel="noopener noreferrer" target="_blank" alt="Download English">English <i className="fas fa-download"/></a></div>
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/doc%2FDaniel%20Vel%C3%A1squez%20Iturrate%20-%20CV%20Espa%C3%B1ol.pdf?alt=media&token=175d4b1e-11f5-4874-9240-ea55c9a1567c" rel="noopener noreferrer" target="_blank" alt="Download English">Español <i className="fas fa-download" /></a></div>
                    </div>
                    <hr className="hr-resume-left" />
                    <h5>Download Cover Letter</h5>
                    <div className="row">
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/doc%2FDaniel%20Vel%C3%A1squez%20Iturrate%20-%20Cover%20Letter%20International.pdf?alt=media&token=bf1ee4f7-de7b-4878-aeb6-adb76c453cde" rel="noopener noreferrer" target="_blank" alt="Download English">English <i className="fas fa-download"/></a></div>
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/doc%2FDaniel%20Vel%C3%A1squez%20Iturrate%20-%20Carta%20de%20Presentaci%C3%B3n%20Espa%C3%B1a.pdf?alt=media&token=4507b80b-9f64-4d21-a1d0-c2e72a14e4d0" rel="noopener noreferrer" target="_blank" alt="Download English">Español <i className="fas fa-download" /></a></div>
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
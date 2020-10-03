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
                    <h5>Download CV</h5>
                    <div className="row">
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/doc%2FDaniel%20Velasquez%20Iturrate-%20CV%20English.pdf?alt=media&token=938e6117-23b1-4301-8ef6-21e095d2a1b8" rel="noopener noreferrer" target="_blank" alt="Download English">English <i className="fas fa-download"/></a></div>
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/doc%2FDaniel%20Velasquez%20Iturrate-%20CV%20Espa%C3%B1ol.pdf?alt=media&token=2c7e8c12-c20f-4b9a-a2d9-75df214f3671" rel="noopener noreferrer" target="_blank" alt="Download English">Español <i className="fas fa-download" /></a></div>
                    </div>
                    <hr className="hr-resume-left" />
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
                    <Certifications
                        startDateCertificationLeft="Jul 2020"
                        endDateCertificationLeft="Aug 2020"
                        certificationNameLeft="AWS Fundamentals Specialization"
                        certificationDescriptionLeft="AWS & Coursera"
                        startDateCertificationRight="May 2020"
                        endDateCertificationRight="Jun 2020"
                        certificationNameRight="Cloud Computing"
                        certificationDescriptionRight="Google Actívate"
                    />
                    <Certifications
                        startDateCertificationLeft="Apr 2020"
                        endDateCertificationLeft="Sep 2020"
                        certificationNameLeft="Web Design for Everybody: Basics of Web Development & Coding  Specialization"
                        certificationDescriptionLeft="University of Michigan & Coursera"
                        startDateCertificationRight="May 2020"
                        endDateCertificationRight="Jun 2020"
                        certificationNameRight="Desarrollo de Apps Móviles"
                        certificationDescriptionRight="Google Actívate"
                    />
                    <Certifications
                        startDateCertificationLeft="Mar 2020"
                        endDateCertificationLeft="Sep 2020"
                        certificationNameLeft="Introduction to Cisco Specialization"
                        certificationDescriptionLeft="Cisco & Coursera"
                        startDateCertificationRight="May 2020"
                        endDateCertificationRight="Jun 2020"
                        certificationNameRight="Introducción al Desarrollo Web I"
                        certificationDescriptionRight="Google Actívate"
                    />
                    <Certifications
                        startDateCertificationLeft="Jul 2020"
                        endDateCertificationLeft="Oct 2020"
                        certificationNameLeft="Full Stack Web Development en Español Specialization"
                        certificationDescriptionLeft="Universidad Austral & Coursera"
                        startDateCertificationRight="May 2020"
                        endDateCertificationRight="Jun 2020"
                        certificationNameRight="Introducción al Desarrollo Web II"
                        certificationDescriptionRight="Google Actívate"
                    />
                    <Certifications
                        startDateCertificationLeft="Sep 2020"
                        endDateCertificationLeft="Oct 2020"
                        certificationNameLeft="UI/UX Design Specialization"
                        certificationDescriptionLeft="California Institute of the Arts & Coursera"
                        startDateCertificationRight="May 2020"
                        endDateCertificationRight="Jun 2020"
                        certificationNameRight="Fundamentos del Marketing Digital"
                        certificationDescriptionRight="Google Actívate"
                    />
                    <Certifications
                        startDateCertificationLeft="Oct 2020"
                        endDateCertificationLeft="Nov 2020"
                        certificationNameLeft="Introduction to MongoDB"
                        certificationDescriptionLeft="MongoDB & Coursera"
                        startDateCertificationRight="May 2020"
                        endDateCertificationRight="Jun 2020"
                        certificationNameRight="Comercio Electrónico"
                        certificationDescriptionRight="Google Actívate"
                    />
                    <Certifications
                        startDateCertificationLeft="Oct 2020"
                        endDateCertificationLeft="Nov 2020"
                        certificationNameLeft="Single Page Application with AngularJS"
                        certificationDescriptionLeft="Johns Hopkins University & Coursera"
                        startDateCertificationRight="May 2020"
                        endDateCertificationRight="Jun 2020"
                        certificationNameRight="Competencias Digitales para Profesionales"
                        certificationDescriptionRight="Google Actívate"
                    />
                    <Certifications
                        startDateCertificationLeft="May 2020"
                        endDateCertificationLeft="Jun 2020"
                        certificationNameLeft="Transformación Digital para el Empleo"
                        certificationDescriptionLeft="Google Actívate"
                        startDateCertificationRight="May 2020"
                        endDateCertificationRight="Jun 2020"
                        certificationNameRight="Productividad Personal"
                        certificationDescriptionRight="Google Actívate"
                    />
                    <Certifications
                        startDateCertificationLeft="Sep 2020"
                        endDateCertificationLeft="Sep 2020"
                        certificationNameLeft="Digitaliza paso a paso tu negocio con Google My Business y Youtube"
                        certificationDescriptionLeft="Google Actívate"
                        startDateCertificationRight="Sep 2020"
                        endDateCertificationRight="Sep 2020"
                        certificationNameRight="Protege tu Negocio: Ciberseguridad en el Teletrabajo"
                        certificationDescriptionRight="Google Actívate"
                    />
                    <hr className="hr-resume-right" />
                </div>
            </div>
        </div>
    );
}
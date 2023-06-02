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
                        <img className="avatar-img-resume" src="https://firebasestorage.googleapis.com/v0/b/portafolio-cdeff.appspot.com/o/image_6483441.JPG?alt=media&token=d9a89da6-106d-4d4a-ae7f-f2b419399358&_gl=1*105k5og*_ga*NTAxNjQ1MDE5LjE2ODU1NTM3NzI.*_ga_CW55HF8NVT*MTY4NTU1ODM4Mi4yLjEuMTY4NTU1ODM5Mi4wLjAuMA.." alt="Avatar Daniel Velásquez Iturrate" />
                    </div>
                    <h2 className="resume-h2">Cesar Lares</h2>
                    <h4 className="sub-resume">Software Developer</h4>
                    <hr className="hr-resume-left" />
                    <p>I am a Systems Engineer with knowledge in software development, especially in the Front End area. In addition, I am interested in learning about Data Science, AWS, IA and Google Cloud.</p>
                    <hr className="hr-resume-left" />
                    <h5>Address</h5>
                    <p>Av Rivadavia, 2982, CABA, Argentina </p>
                    <h5>Phone</h5>
                    <p>+54-9-1124035669</p>
                    <h5>Email</h5>
                    <p>cesarlaresrosas@gmail.com</p>
                    {/* <h5>Web</h5>
                    <p>mywebsite.com</p> */}
                    <hr className="hr-resume-left" />
                    <h5>Attitudes</h5>
                    <ul>
                        <li>
                        Advanced level of English
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
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portafolio-cdeff.appspot.com/o/CV.pdf?alt=media&token=fa515a53-8be0-4ee2-8780-7e5b6606e4a6&_gl=1*zq3uoy*_ga*NTAxNjQ1MDE5LjE2ODU1NTM3NzI.*_ga_CW55HF8NVT*MTY4NTU1Mzc3MS4xLjEuMTY4NTU1NjEyMC4wLjAuMA.." rel="noopener noreferrer" target="_blank" alt="Download English">English <i className="fas fa-download"/></a></div>
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portafolio-cdeff.appspot.com/o/CV.pdf?alt=media&token=fa515a53-8be0-4ee2-8780-7e5b6606e4a6&_gl=1*zq3uoy*_ga*NTAxNjQ1MDE5LjE2ODU1NTM3NzI.*_ga_CW55HF8NVT*MTY4NTU1Mzc3MS4xLjEuMTY4NTU1NjEyMC4wLjAuMA.." rel="noopener noreferrer" target="_blank" alt="Download Español">Español <i className="fas fa-download" /></a></div>
                    </div>
                    <hr className="hr-resume-left" />
                    <h5>Download Cover Letter</h5>
                    <div className="row">
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portafolio-cdeff.appspot.com/o/Carta%20de%20presentación%20-%20Cesar%20Andres%20Lares%20Rosas.pdf?alt=media&token=36a59b56-14d9-4daa-9c11-e551d1799b44&_gl=1*8ero5l*_ga*NTAxNjQ1MDE5LjE2ODU1NTM3NzI.*_ga_CW55HF8NVT*MTY4NTU1Mzc3MS4xLjEuMTY4NTU1NjQxNC4wLjAuMA.." rel="noopener noreferrer" target="_blank" alt="Download English">English <i className="fas fa-download"/></a></div>
                    <div className="col-md-12 col-lg-6 down"><a href="https://firebasestorage.googleapis.com/v0/b/portafolio-cdeff.appspot.com/o/Carta%20de%20presentación%20-%20Cesar%20Andres%20Lares%20Rosas.pdf?alt=media&token=36a59b56-14d9-4daa-9c11-e551d1799b44&_gl=1*8ero5l*_ga*NTAxNjQ1MDE5LjE2ODU1NTM3NzI.*_ga_CW55HF8NVT*MTY4NTU1Mzc3MS4xLjEuMTY4NTU1NjQxNC4wLjAuMA.." rel="noopener noreferrer" target="_blank" alt="Download Español">Español <i className="fas fa-download" /></a></div>
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
                        endDateUniversity="Mar 2019"
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
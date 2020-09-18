import React from 'react';

export default function Skills() {
    return (
        <div className="category-tabs presentation">
            <nav>
                <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-front-tab" data-toggle="tab" href="#nav-front" role="tab" aria-controls="nav-front" aria-selected="true">Front-end</a>
                    <a className="nav-link" id="nav-back-tab" data-toggle="tab" href="#nav-back" role="tab" aria-controls="nav-back" aria-selected="false">Back-end</a>
                    <a className="nav-link" id="nav-general-tab" data-toggle="tab" href="#nav-general" role="tab" aria-controls="nav-general" aria-selected="false">General</a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                {/* Front-end */}
                <div className="tab-pane fade show active" id="nav-front" role="tabpanel" aria-labelledby="nav-front-tab">
                    <div className="row skills-row">
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div className="d-flex">
                                    <p>HTML</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>90%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>CSS</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>30%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>ReactJS</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>55%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>AngularJS</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>VueJS</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>jQuery</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Sass</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Gulp</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>60%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>UI/UX</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>60%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Back-end */}
                <div className="tab-pane fade" id="nav-back" role="tabpanel" aria-labelledby="nav-back-tab">
                <div className="row skills-row">
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div className="d-flex">
                                    <p>Java</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Python</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>PHP</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '5%' }} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}>5%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>C++</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>C#</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>NodeJS</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>NextJS</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>NuxtJS</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '5%' }} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}>5%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>NestJS</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '5%' }} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}>5%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>ExpressJS</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>15%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Mongoose</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Sequelize</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '5%' }} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}>5%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>MySQL</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>MongoDB</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Firebase</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>PostgresDB</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>AWS</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Azure</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '5%' }} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}>5%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>GraphQL</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>REST</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Socket.IO</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* General */}
                <div className="tab-pane fade" id="nav-general" role="tabpanel" aria-labelledby="nav-general-tab">
                <div className="row skills-row">
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div className="d-flex">
                                    <p>Git</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>SCRUM</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Open UP</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>30%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Pruebas QA</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Command Terminal</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 skills-bar">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <div>
                                    <p>Documentation</p>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <div className="progress" >
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
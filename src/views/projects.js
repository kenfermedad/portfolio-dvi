import React from 'react';

export default function Projects() {
        return (
            <div className="category-tabs presentation">
                <nav>
                    <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        <a className="nav-link active" id="nav-react-tab" data-toggle="tab" href="#nav-react" role="tab" aria-controls="nav-react" aria-selected="true">ReactJS</a>
                        <a className="nav-link" id="nav-angular-tab" data-toggle="tab" href="#nav-angular" role="tab" aria-controls="nav-angular" aria-selected="false">Angular</a>
                        <a className="nav-link" id="nav-vue-tab" data-toggle="tab" href="#nav-vue" role="tab" aria-controls="nav-vue" aria-selected="false">VueJS</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    {/* ReactJS */}
                    <div className="tab-pane fade show active" id="nav-react" role="tabpanel" aria-labelledby="nav-react-tab">
                        <div className="projects-grid">
                            <div className="row row-cols-1 row-cols-md-3">
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/GS.jpg?alt=media&token=6778a817-a847-40c8-9819-bc78dd589f3e" className="card-img-top img-fluid" alt="GlobalScope" />
                                        <div className="card-body">
                                            <h5 className="card-title">GlobalScope</h5>
                                            <p className="card-text">Website developed to showcase the products and services of GlobalScope, a consulting sector of the Venezuelan company Global Ratings C.A.</p>
                                        </div>
                                        <div className="card-footer">
                                        <p>Go to <a href="https://www.glscope.com" className="card-link" target="_blank" rel="noopener noreferrer">https://www.glscope.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/GR.jpg?alt=media&token=173ed643-4a38-4524-a87b-c2b03dcb6240" className="card-img-top" alt="Global Ratings" />
                                        <div className="card-body">
                                            <h5 className="card-title">Global Ratings</h5>
                                            <p className="card-text">Main website of the Venezuelan risk rating company Global Ratings C.A.</p>
                                        </div>
                                        <div className="card-footer">
                                        <p>Go to <a href="https://glratings.com" className="card-link" target="_blank" rel="noopener noreferrer">https://glratings.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/GraphQL.jpg?alt=media&token=1533558b-17ce-4db1-bb85-49c82480e6d9" className="card-img-top" alt="Forum Real-Time Apollo GraphQL" />
                                        <div className="card-body">
                                            <h5 className="card-title">Forum Real-Time Apollo GraphQL</h5>
                                            <p className="card-text">Real-time application developed with a Apollo GraphQL API for my degree thesis.</p>
                                        </div>
                                        <div className="card-footer">
                                        <p>Go to <a href="https://frontend-react-graphql.web.app" className="card-link" target="_blank" rel="noopener noreferrer">https://frontend-react-graphql.web.app</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/REST.jpg?alt=media&token=2a5bf5f1-38cb-4ab8-9075-3792ad849918" className="card-img-top" alt="Forum Real-Time Socket.IO" />
                                        <div className="card-body">
                                            <h5 className="card-title">Forum Real-Time Socket.IO</h5>
                                            <p className="card-text">Real-time application developed with a REST API with the Socket.IO library for my degree thesis.</p>
                                        </div>
                                        <div className="card-footer">
                                        <p>Go to <a href="https://frontend-tesis-socket.firebaseapp.com" className="card-link" target="_blank" rel="noopener noreferrer">https://frontend-tesis-socket.firebaseapp.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Angular */}
                    <div className="tab-pane fade" id="nav-angular" role="tabpanel" aria-labelledby="nav-angular-tab">
                        <div className="projects-grid">
                            <div className="row row-cols-1 row-cols-md-3">
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/Angular.png?alt=media&token=e788fdcf-3cf0-4637-b40d-e1097469a521" className="card-img-top" alt="Project 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">Project 1</h5>
                                            <p className="card-text">Coming soon...</p>
                                        </div>
                                        {/* <div className="card-footer">
                                        <p>Go to <a href="https://project.com" className="card-link" target="_blank" rel="noopener noreferrer">https://project.com</a></p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/Angular.png?alt=media&token=e788fdcf-3cf0-4637-b40d-e1097469a521" className="card-img-top" alt="Project 2" />
                                        <div className="card-body">
                                            <h5 className="card-title">Project 2</h5>
                                            <p className="card-text">Coming soon...</p>
                                        </div>
                                        {/* <div className="card-footer">
                                        <p>Go to <a href="https://project.com" className="card-link" target="_blank" rel="noopener noreferrer">https://project.com</a></p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/Angular.png?alt=media&token=e788fdcf-3cf0-4637-b40d-e1097469a521" className="card-img-top" alt="Project 3" />
                                        <div className="card-body">
                                            <h5 className="card-title">Project 3</h5>
                                            <p className="card-text">Coming soon...</p>
                                        </div>
                                        {/* <div className="card-footer">
                                        <p>Go to <a href="https://project.com" className="card-link" target="_blank" rel="noopener noreferrer">https://project.com</a></p>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/Angular.png?alt=media&token=e788fdcf-3cf0-4637-b40d-e1097469a521" className="card-img-top" alt="Project 4" />
                                        <div className="card-body">
                                            <h5 className="card-title">Project 4</h5>
                                            <p className="card-text">Coming soon...</p>
                                        </div>
                                        <div className="card-footer">
                                        <p>Go to <a href="https://project.com" className="card-link" target="_blank" rel="noopener noreferrer">https://project.com</a></p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* VueJS */}
                    <div className="tab-pane fade" id="nav-vue" role="tabpanel" aria-labelledby="nav-vue-tab">
                        <div className="projects-grid">
                            <div className="row row-cols-1 row-cols-md-3">
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/Vue.jpeg?alt=media&token=8960da08-0879-4ec5-9350-65b5ec89f83d" className="card-img-top" alt="Project 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">Project 1</h5>
                                            <p className="card-text">Coming soon...</p>
                                        </div>
                                        {/* <div className="card-footer">
                                        <p>Go to <a href="https://project.com" className="card-link" target="_blank" rel="noopener noreferrer">https://project.com</a></p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/Vue.jpeg?alt=media&token=8960da08-0879-4ec5-9350-65b5ec89f83d" className="card-img-top" alt="Project 2" />
                                        <div className="card-body">
                                            <h5 className="card-title">Project 2</h5>
                                            <p className="card-text">Coming soon...</p>
                                        </div>
                                        {/* <div className="card-footer">
                                        <p>Go to <a href="https://project.com" className="card-link" target="_blank" rel="noopener noreferrer">https://project.com</a></p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/Vue.jpeg?alt=media&token=8960da08-0879-4ec5-9350-65b5ec89f83d" className="card-img-top" alt="Project 3" />
                                        <div className="card-body">
                                            <h5 className="card-title">Project 3</h5>
                                            <p className="card-text">Coming soon...</p>
                                        </div>
                                        {/* <div className="card-footer">
                                        <p>Go to <a href="https://project.com" className="card-link" target="_blank" rel="noopener noreferrer">https://project.com</a></p>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="col mb-4">
                                    <div className="card h-100">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/Vue.jpeg?alt=media&token=8960da08-0879-4ec5-9350-65b5ec89f83d" className="card-img-top" alt="Project 4" />
                                        <div className="card-body">
                                            <h5 className="card-title">Project 4</h5>
                                            <p className="card-text">Coming soon...</p>
                                        </div>
                                        <div className="card-footer">
                                        <p>Go to <a href="https://project.com" className="card-link" target="_blank" rel="noopener noreferrer">https://project.com</a></p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



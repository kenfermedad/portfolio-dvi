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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FGS.jpg?alt=media&token=14da11b3-b7c5-401d-9586-bbbca03fa120" className="card-img-top img-fluid" alt="GlobalScope" />
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FGR.jpg?alt=media&token=f6cf8db9-3f15-4411-a715-06187550bdfd" className="card-img-top" alt="Global Ratings" />
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FGraphQL.jpg?alt=media&token=f5ee0f7a-74b1-4e15-8ec9-62cbc735d1f5" className="card-img-top" alt="Forum Real-Time Apollo GraphQL" />
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FREST.jpg?alt=media&token=ed228ecd-98e7-40ba-b3d1-9518617d3e70" className="card-img-top" alt="Forum Real-Time Socket.IO" />
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FAngular.png?alt=media&token=338eb0ec-279e-466b-b3d6-f053e1d59ac8" className="card-img-top" alt="Project 1" />
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FAngular.png?alt=media&token=338eb0ec-279e-466b-b3d6-f053e1d59ac8" className="card-img-top" alt="Project 2" />
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FAngular.png?alt=media&token=338eb0ec-279e-466b-b3d6-f053e1d59ac8" className="card-img-top" alt="Project 3" />
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FAngular.png?alt=media&token=338eb0ec-279e-466b-b3d6-f053e1d59ac8" className="card-img-top" alt="Project 4" />
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FVue.jpeg?alt=media&token=98fd5b06-2a14-4d99-8544-d2a2ddc285f1" className="card-img-top" alt="Project 1" />
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FVue.jpeg?alt=media&token=98fd5b06-2a14-4d99-8544-d2a2ddc285f1" className="card-img-top" alt="Project 2" />
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FVue.jpeg?alt=media&token=98fd5b06-2a14-4d99-8544-d2a2ddc285f1" className="card-img-top" alt="Project 3" />
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FVue.jpeg?alt=media&token=98fd5b06-2a14-4d99-8544-d2a2ddc285f1" className="card-img-top" alt="Project 4" />
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



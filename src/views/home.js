import React from 'react';

export default function Home() {
    return (
        <div className="container presentation">
            <div className="row">
                <div className="col text-center">
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/img%2FAvatarHome.jpg?alt=media&token=9f8c740b-db2c-413e-a996-27875b3997f8" alt="Avatar Daniel Velásquez Iturrate" className="avatar-img" />
                </div>
            </div>
            <div className="row">
                <div className="col banner-text text-center">
                    <h1>Software Developer</h1>
                    <hr />
                    <p>HTML/CSS | Bootstrap | JavaScript | React | Angular | UI/UX | GraphQL | MongoDB</p>
                    <div className="col social-links">
                        {/* LinkedIn*/}
                        <a href="https://www.linkedin.com/in/daniel-velasquez-iturrate" rel="noopener noreferrer" target="_blank" alt="LinkedIn">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                        {/* GitHub*/}
                        <a href="https://github.com/velasqueziturrate" rel="noopener noreferrer" target="_blank" alt="GitHub">
                            <i className="fa fa-github-square" aria-hidden="true"></i>
                        </a>
                        {/* Youtube*/}
                        <a href="https://www.youtube.com/channel/UCuid9Ec8a-bPzf_xV5lJUrQ?view_as=subscriber" rel="noopener noreferrer" target="_blank" alt="YouTube">
                            <i className="fa fa-youtube-square" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
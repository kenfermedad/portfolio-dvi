import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './../views/home';
import Resume from './../views/resume';
import Skills from './../views/skills';
import Projects from './../views/projects';
import Contact from './../views/contact';

export default function Routes() {
    const scrollTop = (Component, props) => {
        window.scrollTo(0, 0);
        return <Component {...props}/>;
    };

    return(
    <Switch>
        <Route path="/home" render={props => scrollTop(Home, props)}/>
        <Route path="/resume" render={props => scrollTop(Resume, props)}/>
        <Route path="/skills" render={props => scrollTop(Skills, props)}/>
        <Route path="/projects" render={props => scrollTop(Projects, props)}/>
        <Route path="/contact" render={props => scrollTop(Contact, props)}/>
        <Redirect exact from="/*" to="/home"/>
    </Switch>
    );
}


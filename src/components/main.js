import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import About from './about';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';


const Main= ()=> (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Main;

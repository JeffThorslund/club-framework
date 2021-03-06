import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Landing from './components/landing/Landing.js';
import Home from './components/home/Home';
import Leaders from './components/leaders/Leaders';
import Calendar from './components/calendar/Calendar';
import Tasks from './components/tasks/Tasks';
import formikLeaders from './components/leaders-formik/Leaders'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/home' component={Home} />
          <Route path='/leaders' component={Leaders} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/tasks' component={Tasks} />
          <Route path='/formik-leaders' component={formikLeaders} />
        </Switch>

        
        
      </div>
    </Router>
  );
}

export default App;

//add customized weekly email. 
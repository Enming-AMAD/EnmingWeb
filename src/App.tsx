import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Main, Intro, Member, Project, NotFound } from "./pages";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/intro/" exact={true} component={Intro} />
          <Route path="/member/" exact={true} component={Member} />
          <Route path="/project/" exact={true} component={Project} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

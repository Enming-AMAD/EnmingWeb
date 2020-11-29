import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Main, Intro, Member, Project, NotFound } from "./pages";
import './App.css';

import logo from "./images/logo.png"

import NavigatorBar from "./pages/public/Navigator"

class App extends Component {
  render() {
    return (
      <div className="root">
        <BrowserRouter>
          <NavigatorHead></NavigatorHead>
          <Switch>
            <Route path="/" exact={true} component={Main} />
            <Route path="/intro/" exact={true} component={Intro} />
            <Route path="/member/" exact={true} component={Member} />
            <Route path="/project/" exact={true} component={Project} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

class NavigatorHead extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" alt="" src={logo} />
        <ul className="tabsContainer">
          {NavigatorBar}
        </ul>
      </div>
    )
  }
}

export default App;
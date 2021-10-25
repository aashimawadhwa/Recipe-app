import React, { Component } from "react";
import {Router,  Switch, Route } from "react-router-dom";
import history from './history';
import Home from "./App";
import main from "./main";

export default class Routes extends Component {
   
    render() {
        return (
            <Router history={history}>
               <Switch>
                    <Route  path="/" exact component={Home} />
                    <Route path="/main" exact component={main} forceRefresh={true} />
                    </Switch>
               
            </Router>
        )
    }
}
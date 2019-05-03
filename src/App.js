import React from 'react';
import History from './lib/history'
import {Router, Switch, Route, Redirect} from "react-router";
import MainRouting from './routerConfig/MainRouting'
import {GenerateRoutingComponents} from "./lib/routingUtils";

import './App.css';

function App() {
    //Creating the route component based on routing schema
    const routes = GenerateRoutingComponents(MainRouting)

    return (
        <Router history={History}>
            <Switch>
                {routes}
            </Switch>
        </Router>
    );
}


export default App;

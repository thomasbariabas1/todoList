import {Router, Switch, Route, Redirect} from "react-router";
import PrivateRoute from "../components/PrivateRoute";
import React from "react";

export const GenerateRoutingComponents = (routes) =>{
    return routes.map(route => {
        //Check if the object of the route array is redirect
        if (route.redirect)
        //In case of redirect, render the redirect component
            return <Redirect to={route.to} from={route.from}/>
        //Check if the route need authentication to be showned
        if(route.requireAuthentication)
        //if the user is authenticated show the route, otherwise redirect into login page
            return <PrivateRoute exact={route.exact} path={route.path} component={route.component}/>
        //Returns the route component
        return <Route exact={route.exact} path={route.path} component={route.component}/>
    });
}
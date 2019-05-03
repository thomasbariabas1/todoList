import React from 'react'
import PrimarySearchAppBar from '../components/PrimarySearchAppBar'
import ApplicationRouting from '../routerConfig/ApplicationRouting'
import {GenerateRoutingComponents} from "../lib/routingUtils";
import {Switch} from "react-router";

const ApplicationWrapper = () =>{

    const routes = GenerateRoutingComponents(ApplicationRouting)
    return (
        <div>
            <PrimarySearchAppBar/>
            <Switch>
                {routes}
            </Switch>
        </div>
    )
}

export default ApplicationWrapper
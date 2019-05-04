import React from 'react';
import History from './lib/history'
import {Router, Switch} from "react-router";
import MainRouting from './routerConfig/MainRouting'
import {GenerateRoutingComponents} from "./lib/routingUtils";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import store from './redux/Store'
import {Provider} from 'react-redux'

import './App.css';


// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
    palette: {
        primary: green,
        error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    typography: {
        useNextVariants: true,
    },
});

function App() {
    //Creating the route component based on routing schema
    const routes = GenerateRoutingComponents(MainRouting)

    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <Router history={History}>
                    <Switch>
                        {routes}
                    </Switch>
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
}


export default App;

import React from 'react'
import {Route, Redirect} from "react-router";
const storage = window.sessionStorage

const PrivateRoute = ({ component: Component, ...rest }) => {

    const User = storage.getItem('user')
    const isAuthenticated = !!User
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute
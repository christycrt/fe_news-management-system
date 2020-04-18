import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//Pages
import LoginPage from './Page/Login'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage/>
                </Route>
            </Switch>
        </Router>
    )
}
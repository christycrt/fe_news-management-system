import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//Pages
import LoginPage from './Page/Login'
import CreateNewsPage from './Page/CreateNews'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path={`/:system/createnews`}>
                    <CreateNewsPage/>
                </Route>
            </Switch>
        </Router>
    )
}
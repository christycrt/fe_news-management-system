import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

//Pages
import LoginPage from './Page/Login'
import CreateNewsPage from './Page/CreateNews'
import LayoutPage from './Component/LayoutPage';
import TestPage from './Page/Test';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path={`/:system/createnews`}>
                    <LayoutPage><CreateNewsPage/></LayoutPage>
                </Route>
                <Route path={`/test`}>
                    <TestPage/>
                </Route>
            </Switch>
        </Router>
    )
}
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import 'antd/dist/antd.css';

import Layout from './Component/Layout';
//Pages
import LoginPage from './Page/Login'
import TestRedux from './Test-redux';
import AllSystem from './Page/AllSystem';
import CreateNewsPage from './Page/CreateNews';
import Createnewstype from './Page/CreateNewsType';
import Dashboard from './Page/Dashboard';
import ErrorPage from './Page/404'
import RegisterPage from './Page/Register'
import CreateSystemPage from './Page/CreateSystem'
export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/login" render={(props) => <LoginPage {...props}/>}/>
                <Route path="/test" render={(props) => <TestRedux {...props}/>}/>
                <Route path="/register" render={(props) => <RegisterPage {...props}/>}/>
                <Route path="/allsystem" render={(props) => <AllSystem/>}/>
                <Route path="/createsystem" render={(props) => <CreateSystemPage/>}/>
                <Route path="/:system/:systemid/news/allnews" render={(props) => <Layout {...props} >All News</Layout>}/>
                <Route path="/:system/:systemid/news/createnews" render={(props) => <Layout {...props} ><CreateNewsPage/></Layout>}/>
                <Route path="/:system/:systemid/news/createnewstype" render={(props) => <Layout {...props} ><Createnewstype {...props}/></Layout>}/>
                <Route path="/:system/:systemid/targetgroup/alltargetgroup" render={(props) => <Layout {...props} >Al Target Group</Layout>}/>
                <Route path="/:system/:systemid/targetgroup/createtargetgroup" render={(props) => <Layout {...props} >Create Target Group</Layout>}/>
                <Route path="/:system/:systemid/home" render={(props) => <Layout {...props} >Home</Layout>}/>
                <Route path="/:system/:systemid/dashboard" render={(props) => <Layout {...props} ><Dashboard/></Layout>}/>
                <Route render={() => <Redirect push to="/login"/>}/>
            </Switch>
        </Router>
    )
}
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import 'antd/dist/antd.css';

//Pages
import LoginPage from './Page/Login'
import CreateNewsPage from './Page/CreateNews'
import Layout from './Component/Layout';
import TestRedux from './Test-redux';
import ErrorPage from './Page/404'
export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/login" render={(props) => <LoginPage {...props}/>}/>
                <Route path="/test" render={(props) => <TestRedux {...props}/>}/>
                <Route path="/:system/news/allnews" render={(props) => <Layout {...props} >All News</Layout>}/>
                <Route path="/:system/news/createnews" render={(props) => <Layout {...props} ><CreateNewsPage/></Layout>}/>
                <Route path="/:system/news/createnewstype" render={(props) => <Layout {...props} >Create News Type</Layout>}/>
                <Route path="/:system/targetgroup/alltargetgroup" render={(props) => <Layout {...props} >Al Target Group</Layout>}/>
                <Route path="/:system/targetgroup/createtargetgroup" render={(props) => <Layout {...props} >Create Target Group</Layout>}/>
                <Route path="/:system/home" render={(props) => <Layout {...props} >Home</Layout>}/>
                <Route path="/:system/dashboard" render={(props) => <Layout {...props} >Dashboard</Layout>}/>
                <Route render={() => <ErrorPage/>}/>
            </Switch>
        </Router>
    )
}
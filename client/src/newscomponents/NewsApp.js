import './NewsApp.css';

import React, { useState } from 'react'
import NavBar from './NavBar';
import News from './News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const NewsApp = () => {
    const pageSize = 5;
    const apiKey = process.env.REACT_APP_NEWS_API
    const [progress, setProgress] = useState(0)

    return (
        <div>
            <Router>
                <NavBar />
                <LoadingBar
                    height={3}
                    color='#f11946'
                    progress={progress}
                />
                <Switch>
                    <Route exact path="/news"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
                    <Route exact path="/news/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /></Route>
                    <Route exact path="/news/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
                    <Route exact path="/news/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
                    <Route exact path="/news/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" /></Route>
                    <Route exact path="/news/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /></Route>
                    <Route exact path="/news/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
                    <Route exact path="/news/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
                </Switch>
            </Router>
        </div>
    )

}

export default NewsApp;
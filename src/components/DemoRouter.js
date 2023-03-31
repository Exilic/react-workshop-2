import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Person from "./Person";
import Welcome from "./Welcome";
import NotFound from "./NotFound";
import Header from "./Header";
import CrudDemo from "./CrudDemo";

const DemoRouter = () => {
    return (
        <div className='container'>
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact >
                            <Welcome />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/person">
                            <Person />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/crud">
                            <CrudDemo />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>

                </div>
            </Router>
        </div>
    );
};

export default DemoRouter;
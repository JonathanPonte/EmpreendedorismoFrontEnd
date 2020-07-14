import React from 'react';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/index';
import SingUp from '../pages/SingUp/index';
import About from '../pages/About/index';
import ScalesListing from '../pages/ScalesListing/index'


const Routes = () => {

    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login}/>
            <Route path="/signUp" component={SingUp} />
            <Route path="/about" component={About} />
            <Route path="/scales_listing" component={ScalesListing}/>
        </Switch>
        </BrowserRouter>
    );

}


export default Routes;

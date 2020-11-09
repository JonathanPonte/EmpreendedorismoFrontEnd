import React from 'react';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/index';
import SingUp from '../pages/SingUp/index';
import About from '../pages/About/index';
import ScalesListing from '../pages/ScalesListing/index';
import NewScale from '../pages/NewScale/index';
import InformationScale from '../pages/InformationScale/index';
import ListAdms from '../pages/ListAdms/index';
import NewAdm from '../pages/NewAdm/index';
import ChangePassword from '../pages/ChangePassword/index';
import Questions from '../pages/Questions/index';

const Routes = () => {

    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login}/>
            <Route path="/signUp" component={SingUp} />
            <Route path="/about" component={About} />
            <Route path="/scales_listing" component={ScalesListing}/>
            <Route path="/new_scale" component={NewScale}/>
            <Route path="/scale/:id" component={InformationScale}/>
            <Route path="/adm" component={ListAdms}/>
            <Route path="/new_adm" component={NewAdm}/>
            <Route path="/change_password" component={ChangePassword}/>
            <Route path="/questions" component={Questions}/>
        </Switch>
        </BrowserRouter>
    );

}


export default Routes;

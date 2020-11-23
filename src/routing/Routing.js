import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {ROUTING} from "../shared/constants";
import {HomePage, LoginPage} from "../pages";
import RegisterPage from "../pages/RegisterPage/RegisterPage";


export const Routing = () => {
    return (
        <Switch>
            <Route exact path={ROUTING.HOME_PAGE} component={HomePage}/>
            <Route path={ROUTING.REGISTER_PAGE} component={RegisterPage}/>
            <Route path={ROUTING.LOGIN_PAGE} component={LoginPage}/>
        </Switch>
    );
};

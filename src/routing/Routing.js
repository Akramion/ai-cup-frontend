import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {ROUTING} from "../shared/constants";
import {ActivatePage, HomePage, LoginPage, RegisterPage} from "../pages";

export const Routing = () => {
    return (
        <Switch>
            <Route exact path={ROUTING.HOME_PAGE} component={HomePage}/>
            <Route path={ROUTING.REGISTER_PAGE} component={RegisterPage}/>
            <Route path={ROUTING.LOGIN_PAGE} component={LoginPage}/>
            <Route path={`${ROUTING.ACTIVATE_PAGE}/MTg/:token`} component={ActivatePage} />
        </Switch>
    );
};

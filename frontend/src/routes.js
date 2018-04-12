import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import App from './App';

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
        </Switch>
    </BrowserRouter>
)

export default routes

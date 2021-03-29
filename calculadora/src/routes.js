import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Example from './pages/Example';
import Grupo1 from './pages/Grupo1';
import Grupo2 from './pages/Grupo2';
import Grupo3 from './pages/Grupo3';
import Grupo4 from './pages/Grupo4';
import Grupo5 from './pages/Grupo5';
import Grupo6 from './pages/Grupo6';
import Grupo7 from './pages/Grupo7';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Example} />
                <Route path="/Grupo1" exact component={Grupo1} />
                <Route path="/Grupo2" exact component={Grupo2} />
                <Route path="/Grupo3" exact component={Grupo3} />
                <Route path="/Grupo4" exact component={Grupo4} />
                <Route path="/Grupo5" exact component={Grupo5} />
                <Route path="/Grupo6" exact component={Grupo6} />
                <Route path="/Grupo7" exact component={Grupo7} />
            </Switch>
        </BrowserRouter>
    );
}
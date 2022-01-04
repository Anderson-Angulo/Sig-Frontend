import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PersonPage from './pages/people/PersonPage';
import PeoplePage from './pages/people/PeoplePage';
import PositionsPage from './pages/positions/PositionsPage';

export default function RrhhRouting() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/personas`}>
          <Route exact path={`${path}/personas`} component={PeoplePage} ren />
          <Route path={`${path}/personas/:id`} component={PersonPage} />
        </Route>
        <Route path={`${path}/cargos`}>
          <Route path={`${path}/cargos`} component={PositionsPage} />
        </Route>
      </Switch>
    </>
  );
}

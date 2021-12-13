import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PersonPage from './pages/people/PersonPage';
import PeoplePage from './pages/people/PeoplePage';
import WorkstationPage from './pages/workstation/WorkstationPage';

export default function RrhhRouting() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/personas`}>
          <Route exact path={`${path}/personas`} component={PeoplePage} ren />
          <Route path={`${path}/personas/:id`} component={PersonPage} />
        </Route>
        <Route path={`${path}/puestos-trabajo`}>
          <Route path={`${path}/puestos-trabajo`} component={WorkstationPage} />
        </Route>
      </Switch>
    </>
  );
}

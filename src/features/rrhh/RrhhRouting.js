import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PersonPage from './pages/people/PersonPage';
import PeoplePage from './pages/people/PeoplePage';
import WorkstationPage from './pages/workstation/WorkstationPage';
import SearchDepartmentPage from './pages/department/SearchDepartmentPage';
import PositionsPage from './pages/positions/PositionsPage';
import PositionPage from './pages/positions/PositionPage';

export default function RrhhRouting() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/personas`}>
          <Route exact path={`${path}/personas`} component={PeoplePage} ren />
          <Route path={`${path}/personas/:id`} component={PersonPage} />
        </Route>
        <Route path={`${path}/cargos`} component={PositionsPage}>
          <Route exact path={`${path}/cargos`} component={PositionsPage} />
          <Route exact path={`${path}/cargos/nuevo`} component={() => <PositionPage title="NUEVO CARGO" />}
        />
        </Route>
        <Route path={`${path}/departamento`}>
          <Route path={`${path}/departamento`} component={SearchDepartmentPage} />
        </Route>
      </Switch>
    </>
  );
}

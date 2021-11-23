import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PersonaPage from './pages/personas/persona/persona.page';
import PersonasPage from './pages/personas/personas.page';
import PuestoTrabajoPage from './pages/puesto-trabajo/puesto-trabajo.page';

export default function RrhhRouting() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/personas`}>
          <Route exact path={`${path}/personas`} component={PersonasPage} ren />
          <Route path={`${path}/personas/:id`} component={PersonaPage} />
        </Route>
        <Route path={`${path}/puestos-trabajo`}>
          <Route
            path={`${path}/puestos-trabajo`}
            component={PuestoTrabajoPage}
          />
        </Route>
      </Switch>
    </>
  );
}

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { PrivadoRouting, PublicoRouting } from 'core/routes/routing';
import { Privado } from './publico/privado-routing';
import { Publico } from './publico/publico-routing';

export const AppRouting = () => {
  const loggedIn = false;
  return (
    <>
      <Router>
        <Switch>
          <PrivadoRouting
            path="/rrhh"
            isAuthenticated={loggedIn}
            component={Privado}
          />
          <PublicoRouting
            path="/"
            isAuthenticated={loggedIn}
            component={Publico}
          />
        </Switch>
      </Router>
    </>
  );
};

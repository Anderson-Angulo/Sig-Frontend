import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { PrivatesRouting, PublicRouting } from 'core/routes/routing';
import { Public } from './public/public';
import { Privates } from './privates/privates';

export const AppRouting = () => {
  const loggedIn = false;
  return (
    <>
      <Router>
        <div>
          <Switch>
            <PrivatesRouting
              path="/rrhh"
              isAuthenticated={loggedIn}
              component={Privates}
            />
            <PublicRouting
              path="/"
              isAuthenticated={loggedIn}
              component={Public}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};

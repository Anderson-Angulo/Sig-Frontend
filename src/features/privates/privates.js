import { Redirect, Route, Switch } from 'react-router-dom';
import PersonPage from './rrhh/pages/people/person/person-page';

export const Privates = () => {
  return (
    <Switch>
      <Route exact path="/rrhh" component={PersonPage} />
      <Redirect to="/inicio-sesion" />
    </Switch>
  );
};

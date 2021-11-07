import { Redirect, Route, Switch } from 'react-router-dom';
import PersonaPage from './rrhh/pages/personas/persona/persona-page';

export const Privado = () => {
  return (
    <Switch>
      <Route exact path="/rrhh" component={PersonaPage} />
      <Redirect to="/inicio-sesion" />
    </Switch>
  );
};

import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

<<<<<<< HEAD:src/core/routes/routing/public-routing.js
export const PublicRouting = ({ isAuthenticated, component: Component, ...rest }) => {
=======
export const PublicoRouting = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
>>>>>>> 1cd421cffe1243fb0ccabcc2faa952470668b854:src/core/routes/routing/publico-routing.js
  return (
    <Route {...rest} component={(props) =>
      !isAuthenticated ? <Component {...props} /> : <Redirect to="/rrhh" />
    }></Route>
  );
};

<<<<<<< HEAD:src/core/routes/routing/public-routing.js
PublicRouting.propTypes = { isAuthenticated: PropTypes.bool.isRequired, component: PropTypes.func.isRequired };
=======
PublicoRouting.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
>>>>>>> 1cd421cffe1243fb0ccabcc2faa952470668b854:src/core/routes/routing/publico-routing.js

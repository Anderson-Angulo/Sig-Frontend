import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

<<<<<<< HEAD:src/core/routes/routing/privates-routing.js
export const PrivatesRouting = ({ isAuthenticated, component: Component, ...rest }) => {
=======
export const PrivadoRouting = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
>>>>>>> 1cd421cffe1243fb0ccabcc2faa952470668b854:src/core/routes/routing/privado-routing.js
  return (
    <Route {...rest} component={(props) =>
      isAuthenticated ? (<Component {...props} />) : (<Redirect to="/inicio-sesion" />)
    }></Route>
  );
};

<<<<<<< HEAD:src/core/routes/routing/privates-routing.js
PrivatesRouting.propTypes = { isAuthenticated: PropTypes.bool.isRequired, component: PropTypes.func.isRequired };
=======
PrivadoRouting.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
>>>>>>> 1cd421cffe1243fb0ccabcc2faa952470668b854:src/core/routes/routing/privado-routing.js

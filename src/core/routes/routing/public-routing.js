import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRouting = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) =>
      !isAuthenticated ? <Component {...props} /> : <Redirect to="/rrhh" />
    }></Route>
  );
};

PublicRouting.propTypes = { isAuthenticated: PropTypes.bool.isRequired, component: PropTypes.func.isRequired };

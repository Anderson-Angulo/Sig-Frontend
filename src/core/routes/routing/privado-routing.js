import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivadoRouting = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route {...rest} component={(props) =>
      isAuthenticated ? (<Component {...props} />) : (<Redirect to="/inicio-sesion" />)
    }></Route>
  );
};

PrivadoRouting.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

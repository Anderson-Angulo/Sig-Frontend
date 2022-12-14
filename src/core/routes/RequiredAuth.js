import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authAction } from 'core/store/actions/AuthAction';

export default function RequireAuth({ children, ...rest }) {
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  // const userInformation = JSON.parse(localStorage.getItem('sig-session'));
  //if (userInformation != null)
  dispatch(authAction.validarSesion());

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/seguridad/inicio-sesion',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

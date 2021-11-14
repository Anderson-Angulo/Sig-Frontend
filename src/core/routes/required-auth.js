import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, useLocation } from "react-router-dom";
//import { authAction } from './../../';

export default function RequireAuth({ children, ...rest }) {
    //let auth = { user: null };// useAuth();
    const location = useLocation();
    const dispatch = useDispatch();

    const loggedIn = useSelector(state => state.authReducer.loggedIn);
    const userInformation = JSON.parse(localStorage.getItem('sig-session'));
        // if (userInformation != null)
        //     dispatch({ type: PublicoConstants.Accion.Login.SUCCESS, userInformation });
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (loggedIn || userInformation) ? (
                    children
                ) : (
                    // <Redirect to="/publico/inicio-sesion" state={{ from: location }} />
                    <Redirect to={{ pathname: "/seguridad/inicio-sesion", state: { from: location } }} />
                )
            }
        />
    );
    // if (!loggedIn)
    //     return <Redirect to="/publico/inicio-sesion" state={{ from: location }} />;

    // return children;
}

// function PrivateRoute({ children, ...rest }) {
//     //let auth = useAuth();
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           loggedIn ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/publico/inicio-sesion",
//                 state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }
import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Redirect, } from "react-router-dom";

export default function RequireAuth({ children }) {
    let auth = { user: null };// useAuth();
    let location = useLocation();

    const loggedIn = true;// useSelector(state => state.authReducer.loggedIn);

    if (!loggedIn) {
        //console.log("==");
        return <Redirect to="/publico/inicio-sesion" state={{ from: location }} />;
    }

    return children;
}
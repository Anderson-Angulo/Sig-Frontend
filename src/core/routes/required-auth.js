import * as React from "react";
import { useLocation, Redirect, } from "react-router-dom";

export default function RequireAuth({ children }) {
    let auth = { user: null };// useAuth();
    let location = useLocation();

    if (!auth.user) {
        //console.log("==");
        return <Redirect to="/publico/inicio-sesion" state={{ from: location }} />;
    }

    return children;
}
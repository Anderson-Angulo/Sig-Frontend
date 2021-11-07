import * as React from "react";
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Redirect,
    Outlet
} from "react-router-dom";

export default function RequireAuth({ children }) {
    let auth = { user: {} };// useAuth();
    let location = useLocation();

    if (!auth.user) {
        //console.log("==");
        return <Redirect to="/publico/inicio-sesion" state={{ from: location }} />;
    }

    return children;
}
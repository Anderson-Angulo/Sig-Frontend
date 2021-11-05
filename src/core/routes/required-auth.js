
import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Redirect ,
  Outlet
} from "react-router-dom";

export default function RequireAuth({ children }) {
    let auth = { user: {} };// useAuth();
    let location = useLocation();
    
    if (!auth.user) {
        return <Redirect  to="/publico/login" state={{ from: location }} />;
    }

    return children;
}
import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import DefaultComponent from "../../shared/components/default-layout/default.component";
// import RouteWithLayout from "../../core/routes/app-route";

// import DefaultComponent from "../../shared/components/default-layout/default.component";
import PersonaPage from "./pages/personas/persona/persona.page";
import PersonasPage from "./pages/personas/personas.page";
import PuestosTrabajoPage from "./pages/puestos-trabajo/puestos-trabajo.page";

export default function RrhhRouting() {

    const { path } = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={`${path}/personas`}  >
                    <Route exact path={`${path}/personas`} component={PersonasPage} ren />
                    <Route path={`${path}/personas/:id`} component={PersonaPage} />
                </Route>
                <Route path={`${path}/puestos-trabajo`} >
                    <Route path={`${path}/puestos-trabajo`} component={PuestosTrabajoPage} />
                </Route>
            </Switch>
        </>
    );
}
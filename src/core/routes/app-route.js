import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultComponent from "../../shared/components/default-layout/default.component";
export default function RouteWithLayout({ layout, component, ...rest }) {   
    return (
        <Route
            {...rest}
            render={(props) => (
                <DefaultComponent>
                    <Component  {...props} />
                </DefaultComponent>


            )}
        />
    )
}

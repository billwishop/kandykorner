import React from "react";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import { ProductList } from "./products/ProductList";
import { Route } from "react-router-dom";
import { ProductTypeProvider } from "./products/ProductTypeProvider";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeForm } from "./employees/EmployeeForm";

export const ApplicationViews = () => {
return (
<>
    <LocationProvider>
    <Route exact path="/locations">
        <LocationList />
    </Route>
    </LocationProvider>

    <ProductProvider>
    <ProductTypeProvider>
        <Route exact path="/products">
        <ProductList />
        </Route>
    </ProductTypeProvider>
    </ProductProvider>

    <EmployeeProvider>
    <LocationProvider>
        <Route
        exact
        path="/employees"
        render={(props) => <EmployeeList {...props} />}
        />

        <Route
        exact
        path="/employees/create"
        render={(props) => <EmployeeForm {...props} />}
        />
    </LocationProvider>
    </EmployeeProvider>
</>
);
};

import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { Route } from "react-router-dom"


export const ApplicationViews = () => {
    return (
        <>
        <LocationProvider>
            <Route exact path="/locations">
            <LocationList />
            </Route>
        </LocationProvider>
        
        <ProductProvider>
            <Route exact path="/products">
            <ProductList />
            </Route>
        </ProductProvider>
        </>
    )
}
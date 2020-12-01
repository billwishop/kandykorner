import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"


export const ApplicationViews = () => {
    return (
        <>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        
        <ProductProvider>
            <ProductList />
        </ProductProvider>
        </>
    )
}
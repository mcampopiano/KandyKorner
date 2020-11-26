import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductTypeProvider } from "./productTypes/productTypeProvider"


export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductTypeProvider>
                <ProductProvider>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </ProductProvider>
            </ProductTypeProvider>
        </>
    )
}
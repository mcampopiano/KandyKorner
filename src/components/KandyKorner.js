import React from "react"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"

export const KandyKorner = () => (
    <>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <ProductProvider>
            <ProductList />
        </ProductProvider>
    </>
)
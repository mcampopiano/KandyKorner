import React from "react"
import { ApplicationViews } from "./ApplicationViews"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { NavBar } from "./nav/NavBar"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"

export const KandyKorner = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)
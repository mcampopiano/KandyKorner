import React from "react"
import { Route } from "react-router-dom"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductTypeProvider } from "./productTypes/productTypeProvider"


export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path ="/" />
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

            <LocationProvider>
                <EmployeeProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />
                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } />
                </EmployeeProvider>
            </LocationProvider>
        </>
    )
}
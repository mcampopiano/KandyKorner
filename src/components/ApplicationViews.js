import React from "react"
import { Route } from "react-router-dom"
import { CustomerCandyProvider } from "./CustomerCandy/CustomerCandyProvider"
import { OrderList } from "./CustomerCandy/OrderList"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
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
            <Route exact path="/" />
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>


            <CustomerCandyProvider>
                <ProductTypeProvider>
                    <ProductProvider>
                        <Route path="/products">
                            <ProductList />
                        </Route>
                    </ProductProvider>
                </ProductTypeProvider>
            </CustomerCandyProvider>

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


            <CustomerCandyProvider>
                <ProductProvider>
                    <Route path="/orders">
                        <OrderList />
                    </Route>
                </ProductProvider>
            </CustomerCandyProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}
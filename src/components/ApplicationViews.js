import React from "react"
import { Route } from "react-router-dom"
import { CustomerCandyProvider } from "./CustomerCandy/CustomerCandyProvider"
import { OrderList } from "./CustomerCandy/OrderList"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { Home } from "./home/home"
import { LocationDetails } from "./locations/locationDetails"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductTypeProvider } from "./productTypes/productTypeProvider"
import { SearchBar } from "./searchBar/SearchBar"


export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <ProductTypeProvider>

                    <LocationProvider>
                        <Route path="/locations/:locationId(\d+)" render={
                            props => <LocationDetails {...props} />}
                        />
                    </LocationProvider>
                </ProductTypeProvider>
            </ProductProvider>


            <CustomerCandyProvider>
                <ProductTypeProvider>
                    <ProductProvider>
                        <Route path="/products" render={
                            props => <>

                                <SearchBar />
                                <ProductList {...props} />
                            </>
                        }
                        />
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
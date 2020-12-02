import React, { useContext, useEffect } from "react"
import { Customer } from "./Customer"
import { CustomerContext } from "./CustomerProvider"


export const CustomerList = () => {
    const {customers, getCustomers} = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <div className="customerList">
            {
                customers.map(customer => <Customer key={customer.id} Customer={customer} />)
            }
        </div>
    )
}
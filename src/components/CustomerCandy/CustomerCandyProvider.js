import React, { useContext, useState } from "react"

export const OrderContext = React.createContext([])

export const CustomerCandyProvider = (props) => {
    const [orders, setOrders] = useState([])

    const getOrders = () => {
        return fetch("http://localhost:8088/CustomerCandy")
            .then(res => res.json())
            .then(setOrders)
    }

    const addOrder = (order) => {
        return fetch("http://localhost:8088/CustomerCandy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(getOrders)
    }
    return (

        <OrderContext.Provider value={{ orders, getOrders, addOrder }}>
            {props.children}
        </OrderContext.Provider>
    )

}
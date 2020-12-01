import React, {useContext, useEffect} from "react"
import { ProductContext } from "../product/ProductProvider"
import { OrderContext } from "./CustomerCandyProvider"

export const OrderList = () => {
    const {orders, getOrders} = useContext(OrderContext)
    const {products, getProducts} = useContext(ProductContext)

    useEffect(() => {
        getOrders()
        .then(getProducts)
    }, [])

    return (
        <div className="orderList">
            <h2>My order:</h2>
            {
                
            }
        </div>
    )
}
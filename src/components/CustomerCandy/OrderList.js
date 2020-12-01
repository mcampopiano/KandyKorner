import React, {useContext, useEffect} from "react"
import { ProductContext } from "../product/ProductProvider"
import { OrderContext } from "./CustomerCandyProvider"
import { Order } from "./Order"

export const OrderList = () => {
    const {orders, getOrders} = useContext(OrderContext)
    const {products, getProducts} = useContext(ProductContext)

    useEffect(() => {
        getProducts()
        .then(getOrders)
    }, [])

    return (
        <div className="orderList">
            <h2>My order:</h2>
            {
                orders.map(order => {
                    if (order.customerId === parseInt(localStorage.getItem("kandy_customer"))) {
                       const candy = products.find(candy => candy.id === order.productId)
                       return <Order key={candy.id} candy={candy} />
                    }

                })
            }
        </div>
    )
}
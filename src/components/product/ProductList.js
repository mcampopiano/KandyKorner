import React, { useContext, useEffect } from "react"
import { ProductTypeContext } from "../productTypes/productTypeProvider"
import { Product } from "./Product"
import { ProductContext } from "./ProductProvider"
import {OrderContext} from "../CustomerCandy/CustomerCandyProvider"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)
    const {addOrder} = useContext(OrderContext)

    useEffect(() => {
        getProductTypes()
            .then(getProducts)
    }, [])

    return (
        <div className="products">
            {
                products.map(product => {
                    const type = productTypes.find(type => type.id === product.productTypeId)
                    return (
                        <>
                            <Product key={product.id} product={product} type={type} />
                            <button onClick={() => {
                                addOrder({
                                    customerId: parseInt(localStorage.getItem("kandy_customer")),
                                    productId: product.id
                                })
                            }}
                            className="purchaseBtn">Purchase</button>
                        </>)
                }
                )
            }
        </div>
    )
}
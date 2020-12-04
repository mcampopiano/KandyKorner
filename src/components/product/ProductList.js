import React, { useContext, useEffect, useState } from "react"
import { ProductTypeContext } from "../productTypes/productTypeProvider"
import { Product } from "./Product"
import { ProductContext } from "./ProductProvider"
import { OrderContext } from "../CustomerCandy/CustomerCandyProvider"

export const ProductList = (props) => {
    const { products, getProducts, searchTerms } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)
    const { addOrder } = useContext(OrderContext)

    const [filteredProducts, setFiltered] = useState([])
    useEffect(() => {
        getProductTypes()
            .then(getProducts)
    }, [])

useEffect(() => {
    // The state of searchTerms is being updated in SearchBar.js
    if (searchTerms !== "") {
        const subset = products.filter(prod => prod.name.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(subset)
    } else {
        setFiltered(products)
    }
}, [searchTerms, products])
    return (
        <div className="products">
            {
                filteredProducts.map(product => {
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
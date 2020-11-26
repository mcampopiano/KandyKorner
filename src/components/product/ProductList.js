import React, {useContext, useEffect} from "react"
import { ProductTypeContext } from "../productTypes/productTypeProvider"
import { Product } from "./Product"
import { ProductContext } from "./ProductProvider"

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)
    const {productTypes, getProductTypes} = useContext(ProductTypeContext)

    useEffect(() => {
        getProductTypes()
        .then(getProducts)
    }, [])

    return (
        <div className="products">
            {
                products.map(product => {
                    const type = productTypes.find(type => type.id === product.productTypeId)
                   return <Product key={product.id} product={product} type={type}/>
                } 
                )
            }
        </div>
    )
}
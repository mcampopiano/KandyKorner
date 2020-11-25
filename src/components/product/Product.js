import React from "react"

export const Product = ({ product }) => (
    <section className="product">
        <h3>{product.name}</h3>
        <p>Type: {product.productTypeId}</p>
        <p>price: ${product.price}</p>
    </section>
)
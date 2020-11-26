import React from "react"

export const Product = ({ product, type }) => (
    <section className="product">
        <h3>{product.name}</h3>
        <p>Type: {type.type}</p>
        <p>price: ${product.price}</p>
    </section>
)
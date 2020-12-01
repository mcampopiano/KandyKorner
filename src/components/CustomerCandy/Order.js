import React from "react"

export const Order = ({candy}) => (
    <section className="orders">
        <h2>{candy.name}</h2>
        <p>Price ${candy.price}</p>
    </section>
)
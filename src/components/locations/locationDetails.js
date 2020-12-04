import React from "react"
import { ProductList } from "../product/ProductList"

export const LocationDetails = (props) => {
return (
    <div className="locationDetails">
        <h2>{props.location.state.chosenLocation.name}</h2>
        <ProductList {...props} />

    </div>
)
}
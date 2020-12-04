import React, { useContext } from "react"
import { ProductContext } from "../product/ProductProvider"

export const SearchBar = (props) => {
    const {setTerms} = useContext(ProductContext)

    return (
        <>
            Product Search:
            <input type="text" className="productSearchBar" onKeyUp= {
                (event) => setTerms(event.target.value)
            }
            placeholder="Type product name to search" />
        </>
    )
}
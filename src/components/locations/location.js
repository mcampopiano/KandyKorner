import React from "react"
import { Link } from "react-router-dom"

export const Location = ({location}) => (
    <Link className="locationCard" to={{
        pathname: `/locations/${location.id}`,
        state: {chosenLocation: location}
    }}>
        <h3>{location.name}</h3>    
        <p>{location.address}</p>
    </Link>
)

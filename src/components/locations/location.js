import React from "react"

export const Location = ({location}) => (
    <div className="locationCard">
        <h3>{location.name}</h3>    
        <p>{location.address}</p>
    </div>
)

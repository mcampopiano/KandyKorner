import React from "react"

export const Employee = ({ employee }) => (
    <div className="employeeCard">
        <h2>{employee.name}</h2>
        <p>Workplace: {employee.locationId}</p>
    </div>
)
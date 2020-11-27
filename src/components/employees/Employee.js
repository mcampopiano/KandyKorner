import React from "react"

export const Employee = ({ employee, location }) => (
    <div className="employeeCard">
        <h2>{employee.name}</h2>
        <p>Workplace: {location.name}</p>
    </div>
)
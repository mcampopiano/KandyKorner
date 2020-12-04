import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"

export const Employee = ({ employee, location }) => {
    const { fireEmployee } = useContext(EmployeeContext)

    return (<div className="employeeCard">
        <h2>{employee.name}</h2>
        <p>Workplace: {location.name}</p>
        <button className="fireButon" onClick={event => {

            fireEmployee(employee.id)
            
        }
        }>Fire Employee</button>
    </div>
    )
}
import React, { useContext, useEffect } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations().then(getEmployees)
    }, [])

    return (
        <div className="employees">
            <h1>Employees</h1>
            {
                employees.map(emp => {
                    const location = locations.find(loc => loc.id === emp.locationId)
                    return <Employee key={emp.id} employee={emp} location={location}/>
                }
                )
            }
            <button onClick={() => props.history.push("/employees/create")}>Add employee</button>
        </div>
    )
}
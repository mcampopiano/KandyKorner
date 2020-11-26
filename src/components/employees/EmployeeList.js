import React, {useContext, useEffect} from "react"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = (props) => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>Add employee</button>
            {
                employees.map(emp => <Employee key={emp.id} employee={emp} />)
            }
        </div>
    )
}
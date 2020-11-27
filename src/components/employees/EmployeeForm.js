import React, { useContext, useRef, useEffect } from "react"
import "./Employee.css"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"

export const EmployeeForm = (props) => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)


    const name = useRef(null)
    const location = useRef(null)
    const pay = useRef(null)
    const ft = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])

    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)
        const payRate = parseInt(pay.current.value)
        let fullTime = ""
        if (ft.current.value === "true") {
            fullTime = true
        } else {
            fullTime = false
        }
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: name.current.value,
                locationId,
                payRate,
                fullTime
            })
                .then(() => props.history.push("/employees"))
        }
    }
    return (
        <form className="employeeForm">
            <h2 className="employeeForm_title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name:</label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeePay">Hourly pay rate:</label>
                    <input type="text" id="employeePay" ref={pay} required autoFocus className="form-control" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeStatus">Employment status:</label>
                    <select defaultValue="" name="fullTime" ref={ft} id="employmentStatus" className="form-control">
                        <option value="0">Select employment status</option>
                        <option value="true">Full time</option>
                        <option value="false">Part time</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign a location</label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control">
                        <option value="0">Select a location</option>
                        {locations.map(event => (
                            <option key={event.id} value={event.id}>
                                {event.address}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit" onClick={event => {
                event.preventDefault()
                constructNewEmployee()
                console.log(name.current.value)
                props.history.push("/employees")
            }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}
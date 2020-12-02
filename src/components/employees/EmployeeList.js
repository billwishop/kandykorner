import React, { useContext, useEffect } from "react"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import {Link} from "react-router-dom"

export const EmployeeList = props => {
    const {employees, getEmployees} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getLocations()
            .then(getEmployees)
    }, [])

    return (
        <div>
            <h2>Employees</h2>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <div className="employees">
                {
                    employees.map(employee => {
                        const location = locations.find(loc => loc.id === employee.locationId)
                        return <Employee key={employee.id} employee={employee} location={location}/>
                    }
                    )
                }
            </div>
        </div>
    )
}
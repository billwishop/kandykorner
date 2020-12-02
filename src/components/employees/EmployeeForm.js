import React, { useContext, useRef, useEffect } from "react"
import {EmployeeContext} from "./EmployeeProvider"
import {LocationContext} from "../locations/LocationProvider"
import "./Employee.css"

export const EmployeeForm = props => {
    const {addEmployee} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)
    const manager = useRef(null)
    const fullTime = useRef(null)
    const hourlyRate = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])

    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)
        
        addEmployee({
            name: name.current.value,
            locationId,
            manager: JSON.parse(manager.current.value),
            fullTime: JSON.parse(fullTime.current.value),
            hourlyRate: parseInt(hourlyRate.current.value)
        })
        .then(() => props.history.push("/employees"))
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name:</label>
                    <input type="text" id="employeeName" ref={name} required autofocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Location:</label>
                    <select defaultValue="" name="location" ref={location}>
                        <option value="0">Select a location</option>
                        {locations.map(loc =>{
                            return <option key={loc.id} value={loc.id}>{loc.name}</option>
                        })}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager" className="manager">Position:</label>
                    <select defaultValue="" name="manager" ref={manager}>
                        <option value="true">Manager</option>
                        <option value="false">Individual Contributor</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime" className="FullTime">Hours:</label>
                    <select defaultValue="" name="FullTime" ref={fullTime}>
                        <option value="true">Full Time</option>
                        <option value="false">Part Time</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">hourlyRate</label>
                    <input type="text" id="hourlyRate" ref={hourlyRate} required autofocus className="form-control" placeholder="Hourly Rate" />
                </div>
            </fieldset>
            <button type="submit" onClick={event =>{
                event.preventDefault()
                constructNewEmployee()
            }}>
                Submit
            </button>

        </form>
    )

}


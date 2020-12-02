import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location }) => {

    let mgr =""
    if (employee.manager === true) {
        mgr = "Manager"
    } else {
        mgr = "Individual Contributor" 
    }

    let time = ""
    if (employee.fullTime === true) {
        time = "Full Time"
    } else {
        time = "Part Time"
    }

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">{location.name}</div>
            <div className="employee__manager">{mgr}</div>
            <div className="employee__fullTime">{time}</div>
            <div className="employee__hourlyRate">${employee.hourlyRate}/hr</div>
        </section>
    )   
}
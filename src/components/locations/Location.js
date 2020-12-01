import React from "react"
import "./Location.css"

export const Location = ({ location }) => {
    return  (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <div className="location__squareFootage">Square Footage: {location.squareFootage}</div>
        <div className="location__handicapAccessible">Handicap Accessible: {location.handicapAccessible}</div>
    </section>)
}
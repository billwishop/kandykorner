import React from "react"
import "./Location.css"

export const Location = ({ location }) => {
    let hA = ""
    if (location.handicapAccessible === true) {
        hA = "This location is handicap accessible"
    } else {
        hA = "This location is not handicap accessible"
    }
    return  (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <div className="location__squareFootage">Square Footage: {location.squareFootage}</div>
        <div className="location__handicapAccessible">{hA}</div>
    </section>)
}
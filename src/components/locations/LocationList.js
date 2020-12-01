import React, { useContext, useEffect } from "react"
import { Location } from "./Location"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="locations">
            {
                locations.map(loc => <Location key={loc.id} location={loc} />)
            }
        </div>
    )
}
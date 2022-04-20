import React from "react"

import Header from "./Header"
import data from "./data"
import Location from "./Location"
import {IoLocationSharp} from "react-icons/io5"

export default function App(){

    const locations = data.map((item,index)=>{
        return (

            <Location 
                key = {index}
                imageUrl={item.imageUrl} 
                location = {item.location}
                googleMapsUrl ={item.googleMapsUrl}
                title = {item.title}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description} />

        )
    })
    console.log(locations.length)

    return (
        <div className="app-header">
            <Header />
            {locations}
        </div>
    )
}
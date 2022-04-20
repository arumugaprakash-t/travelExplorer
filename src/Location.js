import React from "react"

import {IoLocationSharp} from "react-icons/io5"

export default function Location(props){


    return (

        <div className="location">

            <img className="location-img" src={props.imageUrl}/>
           <div className="location-content">
            
                <div className="location-map">
                    <IoLocationSharp className="location-icon" height="20px"/>
                    <p className="location-name">{props.location}</p>
                    <a className="location-loc" href={props.googleMapsUrl} target="_blank">View on Google Map</a>
                </div>
                
                <div className="location-text">
                    <h1 className="location-title">{props.title}</h1>
                    
                    <div className="location-date">

                        <p>{props.startDate} - {props.endDate}</p>

                    </div>
                    <p className="location-description">{props.description}</p>
                    </div>

                </div>
            

        </div>


    )


}
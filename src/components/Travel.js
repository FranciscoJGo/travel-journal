import React from "react"

export default function Travel(props){
    /*console.log(props)*/
    return(
        <div className="card">
            <img className="card-img" src={props.item.imageUrl} />
            <div className="card-description">
                <div className="card-description-location">
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} target="_blank" >View on Google Maps</a> 
                </div>
                <h1 className="card-title">{props.item.title}</h1>
                <div className="card-description-date">
                    <p>{props.item.startDate}</p>
                    <p>{props.item.endDate}</p>
                </div>
                <p className="card-text">{props.item.description}</p>
            </div>
        </div>
    )
}

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
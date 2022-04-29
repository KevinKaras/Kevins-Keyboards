import React from "react";

import "./CSS/ItemListing.css"


function ItemListing(props){

    console.log("THESE ARE LISTING PROPS", props)

    return (

        <div className="Item-Container">
            <div className="Item-Title-Container">
                <div className="Item-Title">{props.Item.Name}</div>
            </div>
            <div className="Item-Image-Container">
                <img className="Item-Image" src={props.Item.Image} alt="404" />
            </div>
            <div className="Item-Description-Container">
                <div className="Item-Description">{props.Item.Description}</div>
            </div>
            <div className="Item-Price-Container">
                <div className="Item-Price">{props.Item.Price}</div>
            </div>
        </div>

    )

}


export default ItemListing
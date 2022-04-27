import React from "react";
import { useSelector } from "react-redux";
import ItemListing from "./ItemListing.js"


function Explore(){
    const listings = useSelector(state => state.Shelf)

    console.log(listings[0])

    return (

        <div className="Explore-Component">
            <div className="Explore-Header">
                <div className="Explore-Title">
                    Explore
                </div>
            </div>
            <ItemListing Item={listings[0]} />
        </div>

    )
}

export default Explore
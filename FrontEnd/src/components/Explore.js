import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemListing from "./ItemListing.js"


import "./CSS/Explore.css"

function Explore(){
    const listings = useSelector(state => state.Shelf)
    const [listingComponents, setListingComponents] = useState('')






    useEffect(()=>{

        setListingComponents(Object.values(listings).map((listing, index)=>{
            return (
                <ItemListing Item={listing} key={index} />
            )
        }))
    }, [])

    return (

        <div className="Explore-Component">
            <div className="Explore-Header">
                <div className="Explore-Title">
                    Explore Our Most Popular Products
                </div>
                <div className="Horizontal-Rule"></div>
            </div>
            <div className="Explore-Section-Container">
                <div className="Explore-Section-Content">{listingComponents}</div>
            </div>
        </div>

    )
}

export default Explore
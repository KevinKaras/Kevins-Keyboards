import React from "react";
import { useDispatch, useSelector } from "react-redux"

import "./CSS/BannerListing.css"



function BannerListing(){

    const Listing = useSelector(state => state.Shelf[0])

    return (

        <div className="Banner-Container">
            <div className="Banner-Container-Component">
                <div className="Banner-Left-Side">
                    <div className="Banner-Image-Carosel">
                        <img className="Banner-Image-1" src={Listing.Image}></img>
                        {/* <img className="Banner-Image-2"></img>
                        <img className="Banner-Image-3"></img>
                        <img className="Banner-Image-4"></img>
                        <img className="Banner-Image-5"></img> */}
                    </div>
                    <div className="Radio-Button-Group">
                        {/* <radio className="Radio-Button">.</radio>
                        <radio className="Radio-Button">.</radio>
                        <radio className="Radio-Button">.</radio>
                        <radio className="Radio-Button">.</radio>
                        <radio className="Radio-Button">.</radio> */}
                    </div>
                    
                </div>
                <div className="Banner-Right-Side">
                    <div className="Listing-Name-Container">
                        <div className="Listing-Name">The V3 Mechanical Keyboard</div>
                    </div>
                    <div className="Listing-Description-Container">
                        <div className="Listing-Description">Made just the way you want it</div>
                    </div>
                    <div className="Listing-Price-Container">
                        <button className="Add-Banner-To-Cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default BannerListing
import React from "react";

import "./CSS/Banner.css"


function Banner(){



    
    return (
        <div className="Banner-Container">
            <div className="Banner-Container-Component">
                <div className="Banner-Left-Side">
                    <div className="Banner-Image-Carosel">
                        <img className="Banner-Image-1"></img>
                        {/* <img className="Banner-Image-2"></img>
                        <img className="Banner-Image-3"></img>
                        <img className="Banner-Image-4"></img>
                        <img className="Banner-Image-5"></img> */}
                    </div>
                    <div className="Radio-Button-Group">
                        <radio className="Radio-Button">.</radio>
                        <radio className="Radio-Button">.</radio>
                        <radio className="Radio-Button">.</radio>
                        <radio className="Radio-Button">.</radio>
                        <radio className="Radio-Button">.</radio>
                    </div>
                    
                </div>
                <div className="Banner-Right-Side">
                    {/* ITEM DETAIL COMPONENT */}
                </div>
            </div>
                
        </div>
    )
}

export default Banner
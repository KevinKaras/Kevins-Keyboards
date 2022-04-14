import React from "react";
import Search from "./Search.js"

function NavBar(){




    return (
        <div className="NavBarDiv">
            <div className="Search-Bar-Container">
                <Search className="Search-Bar"/>
            </div>
            <div className="Icon-Container">
                <img className="Site-Logo"></img>
            </div>



        </div>
        

    )
}

export default NavBar
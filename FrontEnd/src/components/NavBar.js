import React from "react";
import Search from "./Search.js"

function NavBar(){




    return (
        <div className="NavBarDiv">
            <div className="Icon-Container">
                <img className="Site-Logo"></img>
                <div className="Title-Container">
                    <div className="Title">Kevin's Keyboards</div>
                </div>
            </div>
            <div className="Search-Bar-Container">
                <Search className="Search-Bar"/>
            </div>
            <div className="Button-Container">
                <button className="Shop-Button">Shop</button>
                <button className="Discover-Button">Discover</button>
                <button className="Login-Button">Login</button>
                <button className="My-Cart-Button">My Cart</button>
                <button className="Support-Button">Support</button>
            </div>


        </div>
        

    )
}

export default NavBar
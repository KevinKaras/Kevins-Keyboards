import React from "react";
import Search from "./Search.js"
import "./CSS/NavBar.css"
function NavBar(){




    return (
        <div className="Nav-Bar-Div">
            <div className="Left-Nav-Side">
                <div className="Icon-Container">
                    <img className="Site-Logo"></img>
                </div>
                <div className="Title-Container">
                    <div className="Title">Kevin's Keyboards</div>
                </div>
                <div className="Search-Bar-Container">
                    <Search className="Search-Bar"/>
                </div>
            </div>
            <div className="Right-Nav-Side">
                <div className="Button-Container">
                    <button className="Shop-Button">Shop</button>
                    <button className="Discover-Button">Discover</button>
                    <button className="Login-Button">Login</button>
                    <button className="My-Cart-Button">My Cart</button>
                    <button className="Support-Button">Support</button>
                </div>
            </div>

        </div>
        

    )
}

export default NavBar
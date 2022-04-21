import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import NavBar from "./components/NavBar.js"
import BannerListing from "./components/BannerListing.js"



function App(){

    return (
        <>
            <NavBar />  
            <Router>
                <Routes>
                    <Route path="">

                    </Route>
                    <Route>
                        
                    </Route>
                    <Route>
                        
                    </Route>
                    <Route>
                        
                    </Route>
                </Routes>
            </Router>
            <BannerListing />
        </>
        
    )
}

export default App

import React from "react";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import "../styles/dash.css";
const DashDonor = (props) => {
    return (
        <div id="body-container">
            <Navbar/>
            <div className="lateral">
                <div className="infobox">
                    <div className="searchbar">
                        <Search text={"Procurar Doação"}/>
                    </div>
          
                    <span className="text">
                        Minhas Doações
                    </span>

                    <div className="bar-divider"></div>

                </div>

            </div>
            <div className="dashBody">
                    <div className="bodybox">
                        <div className="searchbar">
                            <Search text={"Procure uma ONG"}/>
                        </div>
                        <br></br>
                        <div className="bar-divider-body"></div>
                    </div>
            </div>
	    </div>
    );

};
    export default DashDonor;
import React from "react";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import "../styles/dash.css";
import placehdfr from "../assets/ong-ubuntu-brasilia.jpg"
const DashDonor = (props) => {
    function returnlist(item){
        return(
            <li>
                {item}
            </li>
        );
    };
    const array=[{
        name: "Santuario dos gnomos",
        image: {placehdfr},
        need: ["roupas","cobertores","Toalhas"]

    },{
        name: "Santuario dos gnomos",
        image: "imagem",
        need: ["roupas","cobertores","Toalhas"]

    },{
        name: "Santuario dos gnomos",
        image: "imagem",
        need: ["roupas","cobertores","Toalhas"]

    }];
    
    const ongbox = array.map((element) =>
        <div className="ong-box col-md-12">
            <div className="col-md-3">
                <img src={element.image} className="box-image" />
            </div>
            <div className="col-md-9">
                <span className="ong-title">
                    {element.name}
                </span>
                <div className="bar-divider-box"/>
                Precisamos de:
                <ul>
                    {element.need.forEach(returnlist)}
                </ul>
                
            </div>
        </div>
    );
    
  
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
                        <div>
                                {ongbox}
                        </div>
                    </div>
            </div>
	    </div>
    );

};
    export default DashDonor;
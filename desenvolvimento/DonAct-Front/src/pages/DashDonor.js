import React from "react";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "../styles/dash.css";


function List(props) {
    const itens = props.itens;
    const listItems = itens.map((item) =>
      <li>{item}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
const DashDonor = (props) => {    
    const array=[{
        name: "Santuario dos gnomos",
        image: "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        need: ["roupas","cobertores","Toalhas"]

    },{
        name: "Santuario dos abacates",
        image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        need: ["roupas","cobertores","Toalhas"]

    },{
        name: "Santuario dos mamãos",
        image: "data:image/jpeg;base64,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",
        need: ["roupas","cobertores","Toalhas"]

    }];
    
    const ongbox = array.map((element) =>
        <div className="ong-box col-md-12">
            <div className="col-md-3">
                <img src={element.image} className="box-image" />
            </div>
            <div className="col-md-9 contents">
                <span className="ong-title">
                    {element.name}
                </span>
                <div className="bar-divider-box"/>
                <div className="itensList">
                    Precisamos de:
                    <List itens={element.need} />
                </div>
                <div>
                    <Button text={"Doar"}></Button>
                </div>
            </div>
        </div>
    );
    
  
    return (
        <div>
            <Navbar/>
            <div id="body-container">
                <div className="lateral">
                    <div className="infobox">
            
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
                            <div className="OngElements">
                                    {ongbox}
                            </div>
                        </div>
                </div>

            </div>
        </div>
    );

};
    export default DashDonor;
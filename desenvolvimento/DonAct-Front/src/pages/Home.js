import React from "react";
import HeaderSimple from "../components/HeaderSimple";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = (props) => {
    return (
        <div id="body-container">
            <Navbar/>
            <HeaderSimple></HeaderSimple>
            <div id="footer">
            <Footer></Footer>
            </div>
	    </div>
    );

};
    export default Home;


import {Link } from "react-router-dom";
import donation from "/home/julia/Desktop/2022.1_G2_DonAct/desenvolvimento/DonAct-Front/src/assets/headrimg.jpg"
import heart from "/home/julia/Desktop/2022.1_G2_DonAct/desenvolvimento/DonAct-Front/src/assets/heart.png"
import bubbles from "/home/julia/Desktop/2022.1_G2_DonAct/desenvolvimento/DonAct-Front/src/assets/bubbles.png"
import Button from "../Button"
const Header = (props) => {
  return (
    <div className = "header">
      <div className=" headerImg">
        <img className=" donationimg" src={donation}  alt = "" />
      </div>

          <div className="prospection text-start">
              <img className="heartimg" src={heart}  alt = "" />
                <p className="text-home">
                  <span>
                    Encontre uma ONG!

                  </span>
                  <span>
                    Ajude quem precisa!
                  </span>
                </p>
            <div className="btn-singup">
              <Link to="/choice">
                <Button text="Cadastre-se"></Button>
              </Link>
            </div>
              <img className="bubblesimg" src={bubbles}  alt = "" />
          </div>
    </div>
  );
};

export default Header;

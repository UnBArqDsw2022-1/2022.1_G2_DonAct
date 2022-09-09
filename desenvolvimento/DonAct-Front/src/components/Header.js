import "../styles/header.css"
import donation from "../assets/headrimg.jpg"
import heart from "../assets/heart.png"
import bubbles from "../assets/bubbles.png"
import Button from "./Button"
const Header = (props) => {
  return (
    <div className = "header">
      <div className=" headerImg">
        <img className=" donationimg" src={donation} />
      </div>

          <div className="prospection text-start">
              <img className="heartimg" src={heart}/>
                <p className="text-home">
                  <span>
                    Encontre uma ONG!

                  </span>
                  <span>
                    Ajude quem precisa!
                  </span>
                </p>
            <div className="btn-singup">
              <Button text="Cadastre-se"></Button>
            </div>
              <img className="bubblesimg" src={bubbles}/>
          </div>
    </div>
  );
};

export default Header;

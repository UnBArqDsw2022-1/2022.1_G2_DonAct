import React from "react";
import {Link } from "react-router-dom";
import "../styles/choice.css";
import Logo from "../assets/logo.svg";

const Choice = () => (
  <div className="outer">

    <div className="inner inner-choice">
      <div className="form">
        <div className="form-begin-choice">
          <div className="form-title">
            <img className="form-image" src={Logo} alt="Donact"></img>
          </div>
          <div className="form-title">
            <h2 className="h2-choice">Como você gostaria de ajudar hoje?</h2>
          </div>
          <br />
          <br />
          <br />
          <div className="btn-duo">
            <div className="btn-tag ">
              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block btn-primary btn-choice"
              >
                Cadastrar ONG
              </button>
            </div>
            <div className="btn-tag">
              <div class="vl"></div>
            </div>
            <div className="btn-tag ">
            <Link to="/donor">
              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block btn-primary btn-choice"
              >
                Sou um Doador
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Choice;

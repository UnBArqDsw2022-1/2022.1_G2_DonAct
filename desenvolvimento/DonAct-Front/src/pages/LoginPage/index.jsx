import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./styles.css";

const Login = () => (
  <div className="inner inner-login">
    <div className="form">
      <form>
        <div className="form-title">
          <h2>
            <img className="form-image" src={Logo} alt="Donact"></img>
          </h2>
        </div>

        <div className="form-begin">
          <div className="form-group">
            <Input
              classLabel="label-login"
              text="CPF ou CNPJ"
              type="text"
              placeholder="CPF ou CNPJ"
              classInput="form-control"
            />
          </div>

          <br />

          <div className="form-group">
            <Input
              classLabel="label-login"
              text="Senha"
              type="password"
              placeholder="Insira sua senha"
              classInput="form-control"
            />
          </div>

          <p className="forgot-password text-right">
            <a href="http://google.com">esqueceu a senha?</a>
          </p>
        </div>

        <div className="form-btn center justify-content-center">
          <Button text="Entrar" />
        </div>

      </form>

      <p className="register-text text-center ">
        não possui conta? <Link to="/choice">clique aqui</Link>
      </p>
    </div>
  </div>
);

export default Login;

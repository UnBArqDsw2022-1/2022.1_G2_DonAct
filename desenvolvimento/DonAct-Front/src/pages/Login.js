import React, { Component } from "react";
import "../styles/login.css"
import Logo from "../assets/logo.svg";

export default class Login extends Component {
    render() {
        return (
            
            <div className="inner inner-login">
                <div className="form">
                    <form>
                        <div className="form-title">
                            <h2>
                                <img className="form-image" src={Logo} alt = "Donact"></img>
                            </h2>
                        </div>
                        <div className="form-begin">
                            <div className="form-group">
                                <label className="label-login"> CPF ou CNPJ</label>
                                <input type="text" className="form-control" placeholder="CPF ou CNPJ" />
                            </div>
                            <br/>
                            <div className="form-group">
                                <label className="label-login"> Senha </label>
                                <input type="password" className="form-control" placeholder="Insira sua senha" />
                            </div>                
                            <p className="forgot-password text-right">
                                <a href="http://google.com">esqueceu a senha?</a>
                            </p>
                        </div>
                        <div className="form-btn center justify-content-center">
                            <button type="submit" className="btn btn-dark btn-lg btn-block btn-primary">Entrar</button>
                        </div>
                    </form>
                    <p className="register-text text-center ">
                        não possui conta? <a href="/choice">clique aqui</a>
                    </p>
                </div>
            </div>
        );
    }
}
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "../styles/dash.css";
import "../components/Modal";
import Modal from "../components/Modal";
import { handleAcoesONGAll, handleGetONGAll } from "../Api";

function List(props) {
  const itens = props.itens;
  const listItems = itens.map((item) => <li>{item}</li>);
  return <ul>{listItems}</ul>;
}

const DashDonor = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ongs, setOngs] = useState([]);
  const [social, setSocial] = useState([]);

  useEffect(() => {
    const getOngs = async () => {
      const ongs = await handleGetONGAll();
      console.log(ongs);
      setOngs(ongs);
    };
    getOngs();

    const getAcoes = async () => {
      const acoes = await handleAcoesONGAll();
      console.log(acoes);
      setSocial(acoes);
    };
    getAcoes();
  }, []);

  const ongbox =
    ongs &&
    ongs.map((element) => (
      <div className="ong-box col-md-12">
        <div className="col-md-9 contents">
          <span className="ong-title">{element.nome}</span>
          <div className="bar-divider-box" />
          <div className="itensList row">
            Ações sociais:
            <div className="d-flex justify-content-between">
              {social
                .filter((a) => a.ongCnpj == element.cnpj)
                .map((acao) => (
                  <div>* {acao.objetivo}</div>
                ))}
            </div>
          </div>
          <div className="pt-3">
            <Button className="nextButton" onClick={handleShow} text="Doar" />

            <Modal show={show} handleClose={handleClose} />
          </div>
        </div>
      </div>
    ));

  return (
    <div>
      <Navbar />
      <div id="body-container">
        <div className="lateral">
          <div className="infobox">
            <span className="text">Minhas Doações</span>

            <div className="bar-divider"></div>
          </div>
        </div>
        <div className="dashBody">
          <div className="bodybox">
            <div className="searchbar">
              <Search text={"Procure uma ONG"} />
            </div>
            <br></br>
            <div className="bar-divider-body"></div>
            <div className="OngElements">{ongbox}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashDonor;

import React from "react";
import "./cadastroOng.css";
import logo from '../assets/logo_escura.png'

const CadastroOng = (props) => {
    return (
        
        <div id="CadastroOng-container" >
             <img id="logo" src={logo}/>
             <div id="inserts-container">
                <form id="inserts-left">
                <div id="Ong-CNPJ">
                <label>Nome da ONG<em class="required">*</em><input type="text" /></label>
                <label id="cnpj">CNPJ<em class="required">*</em><input type="text" /></label>
                </div>
                <div id="Phone-Mail">
                 <label>Telefone<em class="required">*</em><input type="text"/></label>
                <label id="mail">E-mail<em class="required">*</em><input type="text"/></label>
                </div>
                <div id="respon">
                <label> Nome do Responsável<em class="required">*</em><input type="text"/></label>
                <label id="mail-resp"> E-mail do Responsável<em class="required">*</em><input type="text"/></label>
                </div>
                <label>Endereço<em class="required">*</em><input id="adress" type="text"/></label>
                <div id="city-state">
                <label>Cidade<em class="required">*</em><input id="city"type="text"/></label>
                <label id="state">Estado<em class="required">*</em><input id="state" type="text"/></label>
                <label id="cep">CEP<em class="required">*</em><input id="cep" type="text"/></label>
                </div>
                <label>Senha<em class="required">*</em><input type="password"/></label>
                <label>Confirme sua senha<em class="required">*</em><input type="password"/></label> 
                <label>Campos Obrigatórios<em class="required">*</em></label>
                <button type="submit" value="">Cadastrar</button>
                <p>Ao se cadastrar você concorda com o Termo de Uso e a Política de Privacidade do Donact</p>
      </form>  
      
             </div>
	    </div>
    );

};
    export default CadastroOng;


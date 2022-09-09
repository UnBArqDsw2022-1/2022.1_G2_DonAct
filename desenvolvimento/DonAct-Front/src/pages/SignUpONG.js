import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useFormik } from "formik";

import Logo from "../assets/logo.svg";
import Arrow from "../assets/arrow.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import validateSchema from "../hooks/validateSchemaONG";
import { handlePostONG } from "../Api";

import "../styles/choice.css";
import "../styles/donor.css";

const SignUpONG = () => {
  const formik = useFormik({
    initialValues: {
      nomeDoResponsavel: "",
      nome: "",
      cnpj: "",
      telefone: "",
      email: "",
      emailDoResponsavel: "",
      cep: "",
      cidade: "",
      estado: "",
      endereco: "",
      senha: "",
      senha2: "",
    },
    validationSchema: validateSchema(),
    onSubmit: (values) => {
      // console.log(values);
      handlePostONG(values);
    },
  });

  return (
    <>
      <div className="outer">
        <div>
          <Link to="/choice">
            <a href="">
              <img className="arrow" src={Arrow} alt=""></img>
            </a>
          </Link>
        </div>
        <div className="inner inner-choice ">
          <div className="form">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-begin-donor">
                <div className="form-title">
                  <img
                    className="form-image-donor"
                    src={Logo}
                    alt="Donact"
                  ></img>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <Input
                        required
                        classLabel="label-login"
                        text="Nome da ONG"
                        type="text"
                        classInput="form-control"
                        id="nome"
                        name="nome"
                        placeholder="Digite o nome da ONG"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.nome}
                      />
                      {formik.touched.nome && formik.errors.nome ? (
                        <div className="error">{formik.errors.nome}</div>
                      ) : null}
                    </div>
                    <div className="col-md-6">
                      <Input
                        required
                        classLabel="label-login"
                        text="CNPJ"
                        type="text"
                        classInput="form-control"
                        id="cnpj"
                        name="cnpj"
                        placeholder="Somente dígitos"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.cnpj}
                      />
                      {formik.touched.cnpj && formik.errors.cnpj ? (
                        <div className="error">{formik.errors.cnpj}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Input
                        required
                        classLabel="label-login"
                        text="Telefone"
                        type="text"
                        classInput="form-control"
                        id="telefone"
                        name="telefone"
                        placeholder="(XX) XXXXX-XXXX"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.telefone}
                      />
                      {formik.touched.telefone && formik.errors.telefone ? (
                        <div className="error">{formik.errors.telefone}</div>
                      ) : null}
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <Input
                          required
                          classLabel="label-login"
                          text="E-mail Responsável"
                          type="text"
                          classInput="form-control"
                          id="emailDoResponsavel"
                          name="emailDoResponsavel"
                          placeholder="Digite o e-mail do responsável"
                          handleChange={formik.handleChange}
                          handleBlur={formik.handleBlur}
                          value={formik.values.emailDoResponsavel}
                        />
                        {formik.touched.emailDoResponsavel &&
                          formik.errors.emailDoResponsavel ? (
                          <div className="error">
                            {formik.errors.emailDoResponsavel}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <Input
                          required
                          classLabel="label-login"
                          text="Nome do Responsável"
                          type="text"
                          classInput="form-control"
                          id="nomeDoResponsavel"
                          name="nomeDoResponsavel"
                          placeholder="Digite o nome do responsável"
                          handleChange={formik.handleChange}
                          handleBlur={formik.handleBlur}
                          value={formik.values.nomeDoResponsavel}
                        />
                        {formik.touched.nomeDoResponsavel &&
                          formik.errors.nomeDoResponsavel ? (
                          <div className="error">
                            {formik.errors.nomeDoResponsavel}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <Input
                        required
                        classLabel="label-login"
                        text="E-mail da Instituição"
                        type="text"
                        classInput="form-control"
                        id="email"
                        name="email"
                        placeholder="Digite o e-mail da instituição"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Input
                        required
                        classLabel="label-login"
                        text="CEP"
                        type="text"
                        classInput="form-control"
                        id="cep"
                        name="cep"
                        placeholder="Somente números"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.cep}
                      />
                      {formik.touched.cep && formik.errors.cep ? (
                        <div className="error">{formik.errors.cep}</div>
                      ) : null}
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <Input
                            required
                            classLabel="label-login"
                            text="Cidade"
                            type="text"
                            classInput="form-control"
                            id="cidade"
                            name="cidade"
                            handleChange={formik.handleChange}
                            handleBlur={formik.handleBlur}
                            value={formik.values.cidade}
                          />
                          {formik.touched.cidade && formik.errors.cidade ? (
                            <div className="error">{formik.errors.cidade}</div>
                          ) : null}
                        </div>
                        <div className="col-md-6">
                          <Input
                            required
                            classLabel="label-login"
                            text="Estado"
                            type="text"
                            classInput="form-control"
                            id="estado"
                            name="estado"
                            handleChange={formik.handleChange}
                            handleBlur={formik.handleBlur}
                            value={formik.values.estado}
                          />
                          {formik.touched.estado && formik.errors.estado ? (
                            <div className="error">{formik.errors.estado}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Input
                    required
                    classLabel="label-login"
                    text="Endereço"
                    type="text"
                    classInput="form-control"
                    id="endereco"
                    name="endereco"
                    placeholder="Digite o endereço da instituição"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    value={formik.values.endereco}
                  />
                  {formik.touched.endereco && formik.errors.endereco ? (
                    <div className="error">{formik.errors.endereco}</div>
                  ) : null}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="column">
                        <Input
                          required
                          classLabel="label-login"
                          text="Senha"
                          type="password"
                          classInput="form-control"
                          id="senha"
                          name="senha"
                          placeholder="Digite sua senha"
                          handleChange={formik.handleChange}
                          handleBlur={formik.handleBlur}
                          value={formik.values.senha}
                        />
                        {formik.touched.senha && formik.errors.senha ? (
                          <div className="error">{formik.errors.senha}</div>
                        ) : null}
                        <Input
                          required
                          classLabel="label-login"
                          text="Confirme sua senha"
                          type="password"
                          classInput="form-control"
                          id="senha2"
                          name="senha2"
                          placeholder="Confirme sua senha"
                          handleChange={formik.handleChange}
                          handleBlur={formik.handleBlur}
                          value={formik.values.senha2}
                        />
                        {formik.touched.senha2 && formik.errors.senha2 ? (
                          <div className="error">{formik.errors.senha2}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-button">
                      <div className="column button-signup">
                        <p className="text">
                          Ao se cadastrar você concorda com o Termo de Uso e a
                          Política de Privacidade do Donact
                        </p>
                        <Button text="Cadastrar" />
                      </div>
                    </div>
                    <div className="label-login">* Campos obrigatórios</div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpONG;

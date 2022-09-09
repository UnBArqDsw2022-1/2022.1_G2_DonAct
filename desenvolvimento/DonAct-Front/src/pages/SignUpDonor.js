import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useFormik } from "formik";

import Logo from "../assets/logo.svg";
import Arrow from "../assets/arrow.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import validateSchema from "../hooks/validateSchema";
import { handlePostDoador } from "../Api";

import "../styles/choice.css";
import "../styles/donor.css";

const SignUpDonor = () => {
  const formik = useFormik({
    initialValues: {
      nome: "",
      cpf: "",
      dataNascimento: "",
      telefone: "",
      email: "",
      cidade: "",
      estado: "",
      endereco: "",
      senha: "",
      senha2: "",
    },
    validationSchema: validateSchema(),
    onSubmit: (values) => {
      handlePostDoador(values);
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
                        text="Nome completo"
                        type="text"
                        classInput="form-control"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome completo"
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
                        text="CPF"
                        type="text"
                        classInput="form-control"
                        id="cpf"
                        name="cpf"
                        placeholder="Somente números"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.cpf}
                      />
                      {formik.touched.cpf && formik.errors.cpf ? (
                        <div className="error">{formik.errors.cpf}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Input
                        required
                        classLabel="label-login"
                        text="Data de nascimento"
                        type="text"
                        classInput="form-control"
                        id="dataNascimento"
                        name="dataNascimento"
                        placeholder="XX/XX/XXXX"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.dataNascimento}
                      />
                      {formik.touched.dataNascimento &&
                      formik.errors.dataNascimento ? (
                        <div className="error">
                          {formik.errors.dataNascimento}
                        </div>
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
                        placeholder="XX XXXXX XXXX"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.telefone}
                      />
                      {formik.touched.telefone && formik.errors.telefone ? (
                        <div className="error">{formik.errors.telefone}</div>
                      ) : null}
                    </div>
                    <div className="col-md-6">
                      <Input
                        required
                        classLabel="label-login"
                        text="Email"
                        type="text"
                        classInput="form-control"
                        id="email"
                        name="email"
                        placeholder="Digite seu email"
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

                  <Input
                    required
                    classLabel="label-login"
                    text="Endereço"
                    type="text"
                    classInput="form-control"
                    id="endereco"
                    name="endereco"
                    placeholder="Digite seu endereço"
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

export default SignUpDonor;

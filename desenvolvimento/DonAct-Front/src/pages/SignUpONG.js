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
    
  const SignUpONG = () => {
    const formik = useFormik({
      initialValues: {
        nomeOng: "",
        cnpj: "",
        telefoneOng: "",
        emailOng: "",
        emailResponsavel: "",
        cepOng: "",
        cidadeOng: "",
        ufOng: "",
        enderecoOng: "",
        senhaOng: "",
        confirmacaoSenha: "",
      },
      validationSchema: validateSchema(),
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
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
                <img className="form-image-donor" src={Logo} alt="Donact"></img>
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
                      id="nomeOng"
                      name="nomeOng"
                      placeholder="Digite o nome da ONG"
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      value={formik.values.nomeOng}
                      />
                    {formik.touched.nomeOng && formik.errors.nomeOng ? (
                      <div className="error">{formik.errors.nomeOng}</div>
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
                      id="telefoneOng"
                      name="telefoneOng"
                      placeholder="(XX) XXXXX-XXXX"
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      value={formik.values.telefoneOng}
                      />
                    {formik.touched.telefoneOng && formik.errors.telefoneOng ? (
                      <div className="error">{formik.errors.telefoneOng}</div>
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
                      id="emailResponsavel"
                      name="emailResponsavel"
                      placeholder="Digite o e-mail do responsável"
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      value={formik.values.emailResponsavel}
                      />
                    {formik.touched.emailResponsavel && formik.errors.emailResponsavel ? (
                      <div className="error">{formik.errors.emailResponsavel}</div>
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
                      id="emailOng"
                      name="emailOng"
                      placeholder="Digite o e-mail da instituição"
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      value={formik.values.emailOng}
                      />
                    {formik.touched.emailOng && formik.errors.emailOng ? (
                      <div className="error">{formik.errors.emailOng}</div>
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
                      id="cepOng"
                      name="cepOng"
                      placeholder="Somente números"
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      value={formik.values.cepOng}
                      />
                    {formik.touched.cepOng && formik.errors.cepOng ? (
                      <div className="error">{formik.errors.cepOng}</div>
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
                          id="cidadeOng"
                          name="cidadeOng"
                          handleChange={formik.handleChange}
                          handleBlur={formik.handleBlur}
                          value={formik.values.cidadeOng}
                          />
                        {formik.touched.cidadeOng && formik.errors.cidadeOng ? (
                          <div className="error">{formik.errors.cidadeOng}</div>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <Input
                          required
                          classLabel="label-login"
                          text="Estado"
                          type="text"
                          classInput="form-control"
                          id="ufOng"
                          name="ufOng"
                          handleChange={formik.handleChange}
                          handleBlur={formik.handleBlur}
                          value={formik.values.ufOng}
                          />
                        {formik.touched.ufOng && formik.errors.ufOng ? (
                          <div className="error">{formik.errors.ufOng}</div>
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
                  id="enderecoOng"
                  name="enderecoOng"
                  placeholder="Digite o endereço da instituição"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  value={formik.values.enderecoOng}
                  />
                {formik.touched.enderecoOng && formik.errors.enderecoOng ? (
                  <div className="error">{formik.errors.enderecoOng}</div>
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
                        id="senhaOng"
                        name="senhaOng"
                        placeholder="Digite sua senha"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.senhaOng}
                        />
                      {formik.touched.senhaOng && formik.errors.senhaOng ? (
                        <div className="error">{formik.errors.senhaOng}</div>
                        ) : null}
                      <Input
                        required
                        classLabel="label-login"
                        text="Confirme sua senha"
                        type="password"
                        classInput="form-control"
                        id="confirmacaoSenha"
                        name="confirmacaoSenha"
                        placeholder="Confirme sua senha"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.confirmacaoSenha}
                      />
                      {formik.touched.confirmacaoSenha && formik.errors.confirmacaoSenha? (
                        <div className="error">{formik.errors.confirmacaoSenha}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-button">
                    <div className="column button-signup">
                      <p className="text">
                        Ao se cadastrar você concorda com o Termo de Uso e a
                        Política de Privacidade do Donact
                      </p>
                      <Button text="Cadastrar" onClick={handlePostDoador(formik.values)}/>
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

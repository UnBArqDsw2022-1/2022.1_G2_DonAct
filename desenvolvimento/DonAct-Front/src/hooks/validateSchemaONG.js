import * as yup from "yup";

const validateSchema = (props) => {
  return yup.object({
    nome: yup
      .string()
      .matches(/^[a-z/A-Z ]+$/, "O nome deve possuir apenas letras.")
      .required("O campo é obrigatório."),
    nomeDoResponsavel: yup
      .string()
      .matches(/^[a-z/A-Z ]+$/, "O nome deve possuir apenas letras.")
      .required("O campo é obrigatório."),
    cnpj: yup
      .string()
      .matches(/^[0-9]+$/, "O CNPJ deve possuir apenas números.")
      .min(14, "O CNPJ deve ter 14 dígitos.")
      .max(14, "O CNPJ deve ter 14 dígitos.")
      .required("O campo é obrigatório."),
    telefone: yup
      .string()
      .matches(
        /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
        "O telefone deve possuir DDD."
      )
      .required("O campo é obrigatório."),
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("O campo é obrigatório."),
    emailDoResponsavel: yup
      .string()
      .email("E-mail inválido.")
      .required("O campo é obrigatório."),
    cidade: yup.string().required("O campo é obrigatório."),
    cep: yup
      .string()
      .matches(/^[0-9]+$/, "O CEP deve conter apenas números.")
      .min(8, "CEP incorreto.")
      .max(8, "CEP incorreto.")
      .required("O campo é obrigatório."),
    estado: yup
      .string()
      .matches(/^[a-z/A-Z]+$/, "O estado deve ser apenas a sigla.")
      .min(2, "O estado deve ser apenas a sigla.")
      .max(2, "O estado deve ser apenas a sigla.")
      .required("O campo é obrigatório."),
    endereco: yup.string().required("O campo é obrigatório."),
    senha: yup
      .string()
      .required("O campo é obrigatório.")
      .min(8, "A senha deve conter 8 ou mais caracteres."),
    senha2: yup
      .string()
      .oneOf([yup.ref("senha"), null], "As senhas devem ser iguais.")
      .required("O campo é obrigatório."),
  });
};

export default validateSchema;

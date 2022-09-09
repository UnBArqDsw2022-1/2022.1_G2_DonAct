import * as yup from "yup";

const validateSchema = (props) => {
  return yup.object({
    nome: yup
      .string()
      .matches(/^[a-z/A-Z ]+$/, "O nome deve possuir apenas letras.")
      .required("O campo é obrigatório."),
    cpf: yup
      .string()
      .matches(/^[0-9]+$/, "O CPF deve possuir apenas números.")
      .min(11, "O CPF deve ter 11 dígitos.")
      .max(11, "O CPF deve ter 11 dígitos.")
      .required("O campo é obrigatório."),
    dataNascimento: yup
      .string()
      .matches(
        "^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$",
        "A data deve estar no formato DD/MM/YYYY."
      )
      .required("O campo é obrigatório."),
    telefone: yup
      .string()
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
        "O telefone deve possuir DDD."
      )
      .min(11, "O telefone possuir apenas números.")
      .max(11, "O telefone possuir apenas números.")
      .required("O campo é obrigatório."),
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("O campo é obrigatório."),
    cidade: yup.string().required("O campo é obrigatório."),
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

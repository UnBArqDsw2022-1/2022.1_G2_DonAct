import * as yup from "yup";

const validateSchema = (props) => {
  return yup.object({
    nome: yup
      .string()
      .matches(/^[a-z/A-Z]+$/, "Formato incorreto.")
      .required("O campo é obrigatório."),
    cpf: yup
      .string()
      .matches(/^[0-9]+$/, "Formato incorreto.")
      .min(11, "CPF incorreto.")
      .max(11, "CPF incorreto.")
      .required("O campo é obrigatório."),
    dataN: yup
      .string()
      .matches(
        "^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$",
        "Formato incorreto."
      )
      .required("O campo é obrigatório."),
    telefone: yup
      .string()
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
        "Formato incorreto"
      )
      .required("O campo é obrigatório."),
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("O campo é obrigatório."),
    cep: yup
      .string()
      .matches(/^[0-9]+$/, "Formato incorreto.")
      .min(8, "CEP incorreto.")
      .max(8, "CEP incorreto.")
      .required("O campo é obrigatório."),
    cidade: yup
      .string()
      .matches(/^[a-z/A-Z]+$/, "Formato incorreto.")
      .required("O campo é obrigatório."),
    uf: yup
      .string()
      .matches(/^[a-z/A-Z]+$/, "Formato incorreto.")
      .required("O campo é obrigatório."),
    endereco: yup.string().required("O campo é obrigatório."),
    senha: yup
      .string()
      .required("O campo é obrigatório.")
      .min(8, "A senha deve conter 8 ou mais caracteres"),
    senha2: yup
      .string()
      .oneOf([yup.ref("senha"), null], "As senhas devem ser iguais.")
      .required("O campo é obrigatório."),
  });
};

export default validateSchema;

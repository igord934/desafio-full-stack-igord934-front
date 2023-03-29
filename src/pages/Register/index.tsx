import { Container, Form } from "./style";
import * as yup from "yup";
import { FieldValue, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinkButton as Link } from "../../style/Button";
import { Logo, Title } from "../../style/Typograph";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

interface iFormRegister {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  number: string;
}

function Register() {
  const { apiRegister } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha é obrigatório")
      .matches(/[A-Z]/, "Deve conter pelo menos uma letra maiuscula")
      .matches(/[a-z]/, "Deve conter pelo menos uma letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos um numero")
      .matches(/(\W)|_/, "Deve conter ao menos um carcter especial")
      .matches(/.{6,}/, "Deve conter no minimo 6 digitos"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas estão diferentes"),
    name: yup.string().required("Nome é obrigatório"),
    number: yup.string().required("Numero é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegister>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (dataForm: iFormRegister) => {
    await apiRegister(dataForm);
  };

  function objetoVazio(obj: object) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  return (
    <Container>
      <div className="header">
        <Logo>Kontatos</Logo>
        <Link to={"/login"}>Voltar</Link>
      </div>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <Title typeName="big">Registro</Title>
        <label>
          <span>Nome</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder="Digite seu nome..."
              {...register("name")}
            />
          </div>
          <p>{errors.name?.message}</p>
        </label>
        <label>
          <span>Numero</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder="Ex.: 987654321"
              {...register("number")}
            />
          </div>
          <p>{errors.number?.message}</p>
        </label>
        <label>
          <span>Email</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder="Ex.: exemple@mail.com"
              {...register("email")}
            />
          </div>
          <p>{errors.email?.message}</p>
        </label>
        <label>
          <span>Senha</span>
          <div className="containerForm">
            <input
              type="password"
              placeholder="Digite sua senha..."
              {...register("password")}
            />
          </div>
          <p>{errors.password?.message}</p>
        </label>
        <label>
          <span>Confirmar senha</span>
          <div className="containerForm">
            <input
              type="password"
              placeholder="Confime sua senha..."
              {...register("confirmPassword")}
            />
          </div>
          <p>{errors.confirmPassword?.message}</p>
        </label>
        <Button typeName={!objetoVazio(errors) ? "negative" : "primary"}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default Register;

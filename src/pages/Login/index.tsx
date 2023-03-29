import { useContext, useState } from "react";
import { Container, Form } from "./style";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinkButton as Link } from "../../style/Button";
import { Logo, Headline, Title } from "../../style/Typograph";
import { UserContext } from "../../context/UserContext";
import Loading from "../../components/Loading";

interface iFormLogin {
  email: string;
  password: string;
}

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { loading, apiLogin } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (dataForm: iFormLogin) => {
    await apiLogin(dataForm);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Logo>Kontatos</Logo>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <Title typeName="big">Login</Title>
        <label>
          <span>Email</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder="Digite seu email..."
              {...register("email")}
            />
          </div>
          <p>{errors.email?.message}</p>
        </label>
        <label>
          <span>Senha</span>
          <div className="containerForm">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha..."
              {...register("password")}
            />
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(false)} />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} />
            )}
          </div>
          <p>{errors.password?.message}</p>
        </label>
        <Button typeName="primary">Entrar</Button>
        <div className="toRegister">
          <Headline typeName="bold">Ainda não possui uma conta?</Headline>
          <Link type="button" to={"/register"}>
            Cadastre-se
          </Link>
        </div>
      </Form>
    </Container>
  );
}

export default Login;

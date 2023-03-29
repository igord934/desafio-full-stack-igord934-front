import { Button } from "../../style/Button";
import { Title } from "../../style/Typograph";
import { Form, Header } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { KontatoContext } from "../../context/KontatoContext";

interface iFormCreat {
  name: string;
  email: string;
  number: string;
}

function FormCadastrar() {
  const { closeModal, creatKontato } = useContext(KontatoContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório"),
    number: yup.string().required("Numero é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iFormCreat>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (dataForm: iFormCreat) => {
    creatKontato(dataForm);
    reset();
  };
  return (
    <>
      <Header>
        <Title typeName="small">Cria seu Kontato</Title>
        <button onClick={closeModal}>X</button>
      </Header>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <label>
          <span>Nome</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder="Digite o nome do kontato..."
              {...register("name")}
            />
          </div>
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
        </label>
        <label>
          <span>Numero</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder="Ex.: 998765432"
              {...register("number")}
            />
          </div>
        </label>
        <Button typeName="primary">Cadastrar Kontato</Button>
      </Form>
    </>
  );
}

export default FormCadastrar;

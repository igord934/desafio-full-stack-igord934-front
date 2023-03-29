import { Button } from "../../style/Button";
import { Title } from "../../style/Typograph";
import { Form, Header } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { KontatoContext } from "../../context/KontatoContext";

interface iFormKontato {
  name: string;
  email: string;
  number: string;
}

function FormEditar() {
  const { closeModal, editKontato, deletKontato, kontatoEdit } =
    useContext(KontatoContext);

  const formSchema = yup.object().shape({
    name: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iFormKontato>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (dataForm: iFormKontato) => {
    if (kontatoEdit !== null) {
      editKontato(kontatoEdit.id, dataForm, kontatoEdit);
      reset();
    }
  };
  return (
    <>
      <Header>
        <Title typeName="small">Edite seu kontato</Title>
        <button onClick={closeModal}>X</button>
      </Header>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <label>
          <span>Nome</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder={kontatoEdit?.name}
              {...register("name")}
            />
          </div>
        </label>
        <label>
          <span>Email</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder={kontatoEdit?.email}
              {...register("email")}
            />
          </div>
        </label>
        <label>
          <span>Numero</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder={kontatoEdit?.number}
              {...register("number")}
            />
          </div>
        </label>
        <div className="buttons">
          <Button typeName="primary">Salvar Alterações</Button>
          <Button
            type="button"
            onClick={() => {
              if (kontatoEdit !== null) {
                deletKontato(kontatoEdit.id);
              }
            }}
            typeName="grey"
          >
            Excluir
          </Button>
        </div>
      </Form>
    </>
  );
}

export default FormEditar;

import { Container } from "./styled";
import FormCadastrar from "../FormCadastrar";
import { KontatoContext } from "../../context/KontatoContext";
import { useContext } from "react";
import FormEditar from "../FormEditar";

function Modal() {
  const { showModal, kontatoEdit } = useContext(KontatoContext);
  if (!showModal) {
    return null;
  }
  return (
    <Container>{kontatoEdit ? <FormEditar /> : <FormCadastrar />}</Container>
  );
}
export default Modal;

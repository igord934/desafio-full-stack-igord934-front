import { useContext } from "react";
import { KontatoContext } from "../../context/KontatoContext";
import { AddButton } from "../../style/Button";
import { Headline, Title } from "../../style/Typograph";
import { Container } from "./styled";

interface iKontato {
  id: string;
  name: string;
  email: string;
  number: string;
  created_at: string;
}

interface iKontatos {
  kontatos: iKontato[];
}

function Kontatos({ kontatos }: iKontatos) {
  const { openModal, openModalEdit } = useContext(KontatoContext);
  return (
    <Container>
      <div className="header">
        <Title>Tecnologias</Title>
        <AddButton onClick={openModal}>+</AddButton>
      </div>
      {kontatos.length > 0 ? (
        <ul>
          {kontatos.map((kontato) => {
            return (
              <li
                key={kontato.id}
                onClick={() => {
                  openModalEdit(kontato);
                }}
              >
                <Title typeName="small">{kontato.name}</Title>
                <Headline>{kontato.email}</Headline>
                <Headline>{kontato.number}</Headline>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="noKontatos">
          <Title typeName="big">
            Você não tem nenhum kontato cadastrado :(
          </Title>
          <Headline typeName="italic">
            Click no botão + e cadastre novos kontatos!
          </Headline>
        </div>
      )}
    </Container>
  );
}
export default Kontatos;

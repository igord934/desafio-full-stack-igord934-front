import { useContext } from "react";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import Kontatos from "../../components/Kontatos";
import { KontatoContext } from "../../context/KontatoContext";
import { UserContext } from "../../context/UserContext";
import { Button } from "../../style/Button";
import { Headline, Logo, Title } from "../../style/Typograph";
import { Container } from "./style";

function Home() {
  const { user, deleteUser, loading } = useContext(UserContext);
  const { kontatos } = useContext(KontatoContext);

  function logout() {
    window.localStorage.removeItem("@TOKEN");
    deleteUser();
  }

  if (loading) {
    return <Loading />;
  }

  return (
    user && (
      <Container>
        <Modal />
        <div className="header">
          <Logo>Kontatos</Logo>
          <Button typeName="darkGrey" onClick={logout}>
            Sair
          </Button>
        </div>
        <div className="infos">
          <div>
            <Title typeName="big">Olá, {user.name}</Title>
            <Headline>{user.email}</Headline>
          </div>
        </div>
        <Kontatos kontatos={kontatos}></Kontatos>
      </Container>
    )
  );
}

export default Home;

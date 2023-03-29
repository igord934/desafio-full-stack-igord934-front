import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import Api from "../services/Api";
import { UserContext } from "./UserContext";

interface iKontatoProviderProps {
  children: ReactNode;
}

interface iErro {
  response: {
    data: {
      message: string;
    };
  };
}

interface iKontatoApi {
  id: string;
  name: string;
  email: string;
  number: string;
  created_at: string;
}

interface iFormKontato {
  name: string;
  email: string;
  number: string;
}

interface iKontatoProvider {
  creatKontato(dataForm: iFormKontato): void;
  deletKontato(id: string): void;
  editKontato(
    id: string,
    dataForm: iFormKontato,
    kontatoInfo: iKontatoApi
  ): void;
  closeModal(): void;
  openModal(): void;
  openModalEdit(kontato: iKontatoApi): void;
  kontatos: iKontatoApi[];
  kontatoEdit: iKontatoApi | null;
  showModal: boolean;
}

export const KontatoContext = createContext<iKontatoProvider>(
  {} as iKontatoProvider
);

export function KontatoProvider({ children }: iKontatoProviderProps) {
  const { loading, user, loadingKontatos } = useContext(UserContext);
  const [kontatos, setKontatos] = useState<iKontatoApi[]>([]);
  const [kontatoEdit, setKontatoEdit] = useState<iKontatoApi | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  async function creatKontato(dataForm: iFormKontato): Promise<void> {
    try {
      await Api.post("/kontatos", dataForm);
    } catch (err) {
      toast.error((err as iErro).response.data.message);
    } finally {
      closeModal();
    }
  }

  async function deletKontato(id: string): Promise<void> {
    try {
      await Api.delete(`/kontatos/${id}`);
    } catch (err) {
      toast.error((err as iErro).response.data.message);
    } finally {
      closeModal();
    }
  }

  async function editKontato(
    id: string,
    dataForm: iFormKontato,
    kontatoInfo: iKontatoApi
  ): Promise<void> {
    if (dataForm.email == "") {
      dataForm.email = kontatoInfo.email;
    }
    if (dataForm.number == "") {
      dataForm.number = kontatoInfo.number;
    }
    if (dataForm.name == "") {
      dataForm.name = kontatoInfo.name;
    }

    try {
      await Api.patch(`/kontatos/${id}`, dataForm);
    } catch (err) {
      console.log(err);
      toast.error((err as iErro).response.data.message);
    } finally {
      closeModal();
    }
  }

  function closeModal(): void {
    setShowModal(false);
    setKontatoEdit(null);
    loadingKontatos();
  }

  function openModal(): void {
    setShowModal(true);
  }

  function openModalEdit(kontato: iKontatoApi): void {
    setShowModal(true);
    setKontatoEdit(kontato);
  }

  useEffect(() => {
    if (user) {
      setKontatos(user.kontatos);
    }
  }, [user]);
  if (loading) {
    return <Loading />;
  }
  return (
    <KontatoContext.Provider
      value={{
        kontatos,
        kontatoEdit,
        showModal,
        closeModal,
        openModal,
        openModalEdit,
        creatKontato,
        deletKontato,
        editKontato,
      }}
    >
      {children}
    </KontatoContext.Provider>
  );
}

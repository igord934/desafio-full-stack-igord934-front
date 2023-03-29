import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import Api from "../services/Api";

interface iUserProviderProps {
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

interface iUserApi {
  id: string;
  name: string;
  email: string;
  number: string;
  created_at: string;
  kontatos: iKontatoApi[] | [];
}

interface iResponseApi {
  data: iUserApi;
}
interface iResponseLoginApi {
  data: {
    token: string;
  };
}

interface iFormLogin {
  email: string;
  password: string;
}
interface iFormRegister {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  number: string;
}

interface iUserContext {
  user: iUserApi | null;
  loading: boolean;
  deleteUser(): void;
  apiLogin(dataForm: iFormLogin): Promise<void>;
  apiRegister(dataForm: iFormRegister): Promise<void>;
  loadingKontatos(): void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export function UserProvider({ children }: iUserProviderProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<iUserApi | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const token = window.localStorage.getItem("@TOKEN");
      if (token) {
        try {
          Api.defaults.headers.Authorization = `Bearer ${token}`;
          const { data }: iResponseApi = await Api.get(`/users/profile`);
          setUser(data);
          navigate(`/`);
        } catch (err) {
          console.log(err);
          toast.error("Usuario não encontrado, conecte novamente");
          navigate(`/login`);
        }
        setLoading(false);
      } else {
        navigate(`/login`);
      }
      setLoading(false);
    }
    setLoading(false);
    getUser();
  }, [loading]);

  function deleteUser(): void {
    setUser(null);
    setLoading(true);
  }

  function loadingKontatos(): void {
    setLoading(true);
  }

  async function apiLogin(dataForm: iFormLogin): Promise<void> {
    try {
      const { data }: iResponseLoginApi = await Api.post("/login", dataForm);
      console.log(data.token);
      toast.success("Login realizado com sucesso!");
      window.localStorage.setItem("@TOKEN", data.token);
      setLoading(true);
    } catch (err) {
      toast.error((err as iErro).response.data.message);
    }
  }

  async function apiRegister(dataForm: iFormRegister): Promise<void> {
    try {
      await Api.post("/users", dataForm);
      toast.success(
        "Você se registrou, estamos te redirecionando para o login!"
      );
      navigate("/login");
    } catch (err) {
      toast.error((err as iErro).response.data.message);
    }
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        deleteUser,
        apiLogin,
        apiRegister,
        loadingKontatos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

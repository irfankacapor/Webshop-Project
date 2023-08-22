import axios from "axios";
import {
  ReactNode,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";

type UserData = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: "female" | "male";
  image: string;
  token: string;
};

type UserContextType = {
  loginUser: (username: string, password: string) => void;
  userData: UserData;
};

const UserContext = createContext({} as UserContextType);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  });

  const loginUser = async (username: string, password: string) => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });
      setUserData(res.data);
      localStorage.setItem("userData", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

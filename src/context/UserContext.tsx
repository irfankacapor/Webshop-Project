import axios from "axios";
import { ReactNode, useContext, createContext, useReducer } from "react";

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

type UserActions = { type: "LOGIN_USER"; userData: UserData };

const UserContext = createContext({} as UserContextType);

export const useUser = () => {
  return useContext(UserContext);
};

const reducer = (state: UserData, action: UserActions) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.userData;
    default:
      return state;
  }
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, dispatch] = useReducer(reducer, undefined, () => {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  });

  const loginUser = async (username: string, password: string) => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      localStorage.setItem("userData", JSON.stringify(res.data));
      dispatch({ type: "LOGIN_USER", userData: res.data });
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

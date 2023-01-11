import { createContext } from "react";
import { UserContextType } from "../../types";

const userObj: UserContextType = {
  user: {
    name: "",
    uid: "",
    isSign: false,
  },
  setUser: () => {},
};

export const UserInfo = createContext(userObj);

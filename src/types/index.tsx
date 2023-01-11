import { Dispatch, SetStateAction } from "react";

interface UserType {
  name: string;
  uid: string;
  isSign: boolean;
}

export interface UserContextType {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
}

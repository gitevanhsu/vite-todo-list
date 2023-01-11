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

export interface inputTextType {
  [key: string]: string;
  email: string;
  name: string;
  password: string;
  checkPassword: string;
}

export interface inputCheckType {
  [key: string]: RegExp;
  email: RegExp;
  name: RegExp;
  password: RegExp;
  checkPassword: RegExp;
}
export interface FormType {
  formData: string[];
  submitHandler: (data: inputTextType) => void;
  isSignUp: boolean;
}

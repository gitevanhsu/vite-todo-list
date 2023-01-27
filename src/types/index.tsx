import { Dispatch, SetStateAction } from "react";

interface MemberType {
  name: string;
  uid: string;
  isSign: boolean;
}

export interface MemberContextType {
  member: MemberType;
  setMember: Dispatch<SetStateAction<MemberType>>;
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
export interface MemberSignInInfo {
  email: string;
  password: string;
}
export interface MemberSignUpInfo extends MemberSignInInfo {
  name: string;
}

export interface MemberInfoType extends MemberSignUpInfo {
  uid: string;
}

export interface SignOutType {
  clickHandler: () => void;
}

export interface TodoProps {
  todo: string;
  completed: boolean;
}

export interface TabItemProps {
  tabItem: string;
  currentTab: boolean;
  index: number;
  setTab: Dispatch<SetStateAction<number>>;
}
export interface TodoListProps {
  tab: number;
  todoList: TodoProps[];
  triggerCompleted: (item: string) => void;
  removeItem: (item: string) => void;
}

export interface TodoItemProps {
  todo: string;
  completed: boolean;
  triggerCompleted: (item: string) => void;
  removeItem: (item: string) => void;
}

export interface MemberWorks {
  stickyList: object[];
  todoList: TodoProps[];
}

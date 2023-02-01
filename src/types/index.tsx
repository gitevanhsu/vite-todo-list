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

interface InputDetail {
  title: string;
  verify: RegExp;
  error: string;
  type: string;
  accept: string;
  placeHolder: string;
  require: boolean;
  minLength: number;
}

export interface InputItem {
  [key: string]: InputDetail;
  email: InputDetail;
  name: InputDetail;
  password: InputDetail;
  checkPassword: InputDetail;
  photo: InputDetail;
}
export interface inputTextType {
  [key: string]: string;
  email: string;
  name: string;
  password: string;
  checkPassword: string;
  photo: string;
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
  id: string;
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
  triggerCompleted: (id: string) => void;
  removeItem: (id: string) => void;
}

export interface TodoItemProps {
  todo: string;
  completed: boolean;
  id: string;
  triggerCompleted: (id: string) => void;
  removeItem: (id: string) => void;
}

export interface MemberWorks {
  stickyList: object[];
  todoList: TodoProps[];
}

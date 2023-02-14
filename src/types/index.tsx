import { Dispatch, SetStateAction } from "react";

export interface MemberType {
  name: string;
  uid: string;
  isSign: boolean;
  url: string;
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
  [key: string]: string | File[];
  email: string;
  name: string;
  password: string;
  checkPassword: string;
  photo: File[];
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
  photo: File[];
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

export interface WorksItemInterface {
  id: string;
  name: string;
}

export interface WorkItemInterface {
  workId: string;
  itemId: string;
  name: string;
  handleItemDelete: (itemId: string) => void;
  editItemName: (workId: string, itemId: string, name: string) => void;
}
export interface WorksInterface {
  title: string;
  id: string;
  items: WorksItemInterface[];
  addNewItemHandler: (id: string, name: string) => void;
  removeItem: (workId: string, itemId: string) => void;
  editWorkTitle: (workId: string, title: string) => void;
  editItemName: (workId: string, itemId: string, name: string) => void;
}

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import {
  MemberSignInInfo,
  MemberSignUpInfo,
  MemberWorks,
  TodoProps,
} from "../types";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();

export const emailSignUp = async ({
  name,
  email,
  password,
}: MemberSignUpInfo) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid } = userCredential.user;
    await setDoc(doc(db, "members", uid), { name, email, password, uid });
    await setDoc(doc(db, "works", uid), { todoList: [], stickyList: [] });
  } catch (error) {
    console.log(error);
  }
};
export const emailSignIn = async ({ email, password }: MemberSignInInfo) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const memberSignOut = () => signOut(auth);

export const getMemberInfo = async (uid: string) => {
  const memberData = await getDoc(doc(db, "members", uid));
  return memberData.data();
};

export const getTodo = async (uid: string) => {
  const memberWorks = await getDoc(doc(db, "works", uid));
  const { todoList } = memberWorks.data() as MemberWorks;
  return todoList;
};

export const upDateMemberTodoList = async (
  uid: string,
  todoList: TodoProps[]
) => {
  await updateDoc(doc(db, "works", uid), { todoList });
};

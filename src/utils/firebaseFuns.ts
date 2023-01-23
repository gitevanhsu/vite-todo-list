import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc, addDoc } from "firebase/firestore";

import { MemberSignInInfo, MemberSignUpInfo } from "../types";

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
const auth = getAuth();

export const saveUserInfo = (email: string) => {};

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
  } catch (error) {
    console.log(error);
  }
};
export const emailSignIn = ({ email, password }: MemberSignInInfo) => {};

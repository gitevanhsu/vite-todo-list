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
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

import Swal from "sweetalert2";

import {
  MemberSignInInfo,
  MemberSignUpInfo,
  MemberWorks,
  TodoProps,
  MemberType,
  WorksType,
  StoreType,
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
const storage = getStorage(app);
const storageImageRef = ref(storage, "image");

export const initialState: StoreType = {
  works: [],
  fetchStatus: "idle",
  isFirstRender: true,
};

export const auth = getAuth();

const uploadImage = async (id: string, file: File | undefined) => {
  if (!file) return "";
  const storageRef = ref(storageImageRef, id);
  const result = await uploadBytes(storageRef, file);
  const photoUrl = await getDownloadURL(result.ref);
  return photoUrl;
};

export const emailSignUp = async (
  { name, email, password, photo }: MemberSignUpInfo,
  setMember: React.Dispatch<React.SetStateAction<MemberType>>
) => {
  try {
    Swal.fire({
      icon: "info",
      title: "資料處理中......",
      didOpen: async () => {
        Swal.showLoading();
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const { uid } = userCredential.user;
        const url = await uploadImage(uid, photo[0]);
        await setDoc(doc(db, "works", uid), {
          todoList: [],
          workList: initialState.works,
        });
        await setDoc(doc(db, "members", uid), {
          name,
          email,
          password,
          uid,
          url,
        });
        setMember({ name, uid, url, isSign: true });
        Swal.close();
      },
    }).then(() => {
      Swal.fire({
        icon: "info",
        title: "註冊成功！",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  } catch (error) {
    const errorMessage = (error as Error).message;
    if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
      Swal.fire({
        icon: "info",
        title: "帳號已存在，請直接登入！",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
};
export const emailSignIn = async ({ email, password }: MemberSignInInfo) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    Swal.fire({
      icon: "success",
      title: "登入成功，歡迎回來！",
      showConfirmButton: false,
      timer: 2000,
    });
  } catch (error) {
    const errorMessage = (error as Error).message;
    switch (errorMessage) {
      case "Firebase: Error (auth/wrong-password).":
        Swal.fire({
          position: "center",
          icon: "info",
          title: "密碼輸入錯誤！",
          showConfirmButton: false,
          timer: 1500,
        });
        break;
      case "Firebase: Error (auth/user-not-found).":
        Swal.fire({
          position: "center",
          icon: "info",
          title: "查無此帳號，請先註冊喔！",
        });
        break;
      default:
    }
  }
};

export const memberSignOut = (
  setMember: React.Dispatch<React.SetStateAction<MemberType>>
) => {
  Swal.fire({
    title: "確定要登出嗎？",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "確定登出",
    cancelButtonText: "取消",
  }).then((result) => {
    if (result.isConfirmed) {
      signOut(auth);
      setMember({ name: "", uid: "", url: "", isSign: false });
      Swal.fire("成功登出!", "您已登出。", "success");
    }
  });
};

export const getMemberInfo = async (uid: string) => {
  const memberData = await getDoc(doc(db, "members", uid));
  return memberData.data() as MemberType;
};

export const getTodo = async (uid: string) => {
  const memberWorks = await getDoc(doc(db, "works", uid));
  const { todoList } = memberWorks.data() as MemberWorks;
  return todoList;
};

export const getWork = async (uid: string) => {
  const memberWorks = await getDoc(doc(db, "works", uid));
  const { workList } = memberWorks.data() as MemberWorks;
  return workList;
};

export const syncWork = async (uid: string, data: WorksType[]) => {
  await updateDoc(doc(db, "works", uid), {
    workList: data,
  });
};

export const upDateMemberTodoList = async (
  uid: string,
  todoList: TodoProps[]
) => {
  await updateDoc(doc(db, "works", uid), { todoList });
};

export const updateMemberInfo = async (
  member: MemberType,
  element: HTMLInputElement,
  name: string,
  setMember: React.Dispatch<React.SetStateAction<MemberType>>,
  clickHandler: () => void
) => {
  if (name.trim().length === 0) {
    Swal.fire({
      icon: "info",
      title: "請勿輸入空白。",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  const fileList = element.files as unknown as File[];
  if (fileList[0] && !fileList[0].type.includes("image")) {
    Swal.fire("請上傳圖片");
    return;
  }

  if (fileList[0]) {
    Swal.fire({
      icon: "info",
      title: "資料處理中......",
      didOpen: async () => {
        Swal.showLoading();
        const url = await uploadImage(member.uid, fileList[0]);
        await updateDoc(doc(db, "members", member.uid), {
          name,
          url,
        });
        setMember((m) => ({ ...m, name, url }));
        Swal.close();
      },
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "資料修改成功！",
        showConfirmButton: false,
        timer: 1500,
      });
      clickHandler();
    });
    return;
  }
  if (name !== member.name) {
    Swal.fire({
      icon: "info",
      title: "資料處理中......",
      didOpen: async () => {
        Swal.showLoading();
        await updateDoc(doc(db, "members", member.uid), {
          name,
        });
        setMember((m) => ({ ...m, name }));
        Swal.close();
      },
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "資料修改成功！",
        showConfirmButton: false,
        timer: 1500,
      });
      clickHandler();
    });
    return;
  }
  clickHandler();
};

import { createContext } from "react";

import { MemberContextType } from "../../types";

const memberObj: MemberContextType = {
  member: { name: "", uid: "", isSign: false, url: "" },
  setMember: () => undefined,
};

const memberInfo = createContext(memberObj);
export default memberInfo;

interface placeholderType {
  [key: string]: string;
  email: string;
  name: string;
  password: string;
  checkPassword: string;
}
const placeholder: placeholderType = {
  email: "請輸入Email",
  name: "請輸入您的暱稱",
  password: "請輸入密碼",
  checkPassword: "請再次輸入密碼",
};

interface titleType {
  [key: string]: string;
  email: string;
  name: string;
  password: string;
  checkPassword: string;
}
const title: titleType = {
  email: "Email",
  name: "您的暱稱",
  password: "輸入密碼",
  checkPassword: "再次輸入密碼",
};

export default function Form({ formData }: { formData: string[] }) {
  return (
    <div>
      {formData.map((item, _, self) => (
        <div key={self + item} className="text-left my-[20px]">
          <label>
            <p className="font-semibold text-sm mb-1">{title[item]}</p>
            <input
              type={item.includes("password") ? "password" : "text"}
              placeholder={placeholder[item]}
              className="w-full py-[12px] px-[16px] rounded-[10px]"
            />
          </label>
        </div>
      ))}
    </div>
  );
}

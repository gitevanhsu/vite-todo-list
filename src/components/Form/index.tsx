export default function Form({ formData }: { formData: string[] }) {
  return (
    <div>
      {formData.map((item, _, self) => (
        <div key={self + item} className="text-left my-[20px]">
          <label>
            <div>{item}</div>
            <input type={item.includes("password") ? "password" : "text"} />
          </label>
        </div>
      ))}
    </div>
  );
}

export default function InputHandler(
  e: React.ChangeEvent<HTMLInputElement>,
  callback: React.Dispatch<React.SetStateAction<string>>
) {
  callback(e.target.value);
}

import { Link } from "react-router-dom";

export default function RouterButton({ path }: { path: string }) {
  return (
    <Link
      to={`/${path}`}
      className="inline-block w-[100px] text-center mx-auto px-2 py-2 mb-5 border-2 border-gray-500 rounded-xl font-semibold tracking-wider bg-slate-400 hover:bg-yellow-400 text-slate-100 hover:text-slate-700"
    >
      {path.toUpperCase()}
    </Link>
  );
}

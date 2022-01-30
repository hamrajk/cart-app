import { FaDog } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex flex-wrap w-full px-6 py-8 bg-slate-900 text-white justify-between items-center">
      <h1 className="text-8xl p-2 font-medium">Woofmart</h1>
      <FaDog className="absolute p-2 left-[28rem] text-8xl" />
      <p className="p-2 text-3xl">For All Your Dog Needs!</p>
    </div>
  );
}

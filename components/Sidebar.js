export default function Sidebar() {
  return (
    <div className="flex-col w-1/5 py-8 px-8 items-left bg-slate-300">
      <h1 className="text-3xl font-bold py-8">Categories</h1>
      <ul className="text-lg leading-8 font-semibold">
        <li>Toys</li>
        <li>Treats</li>
        <li>Foods</li>
        <li>Clothes</li>
        <li>Accessories</li>
      </ul>
    </div>
  );
}

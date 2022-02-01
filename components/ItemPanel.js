import { BsCartPlus } from "react-icons/bs";

export default function ItemPanel({ product, onAdd }) {
  return (
    <div className="h-48 bg-white border-slate-500 border-b-2 flex">
      <img src={product.image} className="w-44 h-44 p-5 object-contain" />
      <div className="flex flex-col">
        <div className="my-auto text-2xl font-semibold">
          {product.name} ${product.price}
        </div>
        <div className=" my-auto text-xl font-medium">{product.desc}</div>
      </div>
      <div className="p-3 rounded-md relative top-1/3 h-1/3 bg-slate-900 text-white text-xl flex items-center ml-auto mr-40 ">
        <button onClick={() => onAdd(product)}>Add to Cart</button>
        <BsCartPlus className="text-3xl" />
      </div>
    </div>
  );
}

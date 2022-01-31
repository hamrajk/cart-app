export default function Sidebar({ cartItems, onAdd, onRemove }) {
  let total = 0;
  for (let i of cartItems) {
    total += i.qty * i.price;
  }
  console.log(total);

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

      <div>
        <h2 className="text-3xl font-bold py-8">Cart</h2>
        <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
        {cartItems.map((item) => (
          <div className="flex" key={item.id}>
            <div>{item.name}</div>
            <div>{item.qty}</div>
            <button onClick={() => onAdd(item)}>+</button>
            <button onClick={() => onRemove(item)}>-</button>
            <div>
              {item.qty} x ${item.price}
            </div>
          </div>
        ))}
        {total === 0 ? null : total}
      </div>
    </div>
  );
}

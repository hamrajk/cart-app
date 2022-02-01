import Accordion from "react-bootstrap/Accordion";

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

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="text-3xl font-semibold py-8">
            <b>Cart</b>
          </Accordion.Header>
          <Accordion.Body>
            <div className="bg-white rounded-lg">
              <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
              {cartItems.map((item) => (
                <div
                  className="flex py-2 w-1/5 ml-4 items-center "
                  key={item.id}
                >
                  <img className="max-h-full max-w-full" src={item.image} />
                  <div className="px-4 text-xl font-semibold">{item.name}</div>
                  <div className="flex inline-flex">
                    <button onClick={() => onAdd(item)}>+</button>
                    <div className="px-3">{item.qty}</div>
                    <button onClick={() => onRemove(item)}>-</button>
                  </div>
                  <div className="inline ml-10">
                    <span>
                      {item.qty + " x"} ${item.price}
                    </span>
                  </div>
                </div>
              ))}
              {total === 0 ? null : total}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

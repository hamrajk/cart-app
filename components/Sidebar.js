import Accordion from "react-bootstrap/Accordion";
import { AiFillCaretDown } from "react-icons/ai";

export default function Sidebar({ cartItems, onAdd, onRemove }) {
  let total = 0;
  for (let i of cartItems) {
    total += i.qty * i.price;
  }
  console.log(total);

  return (
    <div className="flex-col w-1/5 py-8 px-8 items-left bg-slate-300">
      {/* <h1 className="text-3xl font-bold py-8">Categories</h1>
      <ul className="text-lg leading-8 font-semibold">
        <li>Toys</li>
        <li>Treats</li>
        <li>Foods</li>
        <li>Clothes</li>
        <li>Accessories</li>
      </ul> */}

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="text-3xl font-semibold py-8 bg-slate-300">
            <div className="flex items-center">
              <b>Cart</b>
              <AiFillCaretDown />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="bg-white rounded-lg py-4">
              <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
              {cartItems.map((item) => (
                <div
                  className="flex py-2 w-1/5 ml-4 items-center justify-start "
                  key={item.id}
                >
                  <img className="max-h-full max-w-full" src={item.image} />
                  <div className="pl-4 text-xl font-semibold min-w-[200%]">
                    {item.name}
                  </div>
                  <div className="flex pr-2">
                    <button
                      className="bg-red-400 rounded-[50%] w-6 h-6 px-1"
                      onClick={() => onRemove(item)}
                    >
                      -
                    </button>

                    <div className="px-1">{item.qty}</div>
                    <button
                      className="bg-green-500 rounded-[50%] w-6 h-6 px-1"
                      onClick={() => onAdd(item)}
                    >
                      +
                    </button>
                  </div>
                  <div className="">
                    <span>${item.qty * item.price}</span>
                  </div>
                </div>
              ))}
              <div className="px-3 text-right text-xl font-semibold">
                {total === 0 ? null : <div>Total: ${total}</div>}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

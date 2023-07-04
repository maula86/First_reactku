import { useEffect, useState } from "react";
import NestedComponents from "../components/Elements/NestedComponents";
import Button from "./../components/Elements/Button/Button";

const Products = [
  {
    id: 1,
    nama: "Olahraga Outdoor Fashion Walking",
    qty: 1,
    price: 1000000,
    deskrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img_src:
      "https://id-live-01.slatic.net/p/c0a4f7650a0817707c7ddc52873169fd.jpg",
  },
  {
    id: 2,
    nama: "Centurion cerberus xc1",
    qty: 1,
    price: 100000,
    deskrip:
      "Debitis, laudantium culpa officiis quasi expedita inventore facilis aperiam harum!",
    img_src:
      "https://id-live-01.slatic.net/p/c75a336507965801fb52db7d7a62d23f.jpg",
  },
  {
    id: 3,
    nama: "H 3083 Brand Hertz Kets",
    qty: 1,
    price: 500000,
    deskrip:
      "Iure porro magni dicta rerum, facilis aut ipsam consequuntur illum. Ad, veritatis!",
    img_src:
      "https://id-live-01.slatic.net/p/6a4e76161d0e442958e3b5d92c4d684f.jpg",
  },
];

export default function Product() {
  const [Carts, setCarts] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);

  useEffect(()=>{
    setCarts(JSON.parse(localStorage.getItem("Carts")) || [])
  },[])

  useEffect(()=>{
    if (Carts.length > 0) {
      const sumarray = Carts.reduce((acc, cart) => {
        const findProduct = Products.find((product) => product.id === cart.id)
        return acc + findProduct.price * cart.qty;
      }, 0)
      setTotalPrice(sumarray)
      localStorage.setItem("Carts", JSON.stringify(Carts))
    } else {
      localStorage.removeItem("Carts");
    }
  },[ Carts ])

  const handleAddCart = (id) => {
    if (Carts.find((cart) => cart.id === id)) {
      setCarts(
        Carts.map((cart) =>
          cart.id === id ? { ...cart, qty: cart.qty + 1 } : cart
        )
      );
    } else {
      setCarts([...Carts, { id, qty: 1 }]);
    }
    // setCarts([
    // 	...Carts,
    // 	{
    // 		id,
    // 		// nama: "Olahraga Outdoor Fashion Walking",
    // 		qty: 1,
    // 		// price: 1000000,
    // 	}
    // ])
  };

  const handleMinusCart = (id) => {
    if (Carts.find((cart) => cart.id === id) && Carts.find((cart) => cart.id === id).qty > 1) {
      setCarts(
        Carts.map((cart) =>
          cart.id === id ? { ...cart, qty: cart.qty - 1 } : cart
        )
      );
    } else {
			setCarts(Carts => {
				return (
					Carts.filter(cart => cart.id !== id)
					)  
			})
      console.log(...Carts);
		}
  };

  return (
    <div className="flex my-10 mx-3">
      <div className="flex justify-center flex-wrap w-2/3 gap-3">
        {Products.map((product) => {
          return (
            <NestedComponents key={product.id}>
              <NestedComponents.HeaderCard img_url={product.img_src} />
              <NestedComponents.BodyCard ttlcard={`${product.nama.substring(0, 30)}...`} title={product.nama}>
                <p>{product.deskrip}</p>
              </NestedComponents.BodyCard>
              <NestedComponents.FooterCard
                labelan={`Rp ${product.price.toLocaleString("id-ID")}`}
                id={product.id}
                handleAddCart={handleAddCart}
              ></NestedComponents.FooterCard>
            </NestedComponents>
          );
        })}
      </div>
      {/* <NestedComponents>
                <NestedComponents.HeaderCard></NestedComponents.HeaderCard>
                <NestedComponents.BodyCard ttlcard="Sepatu GG">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias sunt architecto odio ullam numquam assumenda aliquid veritatis labore eaque ipsam, cupiditate quis? Fugit, eius. Minima qui velit consequatur quo.
                Nemo, hic esse doloribus placeat mollitia minus maiores</NestedComponents.BodyCard>
                <NestedComponents.FooterCard></NestedComponents.FooterCard>
            </NestedComponents> */}
      <div className="flex justify-center my-10 w-1/3">
        <NestedComponents widthan="w-full">
          <NestedComponents.BodyCard ttlcard={` `}>
            <div className="rounded-full bg-blue-700 w-10 h-10 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                strokeWidth={2}
                stroke="currentColor"
                className="text-white w-6 h-6 absolute bottom-2 left-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <table className="w-full mt-2 text-left table-auto border-separate border-spacing-x-3">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>{
                Carts.length !== 0 &&
                Carts.map((cart) => {
                  const produsct = Products.find(
                    (product) => product.id === cart.id
                    );
                    return (
                      <tr key={cart.id} className="text-base font-semibold">
                        <td title={produsct.nama}>{produsct.nama.substring(0, 15)}...</td>
                        <td>Rp{' '}
                          {produsct.price.toLocaleString("id-ID")}
                        </td>
                        <td>{cart.qty}</td>
                        <td>Rp{' '}
                          {(cart.qty * produsct.price).toLocaleString("id-ID")}
                        </td>
                        <td>
                          <Button
                            textbtn={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                          </svg>
                            }
                            lebar="w-10 px-2"
                            tinggi="py-1"
                            bgbtn="bg-red-800"
                            hvbgbtn="hover:shadow-red-600/50 hover:bg-red-600"
                            onClick={() => handleMinusCart(cart.id)}
                            ></Button>
                        </td>
                      </tr>
                    );
                  })
                }
                {Carts.length > 0 &&
                <tr>
                  <td colSpan={4}>
                    <div className="divide-y divide-white border mt-5"></div>
                    <div className="flex justify-between pt-4 items-center text-white">
                      <h1 className="font-semibold text-lg">Total Price :</h1>
                      <span className="p-3 bg-blue-800 rounded-lg">
                        <h1 className="font-bold text-lg">Rp{' '}{TotalPrice.toLocaleString("id-ID")}</h1>
                      </span>
                    </div>
                  </td>
                </tr>
                }
              </tbody>
            </table>
          </NestedComponents.BodyCard>
        </NestedComponents>
      </div>
    </div>
  );
}

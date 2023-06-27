import { useState } from "react";
import NestedComponents from "../components/Elements/NestedComponents";
import Button from './../components/Elements/Button/Button';


const Produscts = [
    {
        id: 1,
        nama : "Olahraga Outdoor Fashion Walking",
        qty : 1,
        price : 1000000,
        deskrip:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img_src:'https://id-live-01.slatic.net/p/c0a4f7650a0817707c7ddc52873169fd.jpg',
    },
    {
        id: 2,
        nama : "Centurion cerberus xc1",
        qty : 1,
        price : 100000,
        deskrip:'Debitis, laudantium culpa officiis quasi expedita inventore facilis aperiam harum!',
        img_src:'https://id-live-01.slatic.net/p/c75a336507965801fb52db7d7a62d23f.jpg',
    },
    {
        id: 3,
        nama : "H 3083 Brand Hertz Kets",
        qty : 1,
        price : 500000,
        deskrip:'Iure porro magni dicta rerum, facilis aut ipsam consequuntur illum. Ad, veritatis!',
        img_src:'https://id-live-01.slatic.net/p/6a4e76161d0e442958e3b5d92c4d684f.jpg',
    },
]

export default function Product() {
    const [Carts, setCarts] = useState([
		{
			id: 1,
			nama : "Olahraga Outdoor Fashion Walking",
			qty : 1,
			price : 1000000,
		}
		])
    return (
        <div className="flex my-10 mx-3">
						<div className="flex justify-center flex-wrap w-3/4 gap-x-3">

            {Produscts.map((product) => {
                return (
                    <NestedComponents key={product.id}>
                        <NestedComponents.HeaderCard img_url={product.img_src}/>
													<NestedComponents.BodyCard ttlcard={product.nama}>{product.deskrip}</NestedComponents.BodyCard>
													<NestedComponents.FooterCard labelan={product.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}>
								            <Button textbtn="Add to Cart" lebar="w-28" on/>
													</NestedComponents.FooterCard>
                    </NestedComponents>
                )
            })}
						</div>
            {/* <NestedComponents>
                <NestedComponents.HeaderCard></NestedComponents.HeaderCard>
                <NestedComponents.BodyCard ttlcard="Sepatu GG">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias sunt architecto odio ullam numquam assumenda aliquid veritatis labore eaque ipsam, cupiditate quis? Fugit, eius. Minima qui velit consequatur quo.
                Nemo, hic esse doloribus placeat mollitia minus maiores</NestedComponents.BodyCard>
                <NestedComponents.FooterCard></NestedComponents.FooterCard>
            </NestedComponents> */}
						<div className="flex justify-center my-10 w-1/4">
						<NestedComponents>
							<NestedComponents.BodyCard ttlcard={``}>
								<div className="rounded-full bg-blue-700 w-10 h-10 relative">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={2} stroke="currentColor" className="text-white w-6 h-6 absolute bottom-2 left-2">
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
								</svg>
								</div>
							<table className="w-full mt-2 text-left table-auto border-separate border-spacing-x-5">
								<thead>
									<tr>
										<th>Nama</th>
										<th>Qty</th>
										<th>Price</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{
										Carts.map(cart => {
											return (
												<tr key={cart.id} className="text-xs">
													<td>{cart.nama}</td>
													<td>{cart.qty}</td>
													<td>{cart.price}</td>
													<td>{cart.qty * cart.price}</td>
												</tr>
											)
										})
									}
								</tbody>
							</table>
							</NestedComponents.BodyCard>	
						</NestedComponents>
						</div>
        </div>
    )
}
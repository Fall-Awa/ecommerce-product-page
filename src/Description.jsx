import { ShoppingCart } from "lucide-react";

export default function Description() {
  return (
    <div className="p-2 w-[400px] mt-32 ml-32 space-y-4 ">
      <h1 className="text-gray-500 text-sm">SNEAKER COMPANY</h1>
      <div className="space-y-10">
        <p className="font-extrabold text-3xl">Fall Limited Edition Sneakers</p>
        <p className="font-light">
          These low-profile Sneakers are your perfect casual wear companion
          .Featuring a durable rubber outer sole, they'll withstank everything
          the weater can offer
        </p>
      </div>
      <div className="flex gap-5">
        <p className="text-xl font-bold">$125.00</p>
        <p className="bg-black p-0.5 h-6 w-10 text-center mt-1 text-sm rounded-md text-white">
          50%
        </p>
      </div>

      <div className="flex gap-5">
        <ul className="border w-[1401x] divide-x rounded-lg bg-gray-100 flex">
          <li className="px-5 py-1  text-orange-500 font-extrabold">-</li>
          <li className="px-5 py-1 ">0</li>
          <li className="px-5 py-1 text-orange-500 font-extrabold ">+</li>
        </ul>
        <button className="bg-orange-500 rounded-md flex gap-3 text-center p-3 font-extrabold text-xs h-10 px-14">
          {" "}
          <ShoppingCart size={16} /> Add to card
        </button>
      </div>
    </div>
  );
}

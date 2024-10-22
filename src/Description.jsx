import { Plus, ShoppingCart } from "lucide-react";

export default function Description() {
  return (
    <div className="lg:p-2 lg:w-[400px] lg:mt-32 lg:ml-32 p-8 space-y-4 sm:ml-20 ">
      <h1 className="text-gray-500 text-sm">SNEAKER COMPANY</h1>
      <div className="space-y-10">
        <p className="font-extrabold text-3xl">Fall Limited Edition Sneakers</p>
        <p className="font-light">
          These low-profile Sneakers are your perfect casual wear companion
          .Featuring a durable rubber outer sole, they'll withstank everything
          the weater can offer
        </p>
      </div>
      <div className="lg:flex lg:flex-col sm:flex-row">
        <div className="flex gap-5">
          <p className="text-xl font-bold">$125.00</p>
          <p className="bg-black p-0.5 h-6 w-10 text-center mt-1 text-sm rounded-md text-white">
            50%
          </p>
        </div>
        <span className="line-through text-gray-500">$250.00</span>
      </div>

      <div className="lg:flex lg:flex-row  gap-8 sm:flex-col ">
        <div className="border  divide-x rounded-lg bg-gray-100 flex">
          <button className="w-full h-full px-5 py-2 text-orange-500 font-extrabold border-r-2 border-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500">
            -
          </button>

          <button className="w-full h-full px-5 py-2 text-center border-r-2 border-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500">
            0
          </button>

          <button className="w-full h-full px-4 py-2  text-orange-500 font-extrabold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <Plus size={20} className="mr-0" />
          </button>
        </div>
        <button className="bg-orange-500 flex gap-2 p-2 w-full   text-sm rounded-md font-bold  ">
          {" "}
          <div className="flex ml-9 gap-3 p-1">
            <ShoppingCart size={14} className="mt-1" />{" "}
            <p className="">Add to card</p>
          </div>
        </button>
      </div>
    </div>
  );
}
{
  /* <button className="bg-orange-500 rounded-md w-full flex gap-3 text-center p-4 font-extrabold text-md h-10 px-14"> */
}

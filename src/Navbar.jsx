import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className=" p-3 shadow-sm border   border-slate-100 bg-white w-full h-auto">
      <div className="flex justify-around  ">
        <div className="flex ml-3 gap-14  ">
          <p className="font-extrabold text-3xl text-center">sneakers</p>
          <ul className="hidden md:flex  gap-9 items-center justify-center ">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" flex gap-7 justify-end items-end">
          <ShoppingCart />
          <img
            src="src/assets/images/image-avatar.png"
            alt=""
            className="rounded-full h-8 w-8 "
          />
        </div>
      </div>
    </nav>
  );
}

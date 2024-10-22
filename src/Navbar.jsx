import { AlignJustify, ShoppingCart, X } from "lucide-react"; // Importez les icônes nécessaires
import { useState } from "react";

export default function Navbar() {
  // État pour gérer l'ouverture/fermeture de la sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fonction pour toggler la sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <nav className="p-3 shadow-sm border border-slate-100 bg-white w-full h-auto">
      <div className="flex justify-between lg:justify-around items-center p-3">
        <div className="flex flex-col md:flex-row items-center gap-3 lg:gap-14 lg:ml-3">
          <p className="flex gap-2 font-extrabold text-3xl text-center">
            <span
              className="mt-2 cursor-pointer lg:hidden"
              onClick={toggleSidebar}
            >
              <AlignJustify />
            </span>
            sneakers
          </p>
          <ul className="hidden md:flex gap-9 items-center justify-center">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-7 justify-end items-end">
          <ShoppingCart />
          <img
            src="src/assets/images/image-avatar.png"
            alt=""
            className="rounded-full h-8 w-8"
          />
        </div>
      </div>

      {/* Sidebar pour les petits écrans */}
      <div
        className={`fixed w-80 inset-0 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "p-3" : "-translate-x-full"
        } z-50`} // Ajoutez z-50 ici
      >
        <div className="flex justify-end p-2">
          <button onClick={toggleSidebar}>
            <X />
          </button>
        </div>
        <ul className="flex flex-col items-start p-3  border-gray-400 ">
          <li className="py-2 ">
            <p to="">Collections</p>
          </li>
          <li className="py-2">
            <p to="">Men</p>
          </li>
          <li className="py-2">
            <p to="">Women</p>
          </li>
          <li className="py-2">
            <p to="">About</p>
          </li>
          <li className="py-2">
            <p to="">Contact</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

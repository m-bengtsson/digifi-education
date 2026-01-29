import { Link } from "@tanstack/react-router";
import { useState } from "react";
import imageUrls from "../data/imageUrls";
import { Menu, Search, ShoppingCart, StarIcon, User, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`flex flex-col bg-[url(${imageUrls.backroundBlue})] bg-cover bg-center  lg:justify-between  items-center text-white shadow-lg *:w-full`}
      >
        {/* Black bar */}
        <div className="bg-neutral-800 h-7.5 w-full flex gap-6 uppercase items-center justify-center font-extrabold">
          <div className="flex items-center gap-6 text-md">
            <p>Kundtjänst</p>
            <p>Hitta återförsäljare</p>
            <p className="text-xs">Privatperson</p>
          </div>
          <div className="flex items-center gap-2">
            {/* Rating */}
            <p className="text-md">4.8</p>
            <div className="flex gap-1 text-[#ff6600]">
              {[...Array(5)].map((_, idx) => (
                <StarIcon key={idx} size={16} fill="#ff6600" />
              ))}
            </div>
            <p className="text-xs">2,473 recensioner</p>
          </div>
        </div>
        <div className="flex justify-between mt-5 max-w-284">
          {/* Hamburger menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 hover:cursor-pointer transition-colors text-neutral-800 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={32} />
          </button>
          {/* Logo */}
          <Link to="/">
            <img src={imageUrls.logo} alt="Logo" className="h-10" />
          </Link>
          {/* Search bar */}
          <div className="items-center justify-between bg-[#5cbee6] py-3 px-5 hidden rounded-xs lg:flex lg:max-w-100 w-full shadow-[0px_0px_20px_rgba(0,0,0,0.15)]">
            <input
              type="text"
              placeholder="Sök bland våra produkter"
              className="w-full text-white placeholder:text-white placeholder:font-extrabold"
            />
            <Search width={24} />
          </div>
          <div className="flex items-center px-4 gap-4 *:hover:cursor-pointer *:transition-colors *:text-neutral-800 ">
            <button className="hidden lg:block " aria-label="Open user menu">
              <User size={32} />
            </button>
            <button aria-label="Open cart">
              <ShoppingCart size={32} />
            </button>
          </div>
        </div>
        {/* Categories */}
        <nav className="h-8 py-2 hidden lg:flex items-center justify-center font-extrabold text-lg uppercase gap-4">
          <p>Exteriör</p>
          <p>Interiör</p>
        </nav>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-110 bg-[url(${imageUrls.backroundBlue})] bg-cover bg-center shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-2 text-neutral-800">
          <div className="items-center justify-between bg-white  p-3 flex max-w-100 w-full">
            <input
              type="text"
              placeholder="Sök bland våra produkter"
              className="w-full placeholder:text-neutral-800 placeholder:font-bold"
            />
            <Search width={24} />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto bg-white">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center p-4 hover:cursor-pointer hover:bg-gray-800 transition-colors mb-2 border-b border-neutral-500"
            activeProps={{
              className: "bg-cyan-200  hover:bg-neutral-200 transition-colors",
            }}
          >
            <p className="text-neutral-800 font-bold uppercase text-lg">
              Kategori
            </p>
          </Link>
        </nav>
      </aside>
    </>
  );
}

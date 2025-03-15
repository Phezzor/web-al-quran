import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed pt-2  bg-transparent">
            <div className="container mx-auto flex justify-end items-center">
                {/* Nav Desktop */}
                <ul className="hidden md:flex space-x-6 text-white font-semibold ">
                     <li className="hover:scale-110 transition duration-300">
                        <Link to="/Home" className="hover:text-[#1bf5d4]  transition duration-300 ">
                            Home
                        </Link>
                    </li>
                    <li className="hover:scale-110 transition duration-300">
                        <Link to="/quran" className="hover:text-[#1bf5d4]  transition duration-300 ">
                            Quran
                        </Link>
                    </li>
                    <li className="hover:scale-110 transition duration-300">
                        <Link to="/tafsir" className="hover:text-[#1bf5d4] transition duration-300">
                            Tafsir
                        </Link>
                    </li>
                    <li className="hover:scale-110 transition duration-300">
                        <Link to="/doa" className="hover:text-[#1bf5d4] transition duration-300">
                            Doa
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white text-2xl mr-5 mt-3  " onClick={() => setIsOpen(true)}>
                    <FiMenu />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 right-0 w-full h-2/3 rounded-xl bg-[#0E423D] shadow-lg transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Header Menu Tombol X */}
                    <div className="absolute top-4 w-full flex justify-between px-6">
                        <span className="text-white text-3xl font-semibold">Menu.</span>
                        <button className="text-white text-3xl" onClick={() => setIsOpen(false)}>
                            <FiX />
                        </button>
                    </div>

                    <ul className="pb-50 space-y-6 text-white font-semibold text-3xl mt-50 justify-items-center">
                        <li onClick={() => setIsOpen(false)}>
                            <Link to="/quran" className="hover:text-[#1bf5d4] rounded-xl p transition duration-300">
                                Quran
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <Link to="/tafsir" className=" hover:text-[#1bf5d4] transition duration-300">
                                Tafsir
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <Link to="/doa" className="hover:text-[#1bf5d4] transition duration-300">
                                Doa
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

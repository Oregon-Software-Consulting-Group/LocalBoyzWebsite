// src/menu/menu.js
import React from "react";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-lg font-semibold">
                    BrandName
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="#home" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link href="./info" className="text-gray-300 hover:text-white">
                        About
                    </Link>
                    <Link href="#services" className="text-gray-300 hover:text-white">
                        Services
                    </Link>
                    <Link href="#contact" className="text-gray-300 hover:text-white">
                        Contact
                    </Link>
                </div>
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-white">
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
}

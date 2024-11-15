"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Sidebar Overlay */}
            <div
                onClick={toggleSidebar}
                style={{
                    display: isOpen ? 'block' : 'none',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 40,
                }}
            ></div>

            {/* Sidebar */}
            <nav
                style={{
                    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s ease-in-out',
                    backgroundColor: '#1a1a1a',
                    width: '230px',
                    height: '100vh',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 50,
                    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
                    paddingTop: '60px', // Added padding to avoid overlap with the button
                }}
                className="p-6"
            >
                <div className="text-white text-2xl font-bold mb-8">
                    Local Boyz Hawaiian Cafe
                </div>
                <div className="flex flex-col space-y-4">
                    <Link href="./" className="text-white font-semibold hover:text-[#ff8b5f] transition-colors duration-200">
                        Home
                    </Link>
                    <Link href="./info" className="text-white font-semibold hover:text-[#ff8b5f] transition-colors duration-200">
                        About
                    </Link>
                    <Link href="./menu" className="text-white font-semibold hover:text-[#ff8b5f] transition-colors duration-200">
                        Menu
                    </Link>
                </div>
            </nav>

            {/* Sidebar Toggle Button */}
            <button
                onClick={toggleSidebar}
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    zIndex: 60,
                    width: '30px',               // Set the width to match the image size
                    height: '30px',              // Set the height to match the image size
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJDgRCK4YvFCUL_lv_Z-Zzf9EH9OksC9v7A&s)',
                    backgroundSize: 'cover',     // Make sure the image covers the entire button area
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: 'transparent'
                }}
            >
            </button>
        </>
    );
}

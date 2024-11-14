// import React from "react";
// import Link from "next/link";

// export default function NavBar() {
//     return (
//         <nav style={{ backgroundColor: '#ECD9BA' }} className="p-4"> {/* Changed background color */}
//             <div className="container mx-auto flex justify-between items-center">
//                 <Link href="/" className="text-gray-800 text-lg font-semibold">
//                     BrandName
//                 </Link>
//                 <div className="hidden md:flex space-x-6">
//                     <Link href="#home" style={{ color: '#FFA07A', fontWeight:'bold', textShadow: '2px 2px 4px #000000' }}>
//                         Home
//                     </Link>
//                     <Link href="./info" style={{ color: '#FFA07A' , fontWeight:'bold', textShadow: '2px 2px 4px #000000'}}>
//                         About
//                     </Link>
//                     <Link href="./menu" style={{ color: '#FFA07A', fontWeight:'bold', textShadow: '2px 2px 4px #000000' }}>
//                         Menu
//                     </Link>
//                     <Link href="#contact" style={{ color: '#FFA07A', fontWeight:'bold', textShadow: '2px 2px 4px #000000' }}>
//                         Contact
//                     </Link>
//                 </div>
//                 <div className="md:hidden">
//                     <button style={{ color: '#FFA07A' }}>
//                         ☰
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// }


import React from "react";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav style={{ backgroundColor: 'black' }} className="p-4"> {/* Changed background color */}
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-[#FFA07A] text-lg font-semibold">
                    Local Boyz Hawaiian Cafe
                </Link>

                <div className="hidden md:flex space-x-6">
                    <Link href="#home" style={{ color: '#FFA07A', fontWeight:'bold' }}>
                        Home
                    </Link>
                    <Link href="./info" style={{ color: '#FFA07A', fontWeight:'bold' }}>
                        About
                    </Link>
                    <Link href="./menu" style={{ color: '#FFA07A', fontWeight:'bold' }}>
                        Menu
                    </Link>
                </div>
                <div className="md:hidden">
                    <button style={{ color: '#FFA07A' }}>
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
}
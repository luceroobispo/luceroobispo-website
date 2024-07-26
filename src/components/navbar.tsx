"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 font-['Open_Sans']">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* TITLE */}
              <Link href="/">
                <h2 className="text-2xl text-pink_dark font-bold">luceroobispo.dev</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={"/images/close-icon.png"} width={60} height={60} alt="Close Navbar" />
                  ) : (
                    <Image src={"/images/hamburguer-icon.png"} width={50} height={50} alt="Open Navbar" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-pink_light border-pink_light  md:hover:text-pink_dark2 md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-pink_light border-pink_light  md:hover:text-pink_dark2  md:hover:bg-transparent">
                  <Link href="/projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

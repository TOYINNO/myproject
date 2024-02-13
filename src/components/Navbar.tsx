"use client";
import Link from "next/link";
import logo from "@/assests/logo-no-background.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const navBarList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Pages",
      link: "/pages",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Cart",
      link: "/cart",
    },
  ];

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-purple-400">
      <nav className="h-full max-w-screen-xl max-auto px-4 xl:px-0 flex items-center justify-around gap-5">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-60 flex-1" />
        </Link>
        <div className="hidden md:inline-flex items-center gap-2">
          {navBarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-purple-800 hover:underline underline-offset-4 decoration-[1px] hover:text-purple-300 duration-200 ${
                pathname === item?.link && "text-purple-400 underline"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <div className="relative hidden lg:inline-flex lg w-[600px] h-10 text-base text-primeColor border-[1px] border-purple-400 items-center gap-2 justify-between px-6 rounded-md">
          <input
            type="text"
            placeholder="Search your products here"
            className="flex-1 h-full outline-none bg-transparent placeholder: text-purple-700"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          {searchQuery ? (
            <IoCloseOutline
              onClick={() => setSearchQuery("")}
              className="w-5 h-5 hover:cursor-pointer "
            />
          ) : (
            <FaSearch className="w-5 h-5 hover:cursor-pointer " />
          )}
        </div>
        <HiMenu className="inline-flex md:hidden cursor-pointer w-8 h-6" />
      </nav>
    </div>
  );
}

export default Navbar;

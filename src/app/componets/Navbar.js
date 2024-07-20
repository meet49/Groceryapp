/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import facebook from "@/app/assets/img/facebook.png";
import insta from "@/app/assets/img/instagram.png";
import linkedin from "@/app/assets/img/linkedin.png";
import twitter from "@/app/assets/img/twitter.png";
import logo from "@/app/assets/img/LOGO.png";
import call from "@/app/assets/img/call.png";
import mail from "@/app/assets/img/mail.png";
import wish from "@/app/assets/img/Wishlist.png";
import shop from "@/app/assets/img/shop.png";
import drop from "@/app/assets/img/drop.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="flex justify-around py-1 gap-5">
        <div>
          <p className="font-poppins text-white text-[14px]">
            Welcome to the best TRoo Organic Grocery Store
          </p>
        </div>
        <div>
          <p className="font-poppins text-white text-[14px]">
            <b>50% </b>Clearance Sale
          </p>
        </div>
        <div className="flex gap-2 ">
          <p className="font-poppins text-white text-[14px]">Follow Us On</p>
          <p className="text-white text-[14px]">------</p>
          <div className=" bg-black inline w-2 h-2 lg:w-8 lg:h-8  f-back">
            <Image src={facebook} className="lg:mt-2 lg:ml-2" />
          </div>
          <div className=" inline w-2 h-2 lg:w-8 lg:h-8  i-back">
            <Image src={insta} className="lg:mt-2 lg:ml-2" />
          </div>
          <div className=" inline w-2 h-2 lg:w-8 lg:h-8  i-back">
            <Image src={linkedin} className="lg:mt-2 lg:ml-2" />
          </div>
          <div className=" inline w-2 h-2 lg:w-8 lg:h-8  i-back">
            <Image src={twitter} className="lg:mt-2 lg:ml-2" />
          </div>
        </div>
      </div>
      <div className="bg-white mx-1 p-5 flex flex-wrap justify-between gap-10">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src={logo}
              className="cursor-pointer"
              width={59}
              height={59}
              alt="Logo"
            />
          </Link>
          <p className="font-poppins text-[#EF682E] text-[28px] font-[275]">
            <b className="text-[#609E45] font-[700]">Organic</b>Grocery
          </p>
        </div>
        <div className="input-border ml-28 xl:inline-flex">
          <input
            type="text"
            placeholder="Search Your Products"
            className="w-[500px] p-3"
          />
          <button className="w-[85px] h-[40px] rounded-md bg-[#EF682E] text-white mr-1 mt-1">
            Search
          </button>
        </div>
        <div className="md:flex hidden gap-10">
          <div className="flex gap-2">
            <Image src={call} />
            <div>
              <p className="font-[16px]">Call Us on</p>
              <p className=" text-[#609E45] font-bold">+44 123 456 7890</p>
            </div>
          </div>
          <div className="flex gap-2 ">
            <Image src={mail} />
            <div>
              <p className="font-[16px]">Email Us</p>
              <p className="font-bold flex flex-wrap text-[#609E45] ">info@troothemes.com</p>
            </div>
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div className="md:hidden bg-white flex items-center justify-end mx-1">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

      ) : (
        <div className={` ${menuOpen ? 'hidden' : 'block'} md:hidden bg-white mx-1 flex items-center justify-end pr-2`}>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      )}
      <div className={`bg-white mx-1 md:flex py-5 px-20 justify-between ${menuOpen ? 'block' : 'hidden'}`}>
        <div >
          <ul className="flex flex-wrap gap-7 mt-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className="flex">
              <Link href="/ourproducts">Shop</Link>
              <Image src={drop} className="h-5 mt-1" />
            </li>
            <li className="flex">
              <Link href="/ourproducts">Products</Link>
              <Image src={drop} className="h-5 mt-1" />
            </li>
            <li className="flex">
              <Link href="/ourteam">Pages</Link>
              <Image src={drop} className="h-5 mt-1" />
            </li>
            <li>
              <Link href="/ourblog">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-1">
            <p className="mt-1 cursor-pointer">My Account</p>

            <Link href="/login">
              <Image src={drop} className="h-5 mt-2" />
            </Link>
          </div>

          <Link href="/comingsoon">
            <Image src={wish} className="cursor-pointer" />
          </Link>
          <Link href="/cart">
            <div className="relative  flex ">
              <Image src={shop} className="cursor-pointer " />
              <span class="animate-ping absolute  right-1 top-1 h-3 w-3 rounded-full bg-[#609E45] opacity-75"></span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
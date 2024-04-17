import React from "react";
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
  return (
    <>
      <div className="flex justify-around py-1">
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
        <div className="flex gap-2">
          <p className="font-poppins text-white text-[14px]">Follow Us On</p>
          <p className="text-white text-[14px]">------</p>
          <div className=" bg-black inline f-back">
            <Image src={facebook} className="mt-1" />
          </div>
          <div className=" inline i-back">
            <Image src={insta} className="mt-1" />
          </div>
          <div className=" inline i-back">
            <Image src={linkedin} className="mt-1" />
          </div>
          <div className=" inline i-back">
            <Image src={twitter} className="mt-1" />
          </div>
        </div>
      </div>
      <div className="bg-white mx-1 py-5 px-20 flex justify-between h-[82px]">
        <div className="flex gap-3 justify-center items-center">
          <Link href="/">
            <Image
              src={logo}
              className="cursor-pointer"
              width={"59"}
              height={"59"}
            />
          </Link>
          <p className="font-poppins text-[#EF682E] text-[28px] font-[275]">
            <b className="text-[#609E45] font-[700]">Organic</b>Grocery
          </p>
        </div>
        <div className="input-border ml-28">
          <input
            type="text"
            placeholder="Search Your Products"
            className="w-[500px] p-3"
          />
          <button className="w-[85px] h-[40px] rounded-md bg-[#EF682E] text-white mr-1">
            Search
          </button>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-2">
            <Image src={call} />
            <div>
              <p className="font-[16px]">Call Us on</p>
              <p className=" text-[#609E45] font-bold">+44 123 456 7890</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image src={mail} />
            <div>
              <p className="font-[16px]">Email Us</p>
              <p className="font-bold text-[#609E45]">info@troothemes.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mx-1 flex py-5 px-20 justify-between">
        <div>
          <ul className="flex gap-7 mt-1">
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
            <Image src={shop} className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

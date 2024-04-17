import React from "react";
import Image from "next/image";
import c1 from "@/app/assets/img/cart.png";
import c2 from "@/app/assets/img/cart1.png";
import c3 from "@/app/assets/img/cart2.png";
import p1 from "@/app/assets/img/pro8.png";
import p2 from "@/app/assets/img/pro2.png";
import Link from "next/link";

function Cartpage() {
  return (
    <div className="bg-[url('../app/assets/img/bg9.png')] bg-no-repeat bg-white py-20">
      <div className="px-40 py-10 flex justify-center">
        <div className="px-12 w-[1300px] bg-gray-100  h-[158px] py-12 rounded-md">
          <div className="bg-[url('../app/assets/img/bg8.png')] bg-no-repeat bg-center flex items-center justify-between rounded-md ">
            <div className="w-[54px] h-[54px] bg-[#EF682E] rounded-[50%] border-8 border-[#ffddce33]">
              <Image src={c1} className="ml-2 pt-2" />
            </div>
            <div className="w-[54px] h-[54px] bg-[#609E45] rounded-[50%] border-8 border-[#8bb27b]">
              <Image src={c2} className="ml-2 pt-2" />
            </div>
            <div className="w-[54px] h-[54px] bg-[#EF682E] rounded-[50%] border-8 border-[#ffddce33]">
              <Image src={c3} className="ml-2 pt-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 rounded-md">
        <div>
          <div className="h-[298px] w-[857px] bg-gray-100 p-10 rounded-md mb-5">
            <div className="flex justify-between">
              <p className="text-lg font-semibold">Product Name</p>
              <div className="flex gap-10">
                <p className="text-lg font-semibold">Price</p>
                <p className="text-lg font-semibold">Quantity</p>
                <p className="text-lg font-semibold">Subtotal</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between">
              <div className="flex  items-center gap-5">
                <p className="text-[#DD4C4C] border-2 border-[#DD4C4C] rounded-[50%] w-5 h-5 pl-1 pb-6">
                  x
                </p>
                <Image src={p1} height={"76"} width={"76"} />
                <p>Fresh Organic Mango</p>
              </div>

              <div className="flex gap-12 items-center">
                <p>$20.00</p>
                <p>
                  <select className=" bg-gray-100 w-[82px] h-[60px] rounded-md outline-none border">
                    <option value="1Kg">1Kg</option>
                    <option value="2Kg">2Kg</option>
                    <option value="3Kg">3Kg</option>
                  </select>
                </p>
                <p>$20.00</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex  items-center gap-5">
                <p className="text-[#DD4C4C] border-2 border-[#DD4C4C] rounded-[50%] w-5 h-5 pl-1 pb-6">
                  x
                </p>
                <Image src={p2} height={"76"} width={"76"} />
                <p>Fresh Organic Cabbage</p>
              </div>

              <div className="flex gap-12 items-center">
                <p>$40.00</p>
                <p>
                  <select className=" bg-gray-100 w-[82px] h-[60px] rounded-md outline-none border">
                    <option value="1Kg">1Kg</option>
                    <option value="5Kg">5Kg</option>
                    <option value="10Kg">10Kg</option>
                  </select>
                </p>
                <p>$40.00</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-[380px] h-[60px] border pl-5"
            />
            <button className="w-[134px] h-[60px] font-bold text-white bg-[#609E45] rounded-md ">
              Apply Now
            </button>
          </div>
        </div>
        <div className="w-[413px] bg-gray-100 p-8">
          <h1 className="font-bold text-lg ">Cart totals</h1>
          <hr />
          <div className="flex justify-between py-3">
            <p>Subtotal</p>
            <p>$60.00</p>
          </div>
          <div className="w-[361px] h-[182px] bg-white rounded-md flex flex-col justify-around p-5 ">
            <h1 className="font-semibold">Shipping</h1>
            <div className="flex justify-between">
              <p>Flat rate</p>
              <p>$60.00</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping to</p>
              <p>Mumbai</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping Charge</p>
              <p>$10.00</p>
            </div>
          </div>
          <div className="flex justify-between py-3">
            <p>Grand Total</p>
            <p>$70.00</p>
          </div>
          <Link href="/checkout">
            <button className="w-[361px] h-[50px] bg-[#609E45] text-white text-center rounded-md mb-5">
              Proceed to checkout
            </button>
          </Link>
          <Link href="/ourproducts">
            <button className="w-[361px] h-[50px] bg-black text-white text-center rounded-md">
              Continue Shopping
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Cartpage;

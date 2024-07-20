import React from "react";
import Image from "next/image";
import c1 from "@/app/assets/img/cart.png";
import c2 from "@/app/assets/img/cart1.png";
import c3 from "@/app/assets/img/cart2.png";
import Link from "next/link";

function Checkoutpage() {
  return (
    <div className="bg-[url('../app/assets/img/bg10.png')] bg-no-repeat bg-white">
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
      <div className="flex flex-wrap justify-center gap-6 pb-10">
        <div className="lg:w-[857px] 2xl:h-[1006px] bg-gray-100 flex flex-col gap-5 p-10 rounded-md">
          <h1 className="font-semibold text-xl">Billing details</h1>
          <hr />
          <div className="flex flex-col  gap-6">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col lg:w-[383px] gap-3">
                <lable>First Name</lable>
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 bg-gray-100"
                ></input>
              </div>
              <div className="flex flex-col lg:w-[383px] gap-3">
                <lable>Last Name</lable>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 bg-gray-100"
                ></input>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col lg:w-[383px] gap-3">
                <lable>Phone Number</lable>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 bg-gray-100"
                ></input>
              </div>
              <div className="flex flex-col lg:w-[383px] gap-3">
                <lable>Email Address</lable>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 bg-gray-100"
                ></input>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row  gap-5">
              <div className="flex flex-col lg:w-[383px] gap-3">
                <lable>Country / Region</lable>
                <input
                  type="text"
                  placeholder="Country / Region"
                  className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 bg-gray-100"
                ></input>
              </div>
              <div className="flex flex-col lg:w-[383px] gap-3">
                <lable>Street address</lable>
                <input
                  type="text"
                  placeholder="Street address"
                  className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 bg-gray-100"
                ></input>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row  gap-5">
              <div className="flex flex-col lg:w-[383px] gap-3">
                <lable>Town / City</lable>
                <input
                  type="text"
                  placeholder="Town / City"
                  className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 bg-gray-100"
                ></input>
              </div>
              <div className="flex flex-col lg:w-[383px] gap-3">
                <lable>State</lable>
                <input
                  type="text"
                  placeholder="State"
                  className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 bg-gray-100"
                ></input>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col lg:w-[383px] gap-3 ">
                <lable>ZIP Code</lable>
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 bg-gray-100"
                ></input>
              </div>
              <div className="flex flex-col lg:w-[383px] gap-3">
                <lable>Company Name (optional)</lable>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 bg-gray-100"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-3">
                <lable>Order notes (optional)</lable>
                <input
                  type="text"
                  placeholder="Order notes"
                  className="h-[160px] rounded-md border hover:border-[#609E4533] outline-none pl-3 bg-gray-100"
                ></input>
              </div>
            </div>

            <div>
              <input type="checkbox" />
              <p className="inline pl-2">Ship to a different address?</p>
            </div>
          </div>
        </div>


        <div className="ms:w-[413px] h-[895px] bg-gray-100 p-10 mx-5  flex flex-col justify-between rounded-md">
          <h1 className="font-bold text-xl">Your order</h1>
          <hr />
          <p className="font-semibold text-base">Product</p>
          <div className="flex justify-between">
            <p>Fresh Mango - 2 KG× 1</p>
            <p>$20.00</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Organic Vabbage 5 KG× 1</p>
            <p>$40.00</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$498.00</p>
          </div>
          <div className="ms:w-[361px] h-[182px] bg-white rounded-md flex flex-col justify-around ms:p-5 ">
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
          <div className="flex justify-between">
            <p>Grand Total</p>
            <p>$508.00</p>
          </div>
          <div>
            <input type="radio" name="pay" />
            <p className="inline font-semibold pl-2">Direct bank transfer</p>
          </div>
          <div>
            <input type="radio" name="pay" />
            <p className="inline font-semibold pl-2">Check payments</p>
            <p className="text-justify pl-5">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
          </div>
          <div>
            <input type="radio" name="pay" />
            <p className="inline font-semibold pl-2">Cash on delivery</p>
          </div>
          <Link href="thankyou">
            <button className="ms:w-[361px] h-[50px] bg-[#609E45] text-white rounded-md">Place Order</button>
          </Link>

        </div>
      </div>
      <div className="bg-[#fee2d6] flex flex-col justify-center items-center text-center py-10 lg:h-[350px] ">
        <p className="font-bold text-4xl mb-5">Subscribe to newsletter</p>
        <p className="lg:w-[599px] text-base mb-5">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex`}</p>
        <div className="lg:w-[765px] flex lg:justify-between gap-5 justify-center flex-wrap">
          <input type="text" placeholder="Your Name" className="bg-[#fee2d6] border-[#ffac88] border h-[60px] w-[175px]  rounded-md p-2" />
          <input type="email" placeholder="Enter Your Email" className="bg-[#fee2d6] border-[#ffac88] border h-[60px] lg:w-[380px] rounded-md p-2" />
          <button className="p-2 h-[60px] w-[150px] border bg-[#609E45] text-white rounded-md font-poppins font-semibold text-base">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
}

export default Checkoutpage;

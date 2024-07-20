import React from 'react'
import Image from 'next/image';
import p1 from '@/app/assets/img/pro3.png'
import cart from '@/app/assets/img/cart.png'
import i2 from '@/app/assets/img/ai2.png'



function Productdetails() {
  return (
    <div className="bg-white">
      <div className="flex justify-center flex-wrap gap-5 py-10 bg-white">
        <div className="w-[413.25px] h-[643.25px]">
          <Image src={p1} width={"413"} height={"525"} className="bg-gray-100 rounded-md" />
          <div className="flex justify-between mt-5">
            <Image src={p1} width={"88"} height={"88"} className="bg-gray-100 rounded-md transform scale-x-[-1]" />
            <Image src={p1} width={"88"} height={"88"} className="bg-gray-100 rounded-md transform scale-x-[-1] -rotate-180" />
            <Image src={p1} width={"88"} height={"88"} className="bg-gray-100 rounded-md " />
            <Image src={p1} width={"88"} height={"88"} className="bg-gray-100 rounded-md transform rotate-180" />
          </div>
        </div>
        <div className="lg:w-[857px] lg:h-[643px] h-screen  bg-gray-100 flex flex-col justify-between p-10 rounded-md">
          <div className='flex justify-between'>
            <p className="text-base">Availability:<b className="font-bold text-[#609E45]">In Stock</b></p>
            <pre className="font-bold text-yellow-400 text-xl inline">&#9733;&#9733;&#9733;&#9733;&#9733; <p className="text-black text-sm font-poppins inline">( 10 Review )</p></pre>
          </div>
          <h1 className="text-2xl font-bold">Fresh Yellow Orange </h1>
          <b className="text-2xl"><del className="font-normal text-base">$10.00 </del>$08.00</b>
          <p className="text-justify lg:w-[725px]">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, words which don't look even slightly believable.There are many.`}</p>
          <hr />
          <div className='flex flex-wrap  gap-5'>
            <div className="flex flex-col w-[60px]">
              <lable>QTY</lable>
              <select className="w-[60px] h-[60px] bg-gray-100 border border-[#2020201A] text-center rounded-md outline-none" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="flex flex-col w-[200px]">
              <lable>Size</lable>
              <select className="w-[200px] h-[60px] bg-gray-100 border border-[#2020201A] text-center rounded-md outline-none" >
                <option value="Midium">Midium</option>
                <option value="Small">Small</option>
                <option value="large">large</option>
              </select>
            </div>

            <div className="flex flex-col w-[200px]">
              <lable>Weight</lable>
              <select className="w-[200px] h-[60px] bg-gray-100 border border-[#2020201A] text-center rounded-md outline-none" >
                <option value="1Kg">1Kg</option>
                <option value="2Kg">2Kg</option>
                <option value="3Kg">3Kg</option>
                <option value="4Kg">4Kg</option>
                <option value="5Kg">5Kg</option>
              </select>
            </div>

          </div>
          <hr />
          <button className="w-[150px] h-[50px] rounded-md bg-[#609E45] text-white mr-1 text-center text-[16px] flex justify-center gap-2 items-center cursor-pointer "><Image src={cart} />Add to Cart</button>
          <div>
            <p className="text-[15px] pb-1">SKU:<b className="font-semibold text-[#EF682E] ">D2300-2</b> </p>
            <p className="text-[15px] pb-1">CATEGORIES:<b className="font-semibold text-[#EF682E]">CLOTHING, DEAL OF WEEK, WOMEN</b> </p>
            <p className="text-[15px] pb-1">TAGS:<b className="font-semibold text-[#EF682E]">Hot,Trend</b> </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:w-[1300px] gap-3 p-10 justify-center 2xl:ml-60">
        <div className="flex gap-5">
          <p className="hover:text-[#609E45]">Description </p>
          <p className="hover:text-[#609E45]">Review (1)</p>
          <p className="hover:text-[#609E45]">Additional information</p>
        </div>
        <hr />
        <div className="bg-gray-100 xl:h-[274px] p-10">
          <p>Lower temperature washes and delicate spin cycles are gentler on garment, helping to maintain the color, shape and structure of the fabric. At the same
            time it reduces energy consumption that is used in care processes. are gentler on garment, helping to maintain the color.</p>
          <h1 className="font-semibold text-[#609E45] text-base">Benefits</h1>
          <div className="flex flex-wrap gap-10 xl:gap-20 pt-8">
            <div>
              <div className="flex gap-5 mb-3">
                <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                <p className="w[468px]">Emergency response time is one hour or less guaranteed.</p>
              </div>
              <div className="flex gap-5 mb-3">
                <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                <p>Until the eleifend elit is a lot of great facilities.</p>
              </div>
              <div className="flex gap-5 mb-3">
                <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                <p>Lorem Ipsum is simply dummy text </p>
              </div>
            </div>

            <div>
              <div className="flex gap-5 mb-3">
                <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                <p className="w[468px]">Emergency response time is one hour or less guaranteed.</p>
              </div>
              <div className="flex gap-5 mb-3">
                <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                <p>Until the eleifend elit is a lot of great facilities.</p>
              </div>
              <div className="flex gap-5 mb-3">
                <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                <p>Lorem Ipsum is simply dummy text </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productdetails

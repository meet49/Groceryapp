/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import person1 from '@/app/assets/img/person1.png'
import bag from '@/app/assets/img/bag.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Banner1() {
  return (
    <div>
      <div className=" flex  relative flex-wrap items-center md:justify-between justify-center">
        <Image src={person1} className="2xl:h-[529px] mt-9 lg:h-[400px] h-[320px] w-[300px]" />
        <div className="text-white flex flex-col justify-center text-center pb-5">
          <p className="text-[16px] mt-5">Awesome Products</p>
          <p className="font-poppins font-bold text-[36px] mt-5" >Get Up to 15% Off Vegetables</p>
          <p className=" text-2xl mt-5">We supply hight quality organic product</p>
          <div className="flex gap-5 justify-center mt-5">
            <Link href="/ourproducts">
              <button className="w-[118px] h-[50px] bg-white text-[#609E45] rounded-md font-poppins font-semibold text-base">Shop Now</button>
            </Link>
            <Link href="/contact"><button className="w-[118px] h-[50px]  text-white border border-white rounded-md font-poppins font-semibold text-base">Contact Us</button></Link>
          </div>
        </div>
        <Image src={bag} className="2xl:w-[525px] xl:w-[425px] lg:w-[325px] md:w-[220px] w-[215px]" />
      </div>
    </div>
  )
}

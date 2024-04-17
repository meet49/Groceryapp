import React from 'react'
import person1 from '@/app/assets/img/person1.png'
import bag from '@/app/assets/img/bag.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Banner1() {
  return (
    <div>
      <div className=" flex justify-between relative">
        <Image src={person1} className="h-[529px] mt-9" />
        <div className="text-white flex flex-col justify-center text-center">
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
        <Image src={bag} className="w-[525px]" />
      </div>
    </div>
  )
}

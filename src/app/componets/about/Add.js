import React from 'react'
import Image from 'next/image';
import android from '@/app/assets/img/android.png'
import apple from '@/app/assets/img/apple.png'
import phone from '@/app/assets/img/phone.png'
import phonebg from '@/app/assets/img/phonebg.png'
import logo1 from '@/app/assets/img/logo1.png'
import logo2 from '@/app/assets/img/logo2.png'
import logo3 from '@/app/assets/img/logo3.png'
import logo4 from '@/app/assets/img/logo4.png'
import logo5 from '@/app/assets/img/logo5.png'
import logo6 from '@/app/assets/img/logo6.png'

export default function Add() {
  return (
    <div className="relative">
      <div className="flex flex-wrap  justify-center  bg-[url('../app/assets/img/bgg1.png')] bg-[#609E45] lg:justify-around lg:left-36 xl:left-60 rounded-xl xl:h-[500px] items-center absolute  top-[-200px] 2xl:left-80 2xl:px-40 ">
        <div className="text-white">
          <p className="text-2xl 2xl:w-[460px] mb-5">Shopping for vegetables & fruits is easier with</p>
          <p className="text-2xl font-bold mb-5">TRoo Grocery App</p>
          <p className="text-xl mb-5">Available on Both Android and ios</p>
          <button><Image src={android} className="mr-5" /></button>
          <button><Image src={apple} /></button>
        </div>
        <div className="relative py-10">
          <Image src={phonebg} />
          <Image src={phone} className="absolute  right-5 bottom-5  h-96 w-80 sm:h-[400px] sm:w-96 lg:h-[440px] lg:w-[246px] lg:bottom-0 lg:right-20 lg:top-[-20px]" />
        </div>
      </div>
      <div className="flex justify-center pt-96 pb-20 bg-white">
        <div className="flex justify-between flex-col">
          <button className="bg-[#609E45] text-white px-3 rounded-md font-poppins w-44">Our Trusted Partner</button>
          <p className="text-4xl font-bold text-[#EF682E] w-[385px]">We have 523+ more trusted partner</p>
          <p className="w-[408px]">There are many variations of passages of Lorem Ipsum available, but the majority.</p>
          <button className="p-2 h-[50px] w-[176px] border bg-[#EF682E] text-white rounded-md font-poppins font-semibold text-base">Become a Partner</button>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-10 ">
            <Image src={logo1} className="cursor-pointer" />
            <Image src={logo2} className="cursor-pointer" />
            <Image src={logo3} className="cursor-pointer" />
            <Image src={logo4} className="cursor-pointer" />
            <Image src={logo5} className="cursor-pointer" />
            <Image src={logo6} className="cursor-pointer" />
            <Image src={logo5} className="cursor-pointer" />
            <Image src={logo6} className="cursor-pointer" />
            <Image src={logo5} className="cursor-pointer" />
            <Image src={logo6} className="cursor-pointer" />
            <Image src={logo5} className="cursor-pointer" />
            <Image src={logo6} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

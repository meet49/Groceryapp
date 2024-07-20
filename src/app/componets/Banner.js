/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image';

import men from '@/app/assets/img/men.png'
import f1 from '@/app/assets/img/f1.png'
import f2 from '@/app/assets/img/f2.png'
import thumb from '@/app/assets/img/thumbs.png'
import truck from '@/app/assets/img/truck.png'

function Banner() {
  return (
    <div>
      <div className=" bg-white mx-1  h-[2300px] md:h-[1500px]  lg:h-[1200px] 2xl:h-[800px] bg-[url('../app/assets/img/bg1.png')] bg-cover bg-no-repeat relative">
        <div className="absolute bottom-0 lg:bottom-0">
          <Image src={men} />
        </div>
        <div className=" lg:h-[442px] lg:w-[606px] flex flex-col justify-between p-5 sm:w-[650px] 2xl:absolute 2xl:left-80 2xl:bottom-52">
          <button className="bg-[#609E45] text-white px-3 rounded-md font-poppins w-52">We are more then faster</button>
          <p className="text-[60px] font-bold text-[#609E45]">The right store  with The right Price</p>
          <p className="text-[20px] lg:w-[550px]">{`Lorem ipsum dolor sit amen, consectetur adipescent alit, sed do eiusmod tempor incident ut labored et dolore magna aliquant. Et ejecta's quiz.`}</p>
          <button className="w-[118px] h-[40px] rounded-md bg-[#EF682E] text-white mr-1">Shop Now</button>
        </div>
        <div className="relative md:absolute md:left-0 md:top-96  lg:right-0 lg:top-0 lg:p-96 2xl:bottom-0 2xl:p-0 2xl:top-20">
          <div className=" flex flex-col items-center md:flex md:flex-row md:w-[800px] lg:absolute lg:right-32 ">
            <Image src={f1} className="mb-28 " />
            <Image src={f2} className="mt-28" />
          </div>
          <div className="absolute right-5 top-0 md:right-96 md:bottom-24 lg:absolute lg:right-80 lg:top-96  2xl:right-80 2xl:top-[475px] 2xl:w-[298px] flex h-[70px] w-[250px] bg-white gap-6 px-5 rounded-md">
            <Image src={thumb} className="bg-gray-200 rounded-[50%] h-fit mt-5 " />
            <p className="mt-6">Best quality products </p>
          </div>
          <div className="absolute bottom-20 right-10 md:right-80 md:top-[400px] lg:absolute lg:right-[350px] lg:top-[800px] h-[192px] w-[173px]  2xl:right-[350px] 2xl:top-2 bg-white gap-6 px-7 rounded-md">
            <p className="mt-6 text-center">Stay home & get your daily needs</p>
            <Image src={truck} className="bg-gray-200 rounded-[50%] h-fit mt-5 items-center ml-10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

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
      <div className=" bg-white mx-1 h-[785px] mt-[2.5px] bg-[url('../app/assets/img/bg1.png')] bg-no-repeat static">
          <div className="absolute bottom-[-27px]">
            <Image src={men} />
          </div>
          <div className="h-[442px] w-[606px] flex flex-col justify-between absolute left-80 bottom-52">
            <button className="bg-[#609E45] text-white px-3 rounded-md font-poppins w-52">We are more then faster</button>
            <p className="text-[60px] font-bold text-[#609E45]">The right store  with The right Price</p>
            <p className="text-[20px] w-[550px]">Lorem ipsum dolor sit amen, consectetur adipescent alit, sed do eiusmod tempor incident ut labored et dolore magna aliquant. Et ejecta's quiz.</p>
            <button className="w-[85px] h-[40px] rounded-md bg-[#EF682E] text-white mr-1">Search</button>
          </div>
          <div className="absolute right-0 bottom-0">
            <div className="flex ">
              <Image src={f1} className="mb-28" />
              <Image src={f2} className="mt-28" />
            </div>
            <div className="absolute right-80 bottom-24 flex h-[70px] w-[298px] bg-white gap-6 px-7 rounded-md">
              <Image src={thumb} className="bg-gray-200 rounded-[50%] h-fit mt-5 " />
              <p className="mt-6">Best quality products </p>
            </div>
            <div className="absolute right-[350px] top-2 h-[192px] w-[173px] bg-white gap-6 px-7 rounded-md">
              <p className="mt-6 text-center">Stay home & get your daily needs</p>
              <Image src={truck} className="bg-gray-200 rounded-[50%] h-fit mt-5 items-center ml-10" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner

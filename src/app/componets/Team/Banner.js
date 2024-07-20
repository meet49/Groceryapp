/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import men from '@/app/assets/img/men.png'

function Banner() {
  return (
    <div>
      <div className=" bg-white mx-1 h-[287px]  bg-[url('../app/assets/img/bg2.png')] bg-no-repeat bg-cover relative">
        <div className="absolute bottom-0 md:w-[268px] md:h-[268px] h-[160px] w-[160px]">
          <Image src={men} height={"268"} />
        </div>
        <div className="h-[442px] flex flex-col pt-24 items-center left-80 bottom-52">
          <p className="text-[24px] font-bold text-[#609E45]">Meet our team member</p>
          <div>
            <p className="text-[16px] inline-block ">Home -</p>
            <p className="text-[16px] text-[#EF682E] inline-block">Our Team</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner

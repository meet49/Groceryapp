import React from 'react'
import Image from 'next/image'
import men from '@/app/assets/img/men.png'

function Banner() {
  return (
    <div>
      <div className=" bg-white mx-1 h-[287px] mt-[2.5px] bg-[url('../app/assets/img/bg2.png')] bg-no-repeat static">
        <div className="absolute top-[212px]">
          <Image src={men} height={"268"} />
        </div>
        <div className="h-[442px] flex flex-col pt-24 items-center left-80 bottom-52">
          <p className="text-[24px] font-bold text-[#609E45]">Our organic products</p>
          <div>
            <p className="text-[16px] inline-block ">Home -</p>
            <p className="text-[16px] text-[#EF682E] inline-block">Shop</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner

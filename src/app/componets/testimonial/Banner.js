import React from 'react'
import Image from 'next/image'
import men from '@/app/assets/img/men.png'
import t1 from '@/app/assets/img/_11.png'
import t2 from '@/app/assets/img/_12.png'
import t3 from '@/app/assets/img/_21.png'
import t4 from '@/app/assets/img/_22.png'
import t5 from '@/app/assets/img/_32.png'
import t6 from '@/app/assets/img/t1.png'
import t7 from '@/app/assets/img/t2.png'
import t8 from '@/app/assets/img/t3.png'
import t9 from '@/app/assets/img/t4.png'
import t10 from '@/app/assets/img/t5.png'
import t11 from '@/app/assets/img/t6.png'

function Banner() {
  return (
    <div>
      <div className=" bg-white mx-1 h-[287px] mt-[2.5px] bg-[url('../app/assets/img/bg2.png')] bg-no-repeat static">
        <div className="absolute top-[212px]">
          <Image src={men} height={"268"} />
        </div>
        <div className="h-[442px] flex flex-col pt-24 items-center left-80 bottom-52">
          <p className="text-[24px] font-bold text-[#609E45]">What our clients say about us</p>
          <div>
            <p className="text-[16px] inline-block ">Home -</p>
            <p className="text-[16px] text-[#EF682E] inline-block">Testimonial</p>
          </div>
        </div>

      </div>
      <div className="bg-white">
        <div className="flex justify-center gap-8 pt-10 ">
          <div className='flex flex-col justify-around items-center text-center w-[381px] h-[451px] border-8 border-[#f7f0f0] hover:border-[#609E45] rounded-md'>
            <Image src={t1} />
            <p className="w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
            <Image src={t2} />
            <div>
              <p className="font-bold text-[20px] text-[#609E45]">Vilma Hawkins</p>
              <p>Customer</p>
            </div>
          </div>

          <div className='flex flex-col justify-around items-center text-center w-[381px] h-[451px] border-8 border-[#f7f0f0] hover:border-[#609E45] rounded-md'>
            <Image src={t3} />
            <p className="w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
            <Image src={t4} />
            <div>
              <p className="font-bold text-[20px] ">Tonny Hensley</p>
              <p>Customer</p>
            </div>
          </div>

          <div className='flex flex-col justify-around items-center text-center w-[381px] h-[451px] border-8 border-[#f7f0f0] hover:border-[#609E45] rounded-md'>
            <Image src={t3} />
            <p className="w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
            <Image src={t5} />
            <div>
              <p className="font-bold text-[20px]">Victoria Roach</p>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 pt-10">
          <div className='flex flex-col justify-around items-center text-center w-[381px] h-[451px] border-8 border-[#f7f0f0] hover:border-[#609E45] rounded-md'>
            <Image src={t3} />
            <p className="w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
            <Image src={t6} />
            <div>
              <p className="font-bold text-[20px] text-[#609E45]">Lynn O’Leeum</p>
              <p>Customer</p>
            </div>
          </div>

          <div className='flex flex-col justify-around items-center text-center w-[381px] h-[451px] border-8 border-[#f7f0f0] hover:border-[#609E45] rounded-md'>
            <Image src={t3} />
            <p className="w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
            <Image src={t7} />
            <div>
              <p className="font-bold text-[20px] ">Isabelle Ringing</p>
              <p>Customer</p>
            </div>
          </div>

          <div className='flex flex-col justify-around items-center text-center w-[381px] h-[451px] border-8 border-[#f7f0f0] hover:border-[#609E45] rounded-md'>
            <Image src={t3} />
            <p className="w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
            <Image src={t8} />
            <div>
              <p className="font-bold text-[20px]">Chris Anthemum</p>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-10 pb-10">
          <div className='flex flex-col justify-around items-center text-center w-[381px] h-[451px] border-8 border-[#f7f0f0] hover:border-[#609E45] rounded-md'>
            <Image src={t3} />
            <p className="w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
            <Image src={t9} />
            <div>
              <p className="font-bold text-[20px] text-[#609E45]">Allie Grater</p>
              <p>Customer</p>
            </div>
          </div>

          <div className='flex flex-col justify-around items-center text-center w-[381px] h-[451px] border-8 border-[#f7f0f0] hover:border-[#609E45] rounded-md'>
            <Image src={t3} />
            <p className="w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
            <Image src={t10} />
            <div>
              <p className="font-bold text-[20px] ">Rose Bush</p>
              <p>Customer</p>
            </div>
          </div>

          <div className='flex flex-col justify-around items-center text-center w-[381px] h-[451px] border-8 border-[#f7f0f0] hover:border-[#609E45] rounded-md'>
            <Image src={t3} />
            <p className="w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
            <Image src={t11} />
            <div>
              <p className="font-bold text-[20px]">Jack Aranda</p>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner

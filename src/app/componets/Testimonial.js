import React from 'react'
import Image from 'next/image';
import i1 from '@/app/assets/img/i1.png'
import t1 from '@/app/assets/img/_11.png'
import t2 from '@/app/assets/img/_12.png'
import t3 from '@/app/assets/img/_21.png'
import t4 from '@/app/assets/img/_22.png'
import t5 from '@/app/assets/img/_32.png'

export default function Testimonial() {
  return (
    <div>
      <div className="bg-white">
          <div className="flex flex-wrap  pl-10 gap-5 pt-24 lg:flex-nowrap xl:ml-40 xl:justify-between  xl:w-[1280px] 2xl:ml-56">
            <div>
              <button className="bg-[#609E45] text-white px-3 rounded-md font-poppins w-38">Our Testimonial</button>
              <p className="font-bold text-[#EF682E] text-[36px] mt-6 w-80">Our customers love what we do.</p>
            </div>
            <Image src={i1} className="hidden md:block md:h-20 lg:h-24 xl:h-32" />
            <p className="w-[280px] text-[16px] lg:w-[400px] xl:w-[510px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some and form, by injected humor, or randomized words.</p>
          </div>
          <div className="flex justify-center flex-wrap gap-8 mt-10 pb-96 px-10">
            <div className='flex flex-col justify-around items-center text-center w-[300px] sm:w-[381px] h-[451px] border-8 border-[#609E45] rounded-md'>
              <Image src={t1} />
              <p className="text-justify px-2 sm:w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
              <Image src={t2} />
              <div>
                <p className="font-bold text-[20px] text-[#609E45]">Vilma Hawkins</p>
                <p>Customer</p>
              </div>
            </div>

            <div className='flex flex-col justify-around items-center text-center w-[300px] sm:w-[381px] h-[451px] border-8 border-[#f7f0f0] hover:border-[#609E45] rounded-md'>
              <Image src={t3} />
              <p className="text-justify px-2 sm:w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
              <Image src={t4} />
              <div>
                <p className="font-bold text-[20px] ">Tonny Hensley</p>
                <p>Customer</p>
              </div>
            </div>

            <div className='flex flex-col justify-around items-center text-center  w-[300px] sm:w-[381px] h-[451px] border-8 border-[#f7f0f0] hover:border-[#609E45] rounded-md'>
              <Image src={t3} />
              <p className="text-justify px-2 sm:w-[333px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
              <Image src={t5} />
              <div>
                <p className="font-bold text-[20px]">Victoria Roach</p>
                <p>Customer</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

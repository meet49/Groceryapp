import React from 'react'
import Image from 'next/image';
import p1 from '@/app/assets/img/c1.png'
import p2 from '@/app/assets/img/c2.png'
import p3 from '@/app/assets/img/c3.png'
import p4 from '@/app/assets/img/c4.png'
import p5 from '@/app/assets/img/c5.png'
import p6 from '@/app/assets/img/c6.png'
import p7 from '@/app/assets/img/c7.png'
import p8 from '@/app/assets/img/c8.png'
import a1 from '@/app/assets/img/Icon.png'

const Categories = () => {
  return (
    <div>
       <div className="bg-gray-100 h-[637px] relative">
          <div className="flex justify-between w-[1298px] h-[111px] ml-64 pt-24 pl-9">
            <div>
              <button className="bg-[#609E45] text-white px-3 rounded-md font-poppins w-38">Hot Categories</button>
              <p className="font-bold text-[#EF682E] text-[36px] mt-6">Browse Our Categories</p>
            </div>
            <div>
              <p className="w-[510px] text-[16px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
          </div>
          <div className="flex justify-center gap-5 absolute bottom-28 pl-72 ">
            <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative">
              <Image src={p1} className="" />
              <p className="font-bold">Vegetable</p>
              <p>25+ Products</p>
              <Image src={a1} className="absolute bottom-[-15px]" />
            </div>
            <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center">
              <Image src={p2} />
              <p className="font-bold">Vegetable</p>
              <p>25+ Products</p>
            </div>
            <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center">
              <Image src={p3} />
              <p className="font-bold">Vegetable</p>
              <p>25+ Products</p>
            </div>
            <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center">
              <Image src={p4} />
              <p className="font-bold">Vegetable</p>
              <p>25+ Products</p>
            </div>
            <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center">
              <Image src={p5} />
              <p className="font-bold">Vegetable</p>
              <p>25+ Products</p>
            </div>
            <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center">
              <Image src={p6} />
              <p className="font-bold">Vegetable</p>
              <p>25+ Products</p>
            </div>
          </div>
          <Image src={p7} className="absolute bottom-0 right-0" />
          <Image src={p8} className="absolute top-14" />
        </div>
    </div>
  )
}

export default Categories

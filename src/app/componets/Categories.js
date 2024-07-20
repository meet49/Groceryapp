/* eslint-disable jsx-a11y/alt-text */
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
import Link from 'next/link';

const Categories = () => {
  return (
    <div>
      <div className="bg-gray-100 xl:h-[637px] relative">
        <div className="flex justify-between xl:justify-around  flex-wrap gap-5 xl:ml-14 pt-24 pl-9">
          <div>
            <button className="bg-[#609E45] text-white px-3 rounded-md font-poppins w-38">Hot Categories</button>
            <p className="font-bold text-[#EF682E] text-[36px] mt-6">Browse Our Categories</p>
          </div>
          <div>
            <p className=" text-[16px] justify-center  items-centerflex flex-wrap lg:w-[510px] lg:pr-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 items-center px-5 py-5 pb-10">
          <div id="box1" class="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative">
            <Image src={p1} />
            <p class="font-bold">Vegetable</p>
            <p>25+ Products</p>
            <Link href="/ourproducts">
              <Image src={a1} id="btn1" class=" hidden absolute bottom-[-15px]" />
            </Link>
          </div>

          <div id="box1" class="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative">
            <Image src={p2} />
            <p class="font-bold">Fresh Fruits</p>
            <p>85+ Products</p>
            <Link href="/ourproducts">
              <Image src={a1} id="btn1" class="absolute bottom-[-15px] hidden" />
            </Link>
          </div>


          <div id="box1" class="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative">
            <Image src={p3} />
            <p class="font-bold">Beverages</p>
            <p>68+ Products</p>
            <Link href="/ourproducts">
              <Image src={a1} id="btn1" class="absolute bottom-[-15px] hidden" />
            </Link>
          </div>


          <div id="box1" class="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative">
            <Image src={p4} />
            <p class="font-bold">Sea Food</p>
            <p>29+ Products</p>
            <Link href="/ourproducts">
              <Image src={a1} id="btn1" class="absolute bottom-[-15px] hidden" />
            </Link>
          </div>

          <div id="box1" class="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative">
            <Image src={p5} />
            <p class="font-bold">Package Food</p>
            <p>68+ Products</p>
            <Link href="/ourproducts">
              <Image src={a1} id="btn1" class="absolute bottom-[-15px] hidden" />
            </Link>
          </div>

          <div id="box1" class="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative">
            <Image src={p6} />
            <p class="font-bold">Backery Items</p>
            <p>68+ Products</p>
            <Link href="/ourproducts">
              <Image src={a1} id="btn1" class="absolute bottom-[-15px] hidden" />
            </Link>
          </div>


        </div>
        <Image src={p7} className=" hidden 2xl:block 2xl:absolute 2xl:bottom-0 2xl:right-0" />
        <Image src={p8} className="hidden xl:block xl:absolute xl:top-14" />
      </div>
    </div>
  )
}

export default Categories

import React from 'react'
import Image from 'next/image';
import blog1 from '@/app/assets/img/blog1.png'
import blog2 from '@/app/assets/img/blog2.png'
import blog3 from '@/app/assets/img/blog3.png'
import clock from '@/app/assets/img/clock.png'
import user from '@/app/assets/img/user.png'
import logo1 from '@/app/assets/img/logo1.png'
import logo2 from '@/app/assets/img/logo2.png'
import logo3 from '@/app/assets/img/logo3.png'
import logo4 from '@/app/assets/img/logo4.png'
import logo5 from '@/app/assets/img/logo5.png'
import logo6 from '@/app/assets/img/logo6.png'
import person2 from '@/app/assets/img/person2.png'
import gro from '@/app/assets/img/groceryd.png'
import icon from '@/app/assets/img/icon.png'
import Link from 'next/link';

export default function Blog() {
  return (
    <div>
      <div className="bg-white relative pb-24">
        <div className="flex flex-col text-center items-center gap-8 pt-32">
          <button className="bg-[#609E45] text-white px-3 rounded-md font-poppins w-44">Latest News & Blogs</button>
          <p className="w-[356px] font-bold text-[#EF682E] text-4xl">Most Popular News & Top Blogs</p>
          <div className="flex gap-5 items-center justify-center ">
            <div>
              <div className="h-[512px] flex flex-col justify-around items-center text-left border border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md relative">
                <Image src={blog1} className=" rounded-md opacity-35" />
                <div>
                  <p className="text-xl font-bold w-[354px] mb-3">Reasons to Include Organic Fennel in Your Diet</p>
                  <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-2 pr-28">
                  <Image src={user} />
                  <p>Johnson doe</p>
                  <Image src={clock} />
                  <p>08 Jan, 2023</p>
                </div>
                <Link href="/blogdetail">
                  <Image src={icon} className="absolute top-32" />
                </Link>
              </div>
            </div>

            <div>
              <div id="firstDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md">
                <Image src={blog2} />
                <div>
                  <p className="text-xl font-bold w-[354px] mb-3">Healthy Snacks to Get You Through
                    the Work Day</p>
                  <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-2 pr-28">
                  <Image src={user} />
                  <p>Johnson doe</p>
                  <Image src={clock} />
                  <p>08 Jan, 2023</p>
                </div>
              </div>
              <div id="secondDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md relative">
                <Image src={blog2} className="rounded-md opacity-35" />
                <div>
                  <p className="text-xl font-bold w-[354px] mb-3">Healthy Snacks to Get You Through
                    the Work Day</p>
                  <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-2 pr-28">
                  <Image src={user} />
                  <p>Johnson doe</p>
                  <Image src={clock} />
                  <p>08 Jan, 2023</p>
                </div>
                <Image src={icon} className="absolute top-32" />
              </div>
            </div>

            <div>
              <div id="firstDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md">
                <Image src={blog3} />
                <div>
                  <p className="text-xl font-bold w-[354px] mb-3">Discover a new way to shop for
                    fresh & healthy food!</p>
                  <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-2 pr-28">
                  <Image src={user} />
                  <p>Johnson doe</p>
                  <Image src={clock} />
                  <p>08 Jan, 2023</p>
                </div>
              </div>
              <div id="secondDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md relative">
                <Image src={blog3} className="rounded-md opacity-35" />
                <div>
                  <p className="text-xl font-bold w-[354px] mb-3">Discover a new way to shop for
                    fresh & healthy food!</p>
                  <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-2 pr-28">
                  <Image src={user} />
                  <p>Johnson doe</p>
                  <Image src={clock} />
                  <p>08 Jan, 2023</p>
                </div>
                <Image src={icon} className="absolute top-32" />
              </div>
            </div>

          </div>
          <Link href="/ourblog">
            <button className="p-2 h-[50px] bg-white border border-[#EF682E] text-[#EF682E] rounded-md font-poppins font-semibold text-base">View All Blogs</button>
          </Link>

        </div>
        <div className="flex justify-center mt-20">
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
        <Image src={gro} className="absolute top-0" />
        <Image src={person2} className="absolute right-0 bottom-0" />
      </div>
    </div>
  )
}

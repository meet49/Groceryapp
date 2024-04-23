import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import blog1 from '@/app/assets/img/blog1.png'
import blog2 from '@/app/assets/img/blog2.png'
import blog3 from '@/app/assets/img/blog3.png'
import blog4 from '@/app/assets/img/blog4.png'
import blog5 from '@/app/assets/img/blog5.png'
import blog6 from '@/app/assets/img/blog6.png'
import blog7 from '@/app/assets/img/blog7.png'
import blog8 from '@/app/assets/img/blog8.png'
import blog9 from '@/app/assets/img/blog9.png'
import clock from '@/app/assets/img/clock.png'
import user from '@/app/assets/img/user.png'
import icon from '@/app/assets/img/icon.png'

function Blogpage() {
  return (
    <div className="bg-white flex flex-col gap-5 py-20">
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
              <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
              <Image src={icon} className="absolute top-32" />
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
              <p>|</p>
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
                  <p>|</p>
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
              <p>|</p>
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
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
            <Image src={icon} className="absolute top-32" />
          </div>
        </div>

      </div>
      <div className="flex gap-5 items-center justify-center ">
        <div>
          <div id="firstDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md">
            <Image src={blog4} />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">Ways to Save Money & Time
                through Online Grocery Shopping</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
          </div>
          <div id="secondDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md relative">
            <Image src={blog4} className="rounded-md opacity-35" />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">Ways to Save Money & Time
                through Online Grocery Shopping</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
            <Image src={icon} className="absolute top-32" />
          </div>
        </div>

        <div>
          <div id="firstDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md">
            <Image src={blog5} />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">8 Major Advantages of Online
                Grocery Shopping</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
          </div>
          <div id="secondDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md relative">
            <Image src={blog5} className="rounded-md opacity-35" />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">8 Major Advantages of Online
                Grocery Shopping</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
            <Image src={icon} className="absolute top-32" />
          </div>
        </div>

        <div>
          <div id="firstDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md">
            <Image src={blog6} />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">Discover a new way to shop for
                fresh & healthy food!</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
          </div>
          <div id="secondDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md relative">
            <Image src={blog6} className="rounded-md opacity-35" />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">Discover a new way to shop for
                fresh & healthy food!</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
            <Image src={icon} className="absolute top-32" />
          </div>
        </div>

      </div>
      <div className="flex gap-5 items-center justify-center ">
        <div>
          <div id="firstDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md">
            <Image src={blog7} />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">Ways to Save Money & Time
                through Online Grocery Shopping</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
          </div>
          <div id="secondDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md relative">
            <Image src={blog7} className="rounded-md opacity-35" />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">Ways to Save Money & Time
                through Online Grocery Shopping</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
            <Image src={icon} className="absolute top-32" />
          </div>
        </div>

        <div>
          <div id="firstDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md">
            <Image src={blog8} />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">8 Must Have Tips for Online
                Grocery Shopping Right Now</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
          </div>
          <div id="secondDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md relative">
            <Image src={blog8} className="rounded-md opacity-35" />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">8 Must Have Tips for Online
                Grocery Shopping Right Now</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
            <Image src={icon} className="absolute top-32" />
          </div>
        </div>

        <div>
          <div id="firstDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md">
            <Image src={blog9} />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">10 Most Common Challenges Faced
                by Online Grocery Businesses</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
          </div>
          <div id="secondDiv3" className="h-[512px] flex flex-col justify-around items-center border text-left border-[#ffb595] hover:border-[#EF682E] px-2 rounded-md relative">
            <Image src={blog9} className="rounded-md opacity-35" />
            <div>
              <p className="text-xl font-bold w-[354px] mb-3">10 Most Common Challenges Faced
                by Online Grocery Businesses</p>
              <p className="text-base w-[359px]">Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-2 pr-28">
              <Image src={user} />
              <p>Johnson doe</p>
                  <p>|</p>
              <Image src={clock} />
              <p>08 Jan, 2023</p>
            </div>
            <Image src={icon} className="absolute top-32" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blogpage

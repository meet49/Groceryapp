import React from 'react'
import Image from 'next/image';
import call from '@/app/assets/img/call1.png'
import mail from '@/app/assets/img/mail1.png'
import facebook from "@/app/assets/img/facebook.png"
import insta from "@/app/assets/img/instagram1.png"
import linkedin from "@/app/assets/img/linkedin1.png"
import twitter from "@/app/assets/img/twitter1.png"
import logo from '@/app/assets/img/LOGO.png'
import user from '@/app/assets/img/user1.png'

function Coming() {
    return (
    
        <div className="flex flex-wrap  bg-white bg-[url('../app/assets/img/bg6.png')] 2xl:flex-nowrap">
            <div className=" 2xl:h-[1080px] 2xl:w-[50%] w-[100%]flex flex-col  justify-center pl-10 pb-10 2xl:pb-0 pt-24 2xl:pt-60 sm:pl-32">
                <div className="flex gap-3 pb-5">
                    <Image src={logo} className="cursor-pointer" />
                    <p className="font-poppins text-[#EF682E] text-[28px] font-[275]"><b className="text-[#609E45] font-[700]">TROO</b>Grocery</p>
                </div>
                <button className="bg-[#609E45] text-white px-3 rounded-md font-poppins w-[150px] mb-5">Coming Soon   </button>
                <p className="md:w-[478px] text-[#EF682E] font-bold text-4xl pb-5">All Good Things Come to Those who Wait...</p>
                <p className="text-base  2xl:w-[495px] pb-10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC Lorem Ipsum.</p>
                <div className="pb-10">
                    <p className="text-sm pb-2">
                        Notify Me
                    </p>
                    <div className="md:w-[519px] gap-5 flex flex-wrap justify-between">
                        <input type="email" placeholder="Enter Your Email" className=" border-[#ffbfa3] border h-[60px] sm:w-[380px] rounded-md p-2" />
                        <button className="p-2 h-[60px] sm:w-[109px] border bg-[#609E45] text-white rounded-md font-poppins font-semibold text-base">Submit</button>
                    </div>
                </div>
                <div className="flex  flex-col gap-5 pb-9">
                    <div className="flex gap-2">
                        <Image src={call} className="bg-[#609e45c1] rounded-md" />
                        <div>
                            <p className="font-[16px] ">Call Us on</p>
                            <p className="  font-bold">+44 123 456 7890</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Image src={mail} className="bg-[#609e45c1] rounded-md" />
                        <div>
                            <p className="font-[16px] ">Email Us</p>
                            <p className="font-bold ">contact@troothemes.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 text-center">
                    <p className="font-poppins  text-[14px]">Follow Us On</p>
                    <p className=" text-[14px]">------</p>
                    <div className=" bg-black inline f-back">
                        <Image src={facebook} className="mt-1" />
                    </div>
                    <div className=" inline i-white">
                        <Image src={insta} />
                    </div>
                    <div className=" inline i-white">
                        <Image src={linkedin} />
                    </div>
                    <div className=" inline i-white">
                        <Image src={twitter} />
                    </div>
                </div>

            </div>
            <div  className="bg-gray-100 w-[100%] 2xl:w-[50%] flex items-center justify-center ">
                <Image src={user} className="p-24 mt-64 "/>
            </div>
        </div>
    )
}

export default Coming

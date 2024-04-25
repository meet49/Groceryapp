import React from 'react'
import Image from 'next/image'
import t1 from '@/app/assets/img/team1.png'
import t2 from '@/app/assets/img/team2.png'
import t3 from '@/app/assets/img/team3.png'
import t4 from '@/app/assets/img/team4.png'
import t5 from '@/app/assets/img/team5.png'
import t6 from '@/app/assets/img/team6.png'
import facebook from "@/app/assets/img/facebook.png"
import insta from "@/app/assets/img/instagram.png"
import linkedin from "@/app/assets/img/linkedin.png"
import twitter from "@/app/assets/img/twitter.png"

function Teams() {
    return (
        <>
            <div className="bg-white grid lg:grid-cols-2 lg:px-40 xl:grid-cols-3 xl:px-20 place-items-center 2xl:px-60  pt-10 gap-10">
                <div className="bg-gray-50 2xl:w-[412px] h-[579px] flex flex-col pt-10 relative">
                    <Image src={t1} width={"368"} height={"456"} className="px-10" />
                    <div className="w-[202.54px] h-[53.65px] bg-[#609E45] rounded-md absolute bottom-36 left-[100px]  opacity-0 hover:opacity-100">
                        <div className="flex gap-2 justify-center items-center pt-4">
                            <div className=" bg-black inline f-back w-[27px] h-[27px]">
                                <Image src={facebook} className="ml-1 mt-1" height={"20"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={insta} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={linkedin} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={twitter} className="ml-1 mt-1" height={"18"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-5">
                        <p className="font-semibold text-xl text-center">Sasha White</p>
                        <p className="text-center">CEO and Founder</p>
                    </div>
                </div>
                <div className="bg-gray-50 2xl:w-[412px] h-[579px] flex flex-col pt-10 relative">
                    <Image src={t2} width={"368"} height={"456"} className="px-10 " />
                    <div className="w-[202.54px] h-[53.65px] bg-[#609E45] rounded-md absolute bottom-36 left-[100px]  opacity-0 hover:opacity-100">
                        <div className="flex gap-2 justify-center items-center pt-4">
                            <div className=" bg-black inline f-back w-[27px] h-[27px]">
                                <Image src={facebook} className="ml-1 mt-1" height={"20"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={insta} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={linkedin} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={twitter} className="ml-1 mt-1" height={"18"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-5">
                        <p className="font-semibold text-xl text-center">Vilma Jarvi</p>
                        <p className="text-center">Co-Founder</p>
                    </div>
                </div>
                <div className="bg-gray-50 2xl:w-[412px] h-[579px] flex flex-col pt-10 relative">
                    <Image src={t3} width={"368"} height={"456"} className="px-10 " />
                    <div className="w-[202.54px] h-[53.65px] bg-[#609E45] rounded-md absolute bottom-36 left-[100px]  opacity-0 hover:opacity-100">
                        <div className="flex gap-2 justify-center items-center pt-4">
                            <div className=" bg-black inline f-back w-[27px] h-[27px]">
                                <Image src={facebook} className="ml-1 mt-1" height={"20"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={insta} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={linkedin} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={twitter} className="ml-1 mt-1" height={"18"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-5">
                        <p className="font-semibold text-xl text-center">Rhys Hawkins</p>
                        <p className="text-center">Manager</p>
                    </div>
                </div>
                <div className="bg-gray-50 2xl:w-[412px] h-[579px] flex flex-col pt-10 relative">
                    <Image src={t4} width={"368"} height={"456"} className="px-10 " />
                    <div className="w-[202.54px] h-[53.65px] bg-[#609E45] rounded-md absolute bottom-36 left-[100px]  opacity-0 hover:opacity-100">
                        <div className="flex gap-2 justify-center items-center pt-4">
                            <div className=" bg-black inline f-back w-[27px] h-[27px]">
                                <Image src={facebook} className="ml-1 mt-1" height={"20"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={insta} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={linkedin} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={twitter} className="ml-1 mt-1" height={"18"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-5">
                        <p className="font-semibold text-xl text-center">Victoria Roach</p>
                        <p className="text-center">Accountant</p>
                    </div>
                </div>
                <div className="bg-gray-50 2xl:w-[412px] h-[579px] flex flex-col pt-10 relative">
                    <Image src={t5} width={"368"} height={"456"} className="px-10 " />
                    <div className="w-[202.54px] h-[53.65px] bg-[#609E45] rounded-md absolute bottom-36 left-[100px]  opacity-0 hover:opacity-100">
                        <div className="flex gap-2 justify-center items-center pt-4">
                            <div className=" bg-black inline f-back w-[27px] h-[27px]">
                                <Image src={facebook} className="ml-1 mt-1" height={"20"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={insta} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={linkedin} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={twitter} className="ml-1 mt-1" height={"18"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-5">
                        <p className="font-semibold text-xl text-center">Danial White</p>
                        <p className="text-center">Store Keeper</p>
                    </div>
                </div>
                <div className="bg-gray-50 2xl:w-[412px] h-[579px] flex flex-col pt-10 relative">
                    <Image src={t6} width={"368"} height={"456"} className="px-10 " />
                    <div className="w-[202.54px] h-[53.65px] bg-[#609E45] rounded-md absolute bottom-36 left-[100px]  opacity-0 hover:opacity-100">
                        <div className="flex gap-2 justify-center items-center pt-4">
                            <div className=" bg-black inline f-back w-[27px] h-[27px]">
                                <Image src={facebook} className="ml-1 mt-1" height={"20"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={insta} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={linkedin} className="ml-1 mt-1" height={"18"} />
                            </div>
                            <div className=" inline i-back w-[27px] h-[27px]">
                                <Image src={twitter} className="ml-1 mt-1" height={"18"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-5">
                        <p className="font-semibold text-xl text-center">Joshua Wilson</p>
                        <p className="text-center">Store Keeper</p>
                    </div>
                </div>
            </div>
            <div className="bg-white flex justify-center pb-14">
                <p className="text-center font-semibold text-xl w-[279px] h-[60px]">
                    Want join our team? Call Us on <b className="font-semibold text-xl text-[#609E45]">+44 123 456 7890</b>
                </p>
            </div>
        </>
    )

}

export default Teams

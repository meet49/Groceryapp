/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image';
import logo from '@/app/assets/img/LOGO.png'

function Signup() {
    return (
        <div className="bg-[url('../app/assets/img/bg12.png')] bg-no-repeat bg-white  py-20">
            <div className="flex justify-center flex-wrap gap-5">
                <div className="bg-[url('../app/assets/img/bg14.png')] bg-no-repeat w-[615px] h-[803px]">
                    <div className="p-10">
                        <div className="flex gap-3 bg-white xl:w-[256px] h-[80px] rounded-md justify-center items-center">
                            <Image src={logo} className="cursor-pointer" width={"44"} height={"44"} />
                            <p className="font-poppins text-[#EF682E] text-2xl text-center "><b className="text-[#609E45] font-bold">TROO</b>Grocery</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="xl:w-[685px] h-[803px] bg-white flex flex-col gap-5 p-10 rounded-md">
                        <h1 className="font-bold text-2xl ">Welcome to TRoo Grocery</h1>
                        <p>Create your account by filling the form below</p>
                        <p className="font-bold text-[#609E45]">_____</p>
                        <div className="flex flex-col  gap-6">
                            <div className="flex flex-col xl:w-[585px] gap-3">
                                <lable>First Name</lable>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 "
                                ></input>
                            </div>


                            <div className="flex flex-col xl:w-[585px] gap-3">
                                <lable>Email </lable>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 "
                                ></input>
                            </div>

                            <div className="flex flex-col xl:w-[585px] gap-3">
                                <lable>Password</lable>
                                <input
                                    type="text"
                                    placeholder="Password"
                                    className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 "
                                ></input>
                            </div>

                            <div className="flex flex-col xl:w-[585px] gap-3">
                                <lable>Conform Password</lable>
                                <input
                                    type="text"
                                    placeholder="Conform Password"
                                    className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 "
                                ></input>
                            </div>


                            <div>
                                <input type="checkbox" />
                                <p className="inline pl-2">I agree to the terms and conditions</p>
                            </div>

                            <button className="xl:w-[585px] h-[60px] bg-[#609E45] text-white rounded-md font-semibold text-xl">Sign Up Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

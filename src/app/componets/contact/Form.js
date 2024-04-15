import React from 'react'
import Image from 'next/image'
import map from '@/app/assets/img/map.png'

function Form() {
    return (
        <>
        <div className="bg-[#ffc7ae] pb-24">
            <div className=" flex flex-col pl-72 pt-24">
                <button className="bg-[#609E45] text-white px-3 rounded-md font-poppins w-[160px] mb-5">Leave A Message</button>
                <div className="flex gap-20">
                    <p className="w-[560px] font-bold text-4xl text-[#EF682E]">Don’t hasitate to contact us
                        if you need more help</p>
                    <p className="w-[600px] h-[69px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.</p>
                </div>
            </div>
            <div className="bg-white flex flex-col justify-center m-16 mx-72 p-24 gap-5">
                <div className="flex gap-5">
                    <div className="flex flex-col w-[535px] ">
                        <lable>First Name</lable>
                        <input type="text" placeholder="First Name" className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3"></input>
                    </div>
                    <div className="flex flex-col w-[535px] ">
                        <lable>Last Name</lable>
                        <input type="text" placeholder="Last Name" className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3"></input>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col w-[535px] ">
                        <lable>Phone Number</lable>
                        <input type="text" placeholder="Phone Number" className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3"></input>
                    </div>
                    <div className="flex flex-col w-[535px] ">
                        <lable>Email Address</lable>
                        <input type="text" placeholder="Enter your Email" className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3"></input>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col ">
                        <lable>Write a Message ...</lable>
                        <input type="text" placeholder="Write a Message " className="h-[160px] rounded-md border hover:border-[#609E4533] outline-none pl-3"></input>
                    </div>
                </div>
                <button className="bg-[#609E45] font-bold text-base rounded-md text-white w-[152px] h-[60px]">Submit Now</button>
            </div>
        </div>
        <Image src={map}/>
        </>
    )
}

export default Form

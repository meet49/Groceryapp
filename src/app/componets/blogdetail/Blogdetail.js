import React from 'react'
import Image from 'next/image';
import blog10 from '@/app/assets/img/blog10.png'
import blog9 from '@/app/assets/img/blog9.png'
import blog4 from '@/app/assets/img/blog4.png'
import blog7 from '@/app/assets/img/blog7.png'
import blog8 from '@/app/assets/img/blog8.png'
import person2 from '@/app/assets/img/person2.png'
import i2 from '@/app/assets/img/ai2.png'
import facebook from "@/app/assets/img/facebook.png"
import insta from "@/app/assets/img/instagram1.png"
import linkedin from "@/app/assets/img/linkedin1.png"
import twitter from "@/app/assets/img/twitter1.png"



function Blogdetail() {
    return (
        <div className="bg-white flex flex-wrap justify-center gap-8 pt-10">
            <div className="flex flex-col justify-between items-center">
                <Image src={blog10}className="relative 2xl:w-[968px] 2xl:h-[443px] "/>
                <p className="2xl:w-[672px] h-[60px] bg-white absolute hidden 2xl:block 2xl:bottom-4 2xl:left-80 pt-5 pl-5 rounded-md">Date: 23 Janm, 2022  |  Posted By: Adam Cole  | Tags: Grocery, Vegetable, Fruits</p>
                <h1 className="font-bold font-poppins text-4xl pt-10 px-10">Reasons to Include Organic Fennel in Your Diet</h1>
                <div className="flex flex-col gap-2 pt-8 items-center justify-center px-10">

                    <p className="2xl:w-[968px] text-justify">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.  what is Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley is of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into is this electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letrasetis this  sheets containing Lorem Ipsum passages, and more recently with Aldus PageMaker including versions of Lorem Ipsum.`}</p>
                    <p className="2xl:w-[968px] text-justify">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.  what is Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley is of type and scrambled it to make a type specimen book.`}</p>
                </div>
                <div className="flex 2xl:justify-between  gap-10 justify-center 2xl:flex-nowrap flex-wrap mt-5 pt-10">
                    <Image src={blog8} width={"413"} height={"424"} />
                    <Image src={blog7} width={"413"} height={"424"} />
                </div>
                <p className="2xl:w-[968px] text-justify pt-8 justify-center px-10">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.  what is Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley is of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.`}</p>
                <div className="flex flex-col gap-2 pt-10 justify-center px-10">
                    <h1 className="text-xl font-bold">Any Test Style  Here</h1>
                    <p className="2xl:w-[968px] text-justify">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.  what is Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley is of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into is this electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letrasetis this  sheets containing Lorem Ipsum passages, and more recently with Aldus PageMaker including versions of Lorem Ipsum.`}</p>
                </div>

                <div className="flex gap-20 pt-8 px-5 flex-wrap pl-10 2xl:pl-0">
                    <div>
                        <div className="flex gap-5 mb-3">
                            <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                            <p className="2xl:w[468px]">Emergency response time is one hour</p>
                        </div>
                        <div className="flex gap-5 mb-3">
                            <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                            <p>We want you to pletely satisfied.</p>
                        </div>
                        <div className="flex gap-5 mb-3">
                            <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                            <p>You deserve to have your in plain English. </p>
                        </div>
                        <div className="flex gap-5 ">
                            <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                            <p>Our service philosophy  </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-5 mb-3">
                            <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                            <p className="2xl:w[468px]">Emergency response time</p>
                        </div>
                        <div className="flex gap-5 mb-3">
                            <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                            <p>We want you to be completely </p>
                        </div>
                        <div className="flex gap-5 mb-3">
                            <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                            <p>Your questions answered in plain English. </p>
                        </div>
                        <div className="flex gap-5 ">
                            <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full" />
                            <p>Our service philosophy is proactive.</p>
                        </div>
                    </div>
                </div>
                <p className="2xl:w-[968px] text-justify pt-10 justify-center px-10">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. what is Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley is of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.`}</p>
                <div className="flex 2xl:w-[967px] h-[60px] bg-gray-100 items-center pl-10 mt-10 rounded-md">
                    <p className="pr-5">Share this Article</p>
                    <div className="flex h-[20px]">
                        <div className=" bg-black inline f-back w-5 pl-1 mr-2">
                            <Image src={facebook} className="mt-1 items-center" />
                        </div>
                        <div className=" inline i-white mr-2">
                            <Image src={insta} />
                        </div>
                        <div className=" inline i-white mr-2">
                            <Image src={linkedin} />
                        </div>
                        <div className=" inline i-white mr-2">
                            <Image src={twitter} />
                        </div>
                    </div>

                </div>
                <h1 className="font-semibold text-xl pt-8">0 Comments</h1>
                <div className="h-[768px] pt-8">
                    <div className="bg-gray-100 flex flex-col gap-5 p-10">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col 2xl:w-[867px] gap-2">
                                <lable>Full Name</lable>
                                <input type="text" placeholder="Full Name" className="h-[60px] rounded-md border hover:border-[#609E45] outline-none pl-3 bg-gray-100"></input>
                            </div>
                            <div className="flex flex-col 2xl:w-[867px] gap-2 ">
                                <lable>Phone Number</lable>
                                <input type="text" placeholder="Phone Number" className="h-[60px] rounded-md border hover:border-[#609E45] outline-none pl-3 bg-gray-100"></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 2xl:w-[867px] ">
                            <div className="flex flex-col gap-2 ">
                                <lable>Email Address</lable>
                                <input type="text" placeholder="Enter your Email" className="h-[60px] rounded-md border hover:border-[#609E45] outline-none pl-3 bg-gray-100"></input>
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <lable>Write a Message ...</lable>
                                <input type="text" placeholder="Write a Message " className="h-[160px] rounded-md border hover:border-[#609E45] outline-none pl-3 bg-gray-100"></input>
                            </div>
                        </div>
                        <button className="bg-[#609E45] font-bold text-base rounded-md text-white w-[152px] h-[60px]">Submit Now</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-5  2xl:flex-wrap 2xl:flex-col px-10 justify-center 2xl:justify-start pb-10">
                <div className="h-[466px] w-[302px] bg-gray-100 font-poppins pl-10 pt-5 flex flex-col justify-between pb-5 rounded-md">
                    <h1 className="text-[#609E45] font-bold text-xl">Categories</h1>
                    <hr />
                    <p className="text-[#609E45] font-poppins ">Grocery<span className="bg-[#609E45] inline-block text-white rounded-[50%] w-[22px] ml-[160px] text-center text-base">5</span></p>
                    <p className=" font-poppins ">Organic Vegetables<span className="bg-[#bee1af]  inline-block  rounded-[50%] w-[22px] ml-[78px] text-center text-base">3</span></p>
                    <p className=" font-poppins ">Fresh Food<span className="bg-[#bee1af]  inline-block  rounded-[50%] w-[22px] ml-[136px] text-center text-base">3</span></p>
                    <p className=" font-poppins ">Sea Food<span className="bg-[#bee1af]  inline-block  rounded-[50%] w-[22px] ml-[149px] text-center text-base">7</span></p>
                    <p className=" font-poppins ">Online Store<span className="bg-[#bee1af]  inline-block rounded-[50%] w-[22px] ml-[130px] text-center text-base">2</span></p>
                    <p className=" font-poppins ">Fresh Fruits<span className="bg-[#bee1af]  inline-block rounded-[50%] w-[22px] ml-[135px] text-center text-base">4</span></p>
                    <p className=" font-poppins ">Online Shopping<span className="bg-[#bee1af]  inline-block  rounded-[50%] w-[22px] ml-[103px] text-center text-base">1</span></p>
                    <p className=" font-poppins ">Online Shopping<span className="bg-[#bee1af]  inline-block rounded-[50%] w-[22px] ml-[103px] text-center text-base">1</span></p>
                    <p className=" font-poppins ">Organic<span className="bg-[#bee1af]  inline-block  rounded-[50%] w-[22px] ml-[166px] text-center text-base">1</span></p>
                </div>
                <div className="h-[222px] w-[302px] bg-gray-100 font-poppins flex flex-col justify-between pl-10 pt-5
pb-5 mt-5 rounded-md">
                    <h1 className="font-bold text-[#609E45] text-xl">Tags</h1>
                    <hr />
                    <div className="flex flex-wrap ">
                        <buttton className="h-[35px] hover:bg-[#609E45] p-2 hover:text-white hover:rounded-md">Grocery</buttton>
                        <buttton className="h-[35px] hover:bg-[#609E45] p-2 hover:text-white hover:rounded-md">Fruits</buttton>
                        <buttton className="h-[35px] hover:bg-[#609E45] p-2 hover:text-white hover:rounded-md">bakery</buttton>
                        <buttton className="h-[35px] hover:bg-[#609E45] p-2 hover:text-white hover:rounded-md">Online Shopping</buttton>
                        <buttton className="h-[35px] hover:bg-[#609E45] p-2 hover:text-white hover:rounded-md">Organic</buttton>
                        <buttton className="h-[35px] hover:bg-[#609E45] p-2 hover:text-white hover:rounded-md">Vegetables</buttton>
                        <buttton className="h-[35px] hover:bg-[#609E45] p-2 hover:text-white hover:rounded-md">Dairy Items</buttton>
                        <buttton className="h-[35px] hover:bg-[#609E45] p-2 hover:text-white hover:rounded-md">Food</buttton>
                    </div>
                </div>
                <div className="h-[491px] w-[302px] bg-gray-100 font-poppins flex flex-col justify-between pl-10 pt-5
pb-5 mt-5 rounded-md pr-4">
                    <h1 className="font-bold text-[#609E45] text-xl">Related Blogs</h1>
                    <hr />
                    <div className="flex gap-4">
                        <Image src={blog9} width={"70"} height={"70"} className="rounded-md" />
                        <p className="font-medium text-base">Discover a new way to shop for fresh & healthy food!</p>
                    </div>
                    <div className="flex gap-4">
                        <Image src={blog4} width={"70"} height={"70"} className="rounded-md" />
                        <p className="font-medium text-base">Healthy Snacks to Get You Through the Work Day</p>
                    </div>
                    <div className="flex gap-4">
                        <Image src={blog7} width={"70"} height={"70"} className="rounded-md" />
                        <p className="font-medium text-base">Common Challenges Faced by Online Grocery Businesses</p>
                    </div>
                    <div className="flex gap-4">
                        <Image src={blog8} width={"70"} height={"70"} className="rounded-md" />
                        <p className="font-medium text-base">8 Must Have Tips for Online Grocery Shopping Right Now</p>
                    </div>
                </div>
                <div className="bg-[#609E45] rounded-md h-[566px] w-[302px] mt-5">
                    <div className="flex flex-col gap-7">
                        <div className="text-white text-center flex flex-col items-center gap-5 pt-8">
                            <p className="font-bold text-[20px]">Free Delivery Over $50.00</p>
                            <p className="text-[16px] w-[253px]">Shop $50.00+ Producrs and Get Free Delivery Anywhere</p>
                            <button className="w-[118px] h-[50px] bg-white text-[#609E45] rounded-md font-poppins font-semibold text-base">Shop Now</button>
                        </div>
                        <Image src={person2} className="pt-9" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogdetail

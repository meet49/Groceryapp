import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import logo from '@/app/assets/img/logo_icon1.png'
import call from '@/app/assets/img/call1.png'
import mail from '@/app/assets/img/mail1.png'
import facebook from "@/app/assets/img/facebook.png"
import insta from "@/app/assets/img/instagram.png"
import linkedin from "@/app/assets/img/linkedin.png"
import twitter from "@/app/assets/img/twitter.png"
import payment from "@/app/assets/img/payments.png"
import hr from "@/app/assets/img/image1.png"

function Footer() {
    return (
        <>
            <div className="bg-[#fee2d6] flex flex-col justify-center items-center text-center py-10 lg:h-[350px] ">
                <p className="font-bold text-4xl mb-5">Subscribe to newsletter</p>
                <p className="lg:w-[599px] text-base mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex</p>
                <div className="lg:w-[765px] flex lg:justify-between gap-5 justify-center flex-wrap">
                    <input type="text" placeholder="Your Name" className="bg-[#fee2d6] border-[#ffac88] border h-[60px] w-[175px]  rounded-md p-2" />
                    <input type="email" placeholder="Enter Your Email" className="bg-[#fee2d6] border-[#ffac88] border h-[60px] lg:w-[380px] rounded-md p-2" />
                    <button className="p-2 h-[60px] w-[150px] border bg-[#609E45] text-white rounded-md font-poppins font-semibold text-base">Subscribe Now</button>
                </div>
            </div>
            <div className=" bg-green xl:h-[594px] flex flex-col justify-between items-center">

                <div className="flex xl:gap-64 gap-10 justify-between items-center flex-wrap xl:w-[1207.6px] pt-10">
                    <div className="flex xl:gap-20 pl-5 flex-wrap gap-5">
                        <div className="flex gap-2">
                            <Image src={call} className="text-white" />
                            <div>
                                <p className="font-[16px] text-white">Call Us on</p>
                                <p className=" text-white font-bold">+44 123 456 7890</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Image src={mail} />
                            <div>
                                <p className="font-[16px] text-white">Email Us</p>
                                <p className="font-bold text-white ">contact@troothemes.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 pl-5">
                        <p className="font-poppins text-white text-[14px]">Follow Us On</p>
                        <p className="text-white text-[14px]">------</p>
                        <div className=" bg-black inline f-back">
                            <Image src={facebook} className="mt-1" />
                        </div>
                        <div className=" inline i-back">
                            <Image src={insta} className="mt-1" />
                        </div>
                        <div className=" inline i-back">
                            <Image src={linkedin} className="mt-1" />
                        </div>
                        <div className=" inline i-back">
                            <Image src={twitter} className="mt-1" />
                        </div>
                    </div>
                </div>
                <Image src={hr}/>
                <div className="flex justify-start xl:justify-around pl-5 items-start flex-wrap gap-10 mt-10 xl:w-[1229px]">
                    <div className="text-white">
                        <div className="flex gap-5 mb-5">
                            <Image src={logo} className="bg-white rounded-[50%]" />
                            <p className="font-poppins text-white text-[28px] font-[275]"><b className="text-white font-[700]">Organic</b>Grocery</p>
                        </div>
                        <p className="w-[342px] mb-5">Lorem Ipsum is simply  it is dummy rummy dummy text of the since it is printing and typesetting’s the and it industry's standard dummy text ever since the 150.</p>
                        <p className="text-base mb-3">Address</p>
                        <p className="font-bold text-xl w-[351px]">4516 School Street, Danbury,CT, Canada, 458068</p>
                    </div>
                    <div className="text-white">
                        <p className="font-bold text-2xl">Navigation</p>
                        <p className="font-extrabold pb-2">_____</p>
                        <div className="flex flex-col gap-3">
                        <Link href="/">Homepage</Link>
                        <Link href="/aboutus">About Us</Link>
                        <Link href="/ourproducts    ">Our Products</Link>
                        <Link href="/testimonial">Our Testimonial</Link>
                        <Link href="/ourblog">Our Blogs</Link>
                        </div>
                    </div>
                    <div className="text-white">
                        <p className="font-bold text-2xl">Customer Support</p>
                        <p className="font-extrabold pb-2">_____</p>
                        <div className="flex flex-col gap-3">
                        <Link href="/comingsoon">Order</Link>
                        <Link href="/comingsoon">Track Your Order</Link>
                        <Link href="/faq">Help & Support</Link>
                        <Link href="/comingsoon">Shipping & Delivery</Link>
                        <Link href="/contact">Contact Us</Link>
                        </div>
                    </div>
                    <div className="text-white">
                        <p className="font-bold text-2xl">Catogories</p>
                        <p className="font-extrabold pb-2">_____</p>
                        <div className="flex flex-col gap-3">
                        <Link href="/comingsoon">Fresh Vegetable</Link>
                        <Link href="/comingsoon">Fresh Fruits</Link>
                        <Link href="/comingsoon">Fresh Beverage</Link>
                        <Link href="/comingsoon">Fresh Backery Items</Link>
                        <Link href="/comingsoon">Netural Drinks</Link>
                        </div>
                    </div>
                </div>
                <Image src={hr}/>

                <div className="flex justify-start pl-5 xl:justify-around xl:w-[1229px] flex-wrap gap-5 text-white py-3">
                    <p>Copyright © 2023. Themes. All rights reserved.</p>
                    <Image src={payment}/>
                    <p>Privacy Policy  /  Terms & Conditions</p>
                </div>
            </div>
        </>

    )
}

export default Footer

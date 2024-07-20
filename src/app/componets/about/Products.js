/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import i1 from '@/app/assets/img/ai1.png'
import i2 from '@/app/assets/img/ai2.png'
import i3 from '@/app/assets/img/_22.png'
import i4 from '@/app/assets/img/ai3.png'

function Products() {
    return (
        <div className="bg-white flex justify-center gap-10 py-20 flex-wrap">
            <Image src={i1} />
            <div className="flex flex-col gap-5 justify-between p-5">
                <p className="font-bold text-[40px] sm:w-[508px]">We believe in pure and organic quality Products</p>
                <div className="flex gap-5">
                    <Image src={i4} />
                    <p className=" text-base  sm:w-[610px] text-[#777777]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam inta nonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                </div>
                <div className="flex">
                    <div>
                        <p className="text-xl font-bold mb-5">Organic Products</p>
                        <p className="sm:w-[310px] text-[#777777]">There are many variations passages Lorem Ipsum available, but we are the majority have suffered alteration.</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold mb-5">50+ Delivery Partener</p>
                        <p className="sm:w-[304px] text-[#777777]">There are many variations passages Lorem Ipsum available, we are the majority have suffered alteration.</p>
                    </div>
                </div>
                <div>
                    <div className="flex gap-5 mb-3">
                        <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full"/>
                        <p className="sm:w[468px]">Emergency response time is one hour or less guaranteed.</p>
                    </div>
                    <div className="flex gap-5 mb-3">
                        <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full"/>
                        <p>Until the eleifend elit is a lot of great facilities.</p>
                    </div>
                    <div className="flex gap-5 mb-3">
                        <Image src={i2} height={"22"} width={"22"} className="bg-[#d4ffc1] rounded-full"/>
                        <p>Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>

                <div className="flex gap-5" >
                    <Image src={i3} className="border-4 border-[#609E45] rounded-[50%] " />
                    <div className="flex flex-col justify-center">
                        <p className="font-bold text-xl">Adam Andreson</p>
                        <p >CEO and Founder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products

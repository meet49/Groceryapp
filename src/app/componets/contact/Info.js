/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image';
import call from '@/app/assets/img/call3.png'
import mail from '@/app/assets/img/mail3.png'
import location from '@/app/assets/img/location.png'

function Info() {
    return (
        <div>
            <div className="flex flex-wrap px-5 gap-5 pb-9 bg-white justify-center pt-8">
                <div className="flex gap-2 w-[413px] h-[121px] border rounded-md hover:border-[#a4b99ac1] hover:shadow-sm ">
                    <Image src={call} className="bg-[#a4b99ac1] rounded-md p-3 m-5" width={"50"}/>
                    <div className="mt-5">
                        <p className="font-[16px] ">Call Us on</p>
                        <p className="  font-bold">+44 123 456 7890</p>
                        <p className="  font-bold">+44 987 654 3210</p>
                    </div>
                </div>
                <div className="flex gap-2 w-[413px] h-[121px] border rounded-md hover:border-[#a4b99ac1] hover:shadow-sm">
                    <Image src={mail} className="bg-[#a4b99ac1] rounded-md p-3 m-5" width={"50"} />
                    <div className="mt-5">
                        <p className="font-[16px] ">Email Us</p>
                        <p className="font-bold ">contact@troothemes.com</p>
                        <p className="font-bold ">info@troothemes.com</p>
                    </div>
                </div>
                <div className="flex gap-2 w-[413px] h-[121px] border rounded-md hover:border-[#a4b99ac1] hover:shadow-sm">
                    <Image src={location} className="bg-[#a4b99ac1] rounded-md p-3 m-5"  width={"50"}/>
                    <div className="mt-5">
                        <p className="font-[16px] ">Our Location</p>
                        <p className="font-bold ">4516 School Street, Danbury,
                            CT, Canada, 458068</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info

import React from 'react'
import Image from "next/image";
import thanks from "@/app/assets/img/thanks.png";
import Link from 'next/link';

function Thankspage() {
    return (
        <div className="bg-[url('../app/assets/img/bg13.png')] bg-no-repeat bg-white flex flex-col justify-center items-center gap-6 py-20">
            <Image src={thanks} />
            <p className="text-[#609E45] font-semibold flex items-center justify-center text-center text-2xl">We Have Received Your Payment Successfully.</p>
            <p className="ms:w-[480px] h-[48] flex items-center justify-center text-center">It is a long established fact that a reader will be distracted b
                the readable content of a page when looking at its layout.</p>
            <Link href="/ourproducts">
                <button className="ms:w-[220px] h-[50px] bg-[#609E45] text-white rounded-md">Continue Shopping</button>
            </Link>


        </div>
    )
}

export default Thankspage

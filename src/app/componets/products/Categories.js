import React from 'react'
import Image from 'next/image';
import p1 from '@/app/assets/img/c1.png'
import p2 from '@/app/assets/img/c2.png'
import p3 from '@/app/assets/img/c3.png'
import p4 from '@/app/assets/img/c4.png'
import p5 from '@/app/assets/img/c5.png'
import p6 from '@/app/assets/img/c6.png'
import a1 from '@/app/assets/img/Icon.png'

function Categories() {
    return (
        <>
            <div className="bg-white p-20 ">
                <div className="bg-white pb-10">
                    <p className="font-bold text-xl">Shop by categories</p>
                    <p className="text-[#609E45] font-bold">_____</p>
                </div>
                <div className="flex flex-wrap justify-center gap-5 ">
                        <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative border rounded-md border-[#609E4533] hover:border-[#609E45]">
                        <Image src={p1} />
                        <p className="font-bold">Vegetable</p>
                        <p>25+ Products</p>
                        <Image src={a1} className="absolute bottom-[-15px] opacity-0 hover:opacity-100" />
                    </div>
                    <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative  border rounded-md border-[#609E4533] hover:border-[#609E45]">
                        <Image src={p2} />
                        <p className="font-bold">Fresh Fruits</p>
                        <p>85+ Products</p>
                        <Image src={a1} className="absolute bottom-[-15px] opacity-0 hover:opacity-100" />
                    </div>
                    <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative  border rounded-md border-[#609E4533] hover:border-[#609E45]">
                        <Image src={p3} />
                        <p className="font-bold">Beverages</p>
                        <p>68+ Products</p>
                        <Image src={a1} className="absolute bottom-[-15px] opacity-0 hover:opacity-100" />
                    </div>
                    <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative  border rounded-md border-[#609E4533] hover:border-[#609E45]">
                        <Image src={p4} />
                        <p className="font-bold">Sea Food</p>
                        <p>29+ Products</p>
                        <Image src={a1} className="bottom-[-15px] opacity-0 hover:opacity-100 absolute" />
                    </div>
                    <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative  border rounded-md border-[#609E4533] hover:border-[#609E45]">
                        <Image src={p5} />
                        <p className="font-bold">Package Food</p>
                        <p>68+ Products</p>
                        <Image src={a1} className=" bottom-[-15px] opacity-0 hover:opacity-100 absolute" />
                    </div>
                    <div className="w-[192px] h-[250px] bg-white flex flex-col justify-center items-center relative  border rounded-md border-[#609E4533] hover:border-[#609E45]">
                        <Image src={p6} />
                        <p className="font-bold">Backery Items</p>
                        <p>68+ Products</p>
                        <Image src={a1} className="absolute bottom-[-15px] opacity-0 hover:opacity-100" />
                    </div>
                </div>
            </div>

        </>


    )
}

export default Categories

import React from 'react'
import Image from 'next/image';
import p5 from '@/app/assets/img/pro4.png'
import p6 from '@/app/assets/img/pro5.png'
import p7 from '@/app/assets/img/pro6.png'
import p8 from '@/app/assets/img/pro7.png'

function Related() {
    return (
        <div className="bg-white flex flex-col justify-center p-10 items-center">
            <p className="font-semibold pl-5 ">Related Product</p>
            <p className="font-bold text-[#609E45] pl-5">____</p>
            <div className="flex justify-center flex-wrap xl:flex-nowrap gap-6 pb-12 xl:w-[1299px] py-10 px-5">

                <div className="h-[463px] border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md">
                    <div className="flex justify-center mt-2 mx-2">
                        <Image src={p5} className=" h-[307px] bg-gray-100" />
                    </div>
                    <div className="mt-5 ">
                        <p className="font-bold hover:text-[#609E45] text-[20px] text-center ">Organic Cabbage</p>
                        <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$12.00</del><p>$07.00</p> </pre>
                        <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                    </div>
                </div>

                <div className="h-[463px] border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md">
                    <div className="flex justify-center mt-2 mx-2">
                        <Image src={p6} className=" h-[307px] bg-gray-100 mx-2" />
                    </div>
                    <div className="mt-5">
                        <p className="font-bold hover:text-[#609E45] text-[20px] text-center">Red Strawberry</p>
                        <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$15.00</del><p>$15.00</p> </pre>
                        <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                    </div>
                </div>

                <div className="h-[463px]   border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md">
                    <div className="flex justify-center mt-2 mx-2">
                        <Image src={p7} className=" h-[307px] bg-gray-100 mx-2" />
                    </div>
                    <div className="mt-5">
                        <p className="font-bold hover:text-[#609E45] text-[20px] text-center">Natural Carrot</p>
                        <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$15.00</del><p>$15.00</p> </pre>
                        <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                    </div>
                </div>

                <div className="h-[463px]   border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md">
                    <div className="flex justify-center mt-2 mx-2">
                        <Image src={p8} className=" h-[307px] bg-gray-100 mx-2" />
                    </div>
                    <div className="mt-5">
                        <p className="font-bold hover:text-[#609E45] text-[20px] text-center">Organic Mango</p>
                        <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$15.00</del><p>$15.00</p> </pre>
                        <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Related

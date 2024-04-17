import Image from 'next/image'
import i2 from '@/app/assets/img/ai5.png'
import i3 from '@/app/assets/img/ai6.png'
import i4 from '@/app/assets/img/ai7.png'

function Jorney() {
    return (
        <>

            <div className="bg-[#ffe8df]">
                <div className="bg-[#ffe8df] pt-10 flex flex-col justify-center items-center">
                    <div className="inline-block h-[124px] bg-white rounded-md">
                        <p className="font-poppins font-bold text-xl text-center w-[258px] mx-8 pt-8">Launched our product on 28 Nov 2013</p>
                    </div>
                    <Image src={i2} />
                    <button className="w-[76px] h-[28px] rounded-md text-white bg-[#609E45] my-10">Lounch</button>
                </div>

                <div className=" flex flex-col justify-between bg-no-repeat bg-[#ffe8df] bg-center h-screen  bg-[url('../app/assets/img/bg3.png')]">
                    <div className="flex justify-center items-center gap-10 pr-[279px] pt-3">
                        <div className="flex items-center">
                            <div className=" flex flex-col text-right items-end h-[166px] rounded-md bg-white pr-5 gap-2">
                                <p className="text-[#609E45] font-bold">____</p>
                                <p className="font-poppins font-bold text-base  ">Started Our Online Store</p>
                                <p className="font-poppins  text-base text-[#777777] w-[425px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                            </div>
                            <Image src={i3} />
                        </div>
                        <div className="border-[6px] border-[#EF682E] rounded-full p-1  bg-[#ffd0bb]"></div>
                        <p className="text-[#EF682E] font-bold text-xl ">20 November,2013</p>
                    </div>

                    <div className="flex justify-center items-center gap-10 pl-[290px] pt-3">
                        <p className="text-[#609E45] font-bold text-xl ">05 December,2015</p>
                        <div className="border-[6px] border-[#609E45] rounded-full p-1  bg-[#ffd0bb]"></div>
                        <div className="flex items-center">
                            <Image src={i4} />
                            <div className=" flex flex-col text-start h-[166px] bg-white rounded-md pl-5 gap-2">
                                <p className="text-[#609E45] text-left font-bold">____</p>
                                <p className="font-poppins font-bold text-base  ">Hired 20 employee</p>
                                <p className="font-poppins  text-base text-[#777777] w-[425px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-10 pr-[335px] pt-3">
                        <div className="flex items-center">
                            <div className=" flex flex-col text-right items-end h-[166px] rounded-md bg-white pr-5 gap-2">
                                <p className="text-[#609E45] font-bold">____</p>
                                <p className="font-poppins font-bold text-base  ">Lounched 25+ more Products</p>
                                <p className="font-poppins  text-base text-[#777777] w-[425px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                            </div>
                            <Image src={i3} />
                        </div>
                        <div className="border-[6px] border-[#EF682E] rounded-full p-1  bg-[#ffd0bb]"></div>
                        <p className="text-[#EF682E] font-bold text-xl ">07 June,2016</p>
                    </div>

                    <div className="flex justify-center items-center gap-10 pl-[310px] pt-3 ">
                        <p className="text-[#609E45] font-bold text-xl ">13 August ,2020</p>
                        <div className="border-[6px] border-[#609E45] rounded-full p-1  bg-[#ffd0bb]"></div>
                        <div className="flex items-center">
                            <Image src={i4} />
                            <div className=" flex flex-col text-left h-[166px] bg-white pl-5 gap-2 rounded-md">
                                <p className="text-[#609E45] font-bold">____</p>
                                <p className="font-poppins font-bold text-base  ">Open Second Store in NYC</p>
                                <p className="font-poppins  text-base text-[#777777] w-[425px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="bg-[#ffe8df]  flex justify-center items-center pt-9 pb-40">

                <button className=" h-[28px] rounded-md text-white bg-[#EF682E] w-[76px] ">Now</button>
            </div>
        </>

    )
}

export default Jorney

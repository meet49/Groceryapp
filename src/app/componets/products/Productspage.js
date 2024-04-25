import React from 'react'
import Image from 'next/image';
import p1 from '@/app/assets/img/pro3.png'
import p2 from '@/app/assets/img/pro2.png'
import p3 from '@/app/assets/img/pro1.png'
import p4 from '@/app/assets/img/pro8.png'
import p5 from '@/app/assets/img/pro4.png'
import p6 from '@/app/assets/img/pro5.png'
import p7 from '@/app/assets/img/pro6.png'
import p8 from '@/app/assets/img/pro7.png'
import p9 from '@/app/assets/img/pro9.png'
import drop from '@/app/assets/img/drop.png'
import cart from '@/app/assets/img/cart.png'
import Link from 'next/link';


function Productspage() {
    return (
        <div className="flex justify-center bg-white gap-5 2xl:px-72 flex-wrap-reverse xl:flex-nowrap pb-10 ">
            <div>
                <div className="w-[303px] h-[299px] bg-gray-100 flex flex-col justify-between rounded-md p-5 mb-8">
                    <h1 className="font-semibold text-xl text-[#609E45]">Cart</h1>
                    <hr />
                    <div className="flex gap-4 justify-center items-center">
                        <Image src={p1} height={"59"} width={"57"} className=" bg-gray-200 rounded-md" />
                        <div>
                            <p>Yellow Orange</p>
                            <p>$10.00</p>
                        </div>
                        <p className="pl-12">X</p>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <Image src={p2} height={"59"} width={"57"} className=" bg-gray-200 rounded-md" />
                        <div>
                            <p>Fresh Cabbage</p>
                            <p>$10.00</p>
                        </div>
                        <p className="pl-12">X</p>
                    </div>
                    <hr />
                    <p>Subtotal: <b> $20.00</b></p>
                </div>

                <div className="w-[303px] h-[533px] bg-gray-100 flex flex-col justify-between rounded-md p-5">
                    <h1 className="font-semibold text-xl text-[#609E45]">Featured Product</h1>
                    <hr />
                    <div className="flex gap-4 justify-center items-center">
                        <Image src={p4} height={"76"} width={"76"} className=" bg-gray-200 rounded-md" />
                        <div>
                            <p className="text-yellow-400 font-bold text-xl"> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                            <p>Fresh Mango</p>
                            <p>$10.00</p>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <Image src={p3} height={"76"} width={"76"} className=" bg-gray-200 rounded-md" />
                        <div>
                            <p className="text-yellow-400 font-bold text-xl"> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                            <p>Organic Tomato</p>
                            <p>$10.00</p>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <Image src={p2} height={"76"} width={"76"} className=" bg-gray-200 rounded-md" />
                        <div>
                            <p className="text-yellow-400 font-bold text-xl"> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                            <p>Fresh Cabbage</p>
                            <p>$15.00</p>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <Image src={p1} height={"76"} width={"76"} className=" bg-gray-200 rounded-md" />
                        <div>
                            <p className="text-yellow-400 font-bold text-xl"> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                            <p>Yellow Orange</p>
                            <p>$10.00</p>
                        </div>
                    </div>
                    <hr />
                    <p>Subtotal: <b> $20.00</b></p>
                </div>
            </div>
            <div>
                <div className="xl:w-[967px] mx-5 h-[66px] bg-gray-100 flex justify-between items-center px-5 rounded-md">
                    <p>Showing Products 1-12 Of 199 Result</p>
                    <div>
                        <p className="inline-block">Sort by</p>
                        <Image src={drop} className="inline-block" />
                    </div>
                </div>
                <div className="p-3">
                    <div className="flex flex-wrap justify-center gap-6 pb-12 ">

                        <div className="h-[463px] border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md" id="box">
                            <div className="flex justify-center mt-2 mx-2">
                                <Image src={p3} className=" h-[307px] bg-gray-100" />
                            </div>
                            <div className="mt-5 ">
                                <p className="font-bold hover:text-[#609E45] text-[20px] text-center ">Fresh Tomato</p>
                                <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$10.00</del><p>$05.00</p> </pre>
                                <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                            </div>
                            <Link href="/cart">
                                <button className="w-[150px] h-[50px] rounded-md bg-[#609E45] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center gap-2 items-center cursor-pointer hidden" id="btn"><Image src={cart} />Add to Cart</button>
                            </Link>

                        </div>

                        <div className="h-[463px] border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md" id="box">
                            <div className="flex justify-center mt-2">
                                <Image src={p2} className=" h-[307px] bg-gray-100 mx-2" />
                            </div>
                            <div className="mt-5">
                                <p className="font-bold hover:text-[#609E45] text-[20px] text-center">Organic Cabbage</p>
                                <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$12.00</del><p>$07.00</p> </pre>
                                <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                            </div>
                            <Link href="/cart">
                                <button className="w-[150px] h-[50px] rounded-md bg-[#609E45] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center gap-2 items-center cursor-pointer hidden" id="btn"><Image src={cart} />Add to Cart</button>
                            </Link>
                        </div>

                        <div className="h-[463px]   border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md" id="box">
                            <div className="flex justify-center mt-2">
                                <Image src={p1} className=" h-[307px] bg-gray-100 mx-2" />
                            </div>
                            <div className="mt-5">
                                <p className="font-bold hover:text-[#609E45] text-[20px] text-center">Yellow Orange</p>
                                <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$15.00</del><p>$15.00</p> </pre>
                                <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                            </div>
                            <Link href="/cart">
                                <button className="w-[150px] h-[50px] rounded-md bg-[#609E45] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center gap-2 items-center cursor-pointer hidden" id="btn"><Image src={cart} />Add to Cart</button>
                            </Link>
                        </div>


                        <div className="h-[463px] border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md" id="box">
                            <div className="flex justify-center mt-2 mx-2">
                                <Image src={p5} className=" h-[307px] bg-gray-100" />
                            </div>
                            <div className="mt-5 ">
                                <p className="font-bold hover:text-[#609E45] text-[20px] text-center "> Organic Cabbage</p>
                                <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$12.00</del><p>$07.00</p> </pre>
                                <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                            </div>
                            <Link href="/cart">
                                <button className="w-[150px] h-[50px] rounded-md bg-[#609E45] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center gap-2 items-center cursor-pointer hidden " id="btn"><Image src={cart} />Add to Cart</button>
                            </Link>
                        </div>

                        <div className="h-[463px] border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md" id="box">
                            <div className="flex justify-center mt-2">
                                <Image src={p6} className=" h-[307px] bg-gray-100 mx-2" />
                            </div>
                            <div className="mt-5">
                                <p className="font-bold hover:text-[#609E45] text-[20px] text-center">Red Strawberry</p>
                                <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$15.00</del><p>$15.00</p> </pre>
                                <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                            </div>
                            <Link href="/cart">
                                <button className="w-[150px] h-[50px] rounded-md bg-[#609E45] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px] hidden justify-center gap-2 items-center cursor-pointer  " id="btn"><Image src={cart} />Add to Cart</button>
                            </Link>
                        </div>

                        <div className="h-[463px]   border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md" id="box">
                            <div className="flex justify-center mt-2">
                                <Image src={p7} className=" h-[307px] bg-gray-100 mx-2" />
                            </div>
                            <div className="mt-5">
                                <p className="font-bold hover:text-[#609E45] text-[20px] text-center">Natural Carrot</p>
                                <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$15.00</del><p>$15.00</p> </pre>
                                <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                            </div>
                            <Link href="/cart">
                                <button className="w-[150px] h-[50px] rounded-md bg-[#609E45] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px] hidden justify-center gap-2 items-center cursor-pointer " id="btn"><Image src={cart} />Add to Cart</button>
                            </Link>
                        </div>

                        <div className="h-[463px] border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md" id="box">
                            <div className="flex justify-center mt-2 mx-2">
                                <Image src={p8} className=" h-[307px] bg-gray-100" />
                            </div>
                            <div className="mt-5 ">
                                <p className="font-bold hover:text-[#609E45] text-[20px] text-center ">Organic Kiwi</p>
                                <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$12.00</del><p>$07.00</p> </pre>
                                <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                            </div>
                            <Link href="/cart">
                                <button className="w-[150px] h-[50px] rounded-md bg-[#609E45] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px] hidden justify-center gap-2 items-center cursor-pointer " id="btn"><Image src={cart} />Add to Cart</button>
                            </Link>
                        </div>

                        <div className="h-[463px] border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md" id="box">
                            <div className="flex justify-center mt-2">
                                <Image src={p4} className=" h-[307px] bg-gray-100 mx-2" />
                            </div>
                            <div className="mt-5">
                                <p className="font-bold hover:text-[#609E45] text-[20px] text-center">Organic Mango</p>
                                <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$15.00</del><p>$15.00</p> </pre>
                                <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                            </div>
                            <Link href="/cart">
                                <button className="w-[150px] h-[50px] rounded-md bg-[#609E45] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px] hidden justify-center gap-2 items-center cursor-pointer " id="btn"><Image src={cart} />Add to Cart</button>
                            </Link>
                        </div>

                        <div className="h-[463px]   border-[1px] relative border-[#609E4533] hover:border-[#609E45] rounded-md" id="box">
                            <div className="flex justify-center mt-2">
                                <Image src={p9} className=" h-[307px] bg-gray-100 mx-2" />
                            </div>
                            <div className="mt-5">
                                <p className="font-bold hover:text-[#609E45] text-[20px] text-center">Fresh Banana</p>
                                <pre className="flex gap-2 justify-center mt-2"><del className="
del text-gray-400">$15.00</del><p>$15.00</p> </pre>
                                <h1 className="text-center text-yellow-400 mb-2 font-bold text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                            </div>
                            <Link href="/cart">
                                <button className="w-[150px] h-[50px] rounded-md bg-[#609E45] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px] hidden justify-center gap-2 items-center cursor-pointer " id="btn"><Image src={cart} />Add to Cart</button>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className=" hidden xl:flex justify-end pb-10">
                    <div className="bg-gray-100 flex w-[216px] h-[50px] rounded-md justify-center items-center gap-2">
                        <p className="w-[30px] h-[30px] hover:bg-[#609E45] hover:shadow-sm hover:shadow-[#609E4533] hover:text-white hover:rounded-md text-center pt-1">1</p>
                        <p className="w-[30px] h-[30px] hover:bg-[#609E45] hover:shadow-sm hover:shadow-[#609E4533] hover:text-white hover:rounded-md text-center pt-1">2</p>
                        <p className="w-[30px] h-[30px] hover:bg-[#609E45] hover:shadow-sm hover:shadow-[#609E4533] hover:text-white hover:rounded-md text-center pt-1">3</p>
                        <p className="w-[30px] h-[30px] hover:bg-[#609E45] hover:shadow-sm hover:shadow-[#609E4533] hover:text-white hover:rounded-md text-center pt-1">4</p>
                        <p className="w-[50px] h-[30px] hover:bg-[#609E45] hover:shadow-sm hover:shadow-[#609E4533] hover:text-white hover:rounded-md text-center pt-1">Next</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Productspage

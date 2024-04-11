import React from 'react'
import Image from 'next/image';
import pro1 from '@/app/assets/img/pro1.png'
import pro2 from '@/app/assets/img/pro2.png'
import pro3 from '@/app/assets/img/pro3.png'
import pro4 from '@/app/assets/img/pro4.png'
import pro5 from '@/app/assets/img/pro5.png'
import pro6 from '@/app/assets/img/pro6.png'
import pro7 from '@/app/assets/img/pro7.png'
import pro8 from '@/app/assets/img/pro8.png'
import cart from '@/app/assets/img/cart.png'

const Todayproduct = () => {
  return (
    <div>
      <div className="bg-[#ffe7eb] py-24">
          <div className="h-[1235px]  flex flex-col justify-between self-center items-center">
            <div className="flex flex-col justify-center items-center">
              <button className="bg-[#609E45] text-white px-3 rounded-md font-poppins w-38">Awesome Products</button>
              <p className="font-bold text-[36px] text-[#EF682E] mt-5">Top Savers Today</p>
            </div>
            <div className="flex justify-center gap-6">
              <div className="h-[463px] bg-white border-[1px] border-[#609E45] relative">
                <div className="flex justify-center mt-2 mx-2">
                  <Image src={pro1} className=" h-[307px] bg-gray-100" />
                </div>
                <div className="mt-5 ">
                  <p className="font-bold text-[#EF682E] text-[20px] text-center ">Fresh Tomato</p>
                  <pre className="flex gap-2 justify-center mt-2"><del className=" text-gray-400">$10.00</del><p>$05.00</p> </pre>
                  <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                </div>
                <button className="w-[150px] h-[50px] rounded-md bg-[#EF682E] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px] flex justify-center gap-2 items-center"><Image src={cart} />Add to Cart</button>
              </div>
              <div className="h-[463px] bg-white border-[1px] border-[#EF682E33]">
                <div className="flex justify-center mt-2">
                  <Image src={pro2} className=" h-[307px] bg-gray-100 mx-2" />
                </div>
                <div className="mt-5">
                  <p className="font-bold text-[#EF682E] text-[20px] text-center">Fresh Tomato</p>
                  <pre className="flex gap-2 justify-center mt-2"><del className=" text-gray-400">$10.00</del><p>$05.00</p> </pre>
                  <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                </div>
              </div>
              <div className="h-[463px]  bg-white border-[1px] border-[#EF682E33]">
                <div className="flex justify-center mt-2">
                  <Image src={pro3} className=" h-[307px] bg-gray-100 mx-2" />
                </div>
                <div className="mt-5">
                  <p className="font-bold text-[#EF682E] text-[20px] text-center">Fresh Tomato</p>
                  <pre className="flex gap-2 justify-center mt-2"><del className=" text-gray-400">$10.00</del><p>$05.00</p> </pre>
                  <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                </div>
              </div>
              <div className="h-[463px] bg-white  border-[1px] border-[#EF682E33]">
                <div className="flex justify-center mt-2">
                  <Image src={pro4} className=" h-[307px] bg-gray-100 mx-2" />
                </div>
                <div className="mt-5">
                  <p className="font-bold text-[#EF682E] text-[20px] text-center">Fresh Tomato</p>
                  <pre className="flex gap-2 justify-center mt-2"><del className=" text-gray-400">$10.00</del><p>$05.00</p> </pre>
                  <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-12">
              <div className="h-[463px] bg-white  border-[1px] border-[#EF682E33]">
                <div className="flex justify-center mt-2">
                  <Image src={pro5} className=" h-[307px] bg-gray-100 mx-2" />
                </div>
                <div className="mt-5">
                  <p className="font-bold text-[#EF682E] text-[20px] text-center">Fresh Tomato</p>
                  <pre className="flex gap-2 justify-center mt-2"><del className=" text-gray-400">$10.00</del><p>$05.00</p> </pre>
                  <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                </div>
              </div>
              <div className="h-[463px] bg-white border-[1px] border-[#EF682E33]">
                <div className="flex justify-center mt-2">
                  <Image src={pro6} className=" h-[307px] bg-gray-100 mx-2" />
                </div>
                <div className="mt-5">
                  <p className="font-bold text-[#EF682E] text-[20px] text-center">Fresh Tomato</p>
                  <pre className="flex gap-2 justify-center mt-2"><del className=" text-gray-400">$10.00</del><p>$05.00</p> </pre>
                  <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                </div>
              </div>
              <div className="h-[463px] bg-white border-[1px] border-[#EF682E33]">
                <div className="flex justify-center mt-2">
                  <Image src={pro7} className=" h-[307px] bg-gray-100 mx-2" />
                </div>
                <div className="mt-5">
                  <p className="font-bold text-[#EF682E] text-[20px] text-center">Fresh Tomato</p>
                  <pre className="flex gap-2 justify-center mt-2"><del className=" text-gray-400">$10.00</del><p>$05.00</p> </pre>
                  <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                </div>
              </div>
              <div className="h-[463px] bg-white  border-[1px] border-[#EF682E33]">
                <div className="flex justify-center mt-2">
                  <Image src={pro8} className=" h-[307px] bg-gray-100 mx-2" />
                </div>
                <div className="mt-5">
                  <p className="font-bold text-[#EF682E] text-[20px] text-center">Fresh Tomato</p>
                  <pre className="flex gap-2 justify-center mt-2"><del className=" text-gray-400">$10.00</del><p>$05.00</p> </pre>
                  <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Todayproduct

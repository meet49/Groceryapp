/* eslint-disable jsx-a11y/alt-text */
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
import Link from 'next/link';

const Todayproduct = () => {
  return (
    <div>
      <div className="bg-[#ffeef1] py-24 bg-[url('../app/assets/img/bg15.png')] bg-no-repeat">
        <div className="  flex flex-col justify-between self-center items-center ">
          <div className="flex flex-col justify-center items-center">
            <button className="bg-[#609E45] text-white px-3 rounded-md font-poppins w-38">Awesome Products</button>
            <p className="font-bold text-[36px] text-[#EF682E] mt-5">Top Savers Today</p>
          </div>
          <div className="flex justify-center flex-wrap gap-6 px-10 2xl:px-40">

            <div className="h-[463px] border-[1px] relative " id="box">
              <div className="flex justify-center mt-2 mx-2">
                <Image src={pro1} className=" h-[307px] bg-gray-100" />
              </div>
              <div className="mt-5 ">
                <p className="font-bold text-[#EF682E] text-[20px] text-center ">Fresh Tomato</p>
                <pre className="flex gap-2 justify-center mt-2"><del className="
      del text-gray-400">$10.00</del><p>$05.00</p> </pre>
                <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
              </div>
              <Link href="/cart">
                <button className="w-[150px] h-[50px] rounded-md bg-[#EF682E] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center hidden gap-2 items-center cursor-pointer " id="btn" ><Image src={cart} />Add to Cart</button>
              </Link>

            </div>

            <div className="h-[463px] border-[1px] relative" id="box">
              <div className="flex justify-center mt-2">
                <Image src={pro2} className=" h-[307px] bg-gray-100 mx-2" />
              </div>
              <div className="mt-5">
                <p className="font-bold text-[#EF682E] text-[20px] text-center">Organic Cabbage</p>
                <pre className="flex gap-2 justify-center mt-2"><del className="
      del text-gray-400">$12.00</del><p>$07.00</p> </pre>
                <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
              </div>
              <Link href="/cart">
                <button className="w-[150px] h-[50px] rounded-md bg-[#EF682E] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center gap-2 items-center cursor-pointer hidden" id="btn"><Image src={cart} />Add to Cart</button>
              </Link>

            </div>

            <div className="h-[463px]   border-[1px] relative" id="box">
              <div className="flex justify-center mt-2">
                <Image src={pro3} className=" h-[307px] bg-gray-100 mx-2" />
              </div>
              <div className="mt-5">
                <p className="font-bold text-[#EF682E] text-[20px] text-center">Yellow Orange</p>
                <pre className="flex gap-2 justify-center mt-2"><del className="
      del text-gray-400">$15.00</del><p>$15.00</p> </pre>
                <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
              </div>
              <Link href="/cart">
                <button className="w-[150px] h-[50px] rounded-md bg-[#EF682E] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center gap-2 items-center cursor-pointer hidden" id="btn"><Image src={cart} />Add to Cart</button>
              </Link>

            </div>

            <div className="h-[463px]   border-[1px] relative" id="box">
              <div className="flex justify-center mt-2">
                <Image src={pro4} className=" h-[307px] bg-gray-100 mx-2" />
              </div>
              <div className="mt-5">
                <p className="font-bold text-[#EF682E] text-[20px] text-center">Broccoli Sliced Mix</p>
                <pre className="flex gap-2 justify-center mt-2"><del className="
      del text-gray-400">$10.00</del><p>$07.00</p> </pre>
                <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
              </div>
              <Link href="/cart">
                <button className="w-[150px] h-[50px] rounded-md bg-[#EF682E] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center gap-2 items-center cursor-pointer hidden" id="btn"><Image src={cart} />Add to Cart</button>
              </Link>

            </div>

            <div className="h-[463px]   border-[1px] relative" id="box">
              <div className="flex justify-center mt-2">
                <Image src={pro5} className=" h-[307px] bg-gray-100 mx-2" />
              </div>
              <div className="mt-5">
                <p className="font-bold text-[#EF682E] text-[20px] text-center">Stoberry 819525</p>
                <pre className="flex gap-2 justify-center mt-2"><del className="
       text-gray-400">$25.00</del><p>$20.00</p> </pre>
                <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
              </div>
              <Link href="/cart">
                <button className="w-[150px] h-[50px] rounded-md bg-[#EF682E] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center gap-2 items-center cursor-pointer hidden" id="btn"><Image src={cart} />Add to Cart</button>
              </Link>

            </div>

            <div className="h-[463px] border-[1px] relative" id="box">
              <div className="flex justify-center mt-2">
                <Image src={pro6} className=" h-[307px] bg-gray-100 mx-2" />
              </div>
              <div className="mt-5">
                <p className="font-bold text-[#EF682E] text-[20px] text-center">Organic Carrot</p>
                <pre className="flex gap-2 justify-center mt-2"><del className="
       text-gray-400">$10.00</del><p>$07.00</p> </pre>
                <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
              </div>
              <Link href="/cart">
                <button className="w-[150px] h-[50px] rounded-md bg-[#EF682E] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center gap-2 items-center cursor-pointer hidden" id="btn"><Image src={cart} />Add to Cart</button>
              </Link>

            </div>

            <div className="h-[463px]  border-[1px] relative" id="box">
              <div className="flex justify-center mt-2">
                <Image src={pro7} className=" h-[307px] bg-gray-100 mx-2" />
              </div>
              <div className="mt-5">
                <p className="font-bold text-[#EF682E] text-[20px] text-center">Organic Kiwi</p>
                <pre className="flex gap-2 justify-center mt-2"><del className="
       text-gray-400">$16.00</del><p>$15.00</p> </pre>
                <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
              </div>
              <Link href="/cart">
                <button className="w-[150px] h-[50px] rounded-md bg-[#EF682E] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center gap-2 items-center cursor-pointer hidden" id="btn"><Image src={cart} />Add to Cart</button>
              </Link>

            </div>

            <div className="h-[463px]  border-[1px] relative" id="box">
              <div className="flex justify-center mt-2">
                <Image src={pro8} className=" h-[307px] bg-gray-100 mx-2" />
              </div>
              <div className="mt-5">
                <p className="font-bold text-[#EF682E] text-[20px] text-center">Sweet Mango</p>
                <pre className="flex gap-2 justify-center mt-2"><del className="
       text-gray-400">$30.00</del><p>$25.00</p> </pre>
                <h1 className="text-center text-yellow-400 mt-2 ">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
              </div>
              <Link href="/cart">
                <button className="w-[150px] h-[50px] rounded-md bg-[#EF682E] text-white mr-1 absolute left-20 bottom-[-20px] text-center text-[16px]  justify-center gap-2 items-center cursor-pointer hidden" id="btn"><Image src={cart} />Add to Cart</button>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Todayproduct

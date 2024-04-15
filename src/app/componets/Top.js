import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import g1 from '@/app/assets/img/g1.png'
import g2 from '@/app/assets/img/g2.png'
import g3 from '@/app/assets/img/g3.png'
import g4 from '@/app/assets/img/g4.png'
import g5 from '@/app/assets/img/g5.png'
import g6 from '@/app/assets/img/g6.png'
import g7 from '@/app/assets/img/g7.png'
import g8 from '@/app/assets/img/g8.png'
import g9 from '@/app/assets/img/g9.png'
import g10 from '@/app/assets/img/g10.png'
import g11 from '@/app/assets/img/g11.png'
import g12 from '@/app/assets/img/g12.png'
import android from '@/app/assets/img/android.png'
import apple from '@/app/assets/img/apple.png'
import phone from '@/app/assets/img/phone.png'
import phonebg from '@/app/assets/img/phonebg.png'
import person2 from '@/app/assets/img/person2.png'
import cart from '@/app/assets/img/cart.png'


export default function Top() {
  return (
    <div>
      <div className="relative">
        <div className="bg-gray-100 flex items-center justify-center gap-10 pt-[450px]">
          <div>
            <p className="mb-8 font-bold text-2xl">Top Sells</p><p className="text-[#EF682E]">_____</p>
            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g1} className="bg-pink-100 rounded-md" />
                <div>
                  <b>Fresh Apple (5 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$25.00</del><p>$20.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g1} className="bg-black rounded-md bg-opacity-35 " />
                <div>
                  <b>Fresh Apple (5 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$25.00</del><p>$20.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />
              </div>
            </div>

            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g2} className="bg-pink-100 rounded-md" />
                <div>
                  <b>Mix Fruits (5 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$25.00</del><p>$20.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g2} className="bg-black rounded-md bg-opacity-35" />
                <div>
                  <b>Mix Fruits (5 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$25.00</del><p>$20.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />

              </div>
            </div>

            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g3} className="bg-pink-100 rounded-md " />
                <div>
                  <b>Banana (12 Piece)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$05.00</del><p>$04.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g3} className="bg-black rounded-md bg-opacity-35" />
                <div>
                  <b>Banana (12 Piece)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$05.00</del><p>$04.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />

              </div>
            </div>

            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g4} className="bg-pink-100 rounded-md" />
                <div>
                  <b>Grapes Juice (3 Bottle)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$25.00</del><p>$15.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g4} className="bg-black rounded-md bg-opacity-35" />
                <div>
                  <b>Grapes Juice (3 Bottle)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$25.00</del><p>$15.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />
              </div>
            </div>
            <Link href="/" className="text-[#EF682E] underline">View All Produds</Link>
          </div>

          <div>
            <p className="mb-8 font-bold text-2xl">Recently Added</p><p className="text-[#EF682E]">_____</p>
            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g5} className="bg-pink-100 rounded-md" />
                <div>
                  <b>Simla Chilli (1 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$10.00</del><p>$07.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g5} className="bg-black rounded-md bg-opacity-35" />
                <div>
                  <b>Simla Chilli (1 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$10.00</del><p>$07.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />

              </div>
            </div>

            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g6} className="bg-pink-100 rounded-md" />
                <div>
                  <b>Organic Potato (5 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$25.00</del><p>$20.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g6} className="bg-black rounded-md bg-opacity-35" />
                <div>
                  <b>Organic Potato (5 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$25.00</del><p>$20.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />
              </div>
            </div>


            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g7} className="bg-pink-100 rounded-md" />
                <div>
                  <b>Cauliflower (1 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$05.00</del><p>$04.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g7} className="bg-black rounded-md bg-opacity-35" />
                <div>
                  <b>Cauliflower (1 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$05.00</del><p>$04.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />
              </div>
            </div>

            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g8} className="bg-pink-100 rounded-md" />
                <div>
                  <b>Peas (1 KG)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$05.00</del><p>$04.50</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g8} className="bg-black rounded-md bg-opacity-35" />
                <div>
                  <b>Peas (1 KG)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$05.00</del><p>$04.50</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />

              </div>
            </div>
            <Link href="/" className="hover:text-[#EF682E] hover:underline">View All Produds</Link>
          </div>
          <div>
            <p className="mb-8 font-bold text-2xl">Top Rated</p><p className="text-[#EF682E]">_____</p>
            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g9} className="bg-pink-100 rounded-md" />
                <div>
                  <b>Fresh Mango (1 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$10.00</del><p>$07.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g9} className="bg-black rounded-md bg-opacity-35" />
                <div>
                  <b>Fresh Mango (1 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$10.00</del><p>$07.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />

              </div>
            </div>

            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g10} className="bg-pink-100 rounded-md" />
                <div>
                  <b>Organic Kiwi (2 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$20.00</del><p>$15.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g10} className="bg-black rounded-md bg-opacity-35" />
                <div>
                  <b>Organic Kiwi (2 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className=" text-gray-400">$20.00</del><p>$15.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />

              </div>
            </div>

            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g11} className="bg-pink-100 rounded-md" />
                <div>
                  <b>Farm Carrot (1 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className="line-through text-gray-400">$05.00</del><p>$04.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g11} className="bg-black rounded-md bg-opacity-35" />
                <div>
                  <b>Farm Carrot (1 kg)</b>
                  <pre className="flex gap-2 mt-2"><del className="line-through text-gray-400">$05.00</del><p>$04.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />

              </div>
            </div>

            <div>
              <div id="firstDiv2" className="flex gap-1 mb-8">
                <Image src={g12} className="bg-pink-100 rounded-md" />
                <div>
                  <b>Fresh Radish (5 piece)</b>
                  <pre className="flex gap-2 mt-2"><del className="line-through text-gray-400">$10.00</del><p>$09.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div id="secondDiv2" className="flex gap-1 mb-8 relative">
                <Image src={g12} className="bg-black rounded-md bg-opacity-35" />
                <div>
                  <b>Fresh Radish (5 piece)</b>
                  <pre className="flex gap-2 mt-2"><del className="line-through text-gray-400">$10.00</del><p>$09.00</p> </pre>
                  <p className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <Image src={cart} className="w-[30px] h-[30px] rounded-md bg-[#EF682E] absolute top-6 left-6" />

              </div>
            </div>

            <Link href="/" className="hover:text-[#EF682E] hover:underline">View All Produds</Link>
          </div>
          <div className="bg-[#609E45] rounded-md">
            <div className="flex flex-col gap-7">
              <div className="text-white text-center flex flex-col items-center gap-5 pt-8">
                <p className="font-bold text-[20px]">Free Delivery Over $50.00</p>
                <p className="text-[16px] w-[253px]">Shop $50.00+ Producrs and Get Free Delivery Anywhere</p>
                <button className="w-[118px] h-[50px] bg-white text-[#609E45] rounded-md font-poppins font-semibold text-base">Shop Now</button>
              </div>
              <Image src={person2} className="pt-10" />
            </div>
          </div>
        </div>
        <div className="flex  w-[80%] bg-[url('../app/assets/img/bgg1.png')] bg-[#609E45] justify-around rounded-xl h-[500px] items-center absolute  top-[-200px] left-44">
          <div className="text-white">
            <p className="text-4xl w-[460px] mb-5">Shopping for vegetables & fruits is easier with</p>
            <p className="text-4xl font-bold mb-5">TRoo Grocery App</p>
            <p className="text-2xl mb-5">Available on Both Android and ios</p>
            <button><Image src={android} className="mr-5" /></button>
            <button><Image src={apple} /></button>
          </div>
          <div className="relative">
            <Image src={phonebg} />
            <Image src={phone} className="absolute bottom-0 right-20 top-[-20px]" />
          </div>
        </div>
      </div >
    </div >
  )
}

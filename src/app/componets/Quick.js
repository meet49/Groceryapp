import React from 'react'
import Image from 'next/image';
import truck from '@/app/assets/img/truck.png'
import fruits from '@/app/assets/img/fruits.png'
import refresh from '@/app/assets/img/refresh.png'
import wallet from '@/app/assets/img/wallet.png'


function Quick() {
  return (
    <div>
      <div className=" h-[287px] bg-white flex gap-20 py-28 pl-60">
          <div>
            <div className=" border-[#609E45] border-[1px] inline-block rounded-md w-[260px] h-[87px] relative">
              <p className="font-bold ml-11">Free Shipping.</p>
              <p className="text-[16px] ml-11">No one rejects, dislikes.</p>
              <Image src={truck} className="absolute bottom-6 left-[-18px] bg-white border-[#609E45] border-[1px] rounded-[50%] h-10" />
            </div>
          </div>
          <div>
            <div className=" border-[#EF682E33] border-[1px] inline-block rounded-md w-[260px] h-[87px] relative hover:border-[#609E45]">
              <p className="font-bold ml-11">100% Netural </p>
              <p className="text-[16px] ml-11">No one rejects, dislikes.</p>
              <Image src={fruits} className="absolute bottom-6 left-[-18px] bg-white border-[#EF682E33] border-[1px] rounded-[50%] h-10" />
            </div>
          </div>
          <div>
            <div className=" border-[#EF682E33] border-[1px] inline-block rounded-md w-[260px] h-[87px] relative hover:border-[#609E45]">
              <p className="font-bold ml-11">Easy Free Returns</p>
              <p className="text-[16px] ml-11">No one rejects, dislikes.</p>
              <Image src={refresh} className="absolute bottom-6 left-[-18px] bg-white border-[#EF682E33] border-[1px] rounded-[50%] h-10" />
            </div>
          </div>
          <div>
            <div className=" border-[#EF682E33] border-[1px] inline-block rounded-md w-[260px] h-[87px] relative hover:border-[#609E45]">
              <p className="font-bold ml-11">100% Payment Secure</p>
              <p className="text-[16px] ml-11">No one rejects, dislikes.</p>
              <Image src={wallet} className="absolute bottom-6 left-[-18px] bg-white border-[#EF682E33] border-[1px] rounded-[50%] h-10" />
            </div>
          </div>

        </div>
    </div>
  )
}

export default Quick

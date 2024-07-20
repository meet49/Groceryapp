/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import i2 from "@/app/assets/img/ai5.png";
import i3 from "@/app/assets/img/ai6.png";
import i4 from "@/app/assets/img/ai7.png";

function Jorney() {
  return (
    <>
      <div className="bg-[#ffe8df] pl-10 lg:pl-0">
        <div className="bg-[#ffe8df] pt-10 flex flex-col justify-start items-start lg:justify-center lg:items-center">
          <div className="inline-block h-[124px] bg-white rounded-md">
            <p className="font-poppins font-bold text-xl text-center w-[258px] mx-8 pt-8">
              Launched our product on 28 Nov 2013
            </p>
          </div>
          <Image src={i2} />
          <button className="w-[76px] h-[28px] rounded-md text-white bg-[#609E45] my-10">
            Lounch
          </button>
        </div>

        <div className=" lg:hidden flex flex-col bg-no-repeat bg-[#ffe8df]  h-screen  bg-[url('../app/assets/img/bg3.png')]">
          <div className="flex flex-col  gap-3 pb-2  ">
            <div className="flex gap-2 items-center justify-start">
              <div className="border-[6px] border-[#EF682E] rounded-full p-1  bg-[#ffd0bb] "></div>
              <p className="text-[#EF682E] font-bold text-xl w-[50%]">
                20 November,2013
              </p>
            </div>
            <div className="flex justify-start items-center w-[50%]">
              <Image src={i4} />
              <div className=" flex flex-col text-left items-start h-[166px] rounded-md bg-white pl-5 gap-2">
                <p className="text-[#609E45] font-bold">____</p>
                <p className="font-poppins font-bold text-base  ">
                  Started Our Online Store
                </p>
                <p className="font-poppins  text-base text-[#777777] w-[425px]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pb-2">
            <div className="flex gap-2 items-center justify-start">
              <div className="border-[6px] border-[#609E45] rounded-full p-1  bg-[#ffd0bb]"></div>
              <p className="text-[#609E45] font-bold text-xl flex justify-start w-[50%]">
                05 December,2015
              </p>
            </div>
            <div className="flex justify-start items-center w-[50%]">
              <Image src={i4} />
              <div className=" flex flex-col text-start h-[166px] bg-white rounded-md pl-5 gap-2">
                <p className="text-[#609E45] text-left font-bold">____</p>
                <p className="font-poppins font-bold text-base  ">
                  Hired 20 employee
                </p>
                <p className="font-poppins  text-base text-[#777777] w-[425px]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pb-2">
            <div className="flex gap-2 items-center justify-start">
              <div className="border-[6px] border-[#EF682E] rounded-full p-1  bg-[#ffd0bb]"></div>
              <p className="text-[#609E45] font-bold text-xl flex justify-start w-[50%]">
                07 June,2016
              </p>
            </div>
            <div className="flex justify-start items-center w-[50%]">
              <Image src={i4} />
              <div className=" flex flex-col text-left items-start h-[166px] rounded-md bg-white pl-5 gap-2">
                <p className="text-[#609E45] font-bold">____</p>
                <p className="font-poppins font-bold text-base  ">
                  Lounched 25+ more Products
                </p>
                <p className="font-poppins  text-base text-[#777777] w-[425px]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pb-2">
            <div className="flex gap-2 items-center justify-start">
              <div className="border-[6px] border-[#609E45] rounded-full p-1  bg-[#ffd0bb]"></div>
              <p className="text-[#609E45] font-bold text-xl flex justify-start w-[50%]">
              13 August ,2020
              </p>
            </div>
            <div className="flex justify-start items-center w-[50%]">
              <Image src={i4} />
              <div className=" flex flex-col text-start h-[166px] bg-white rounded-md pl-5 gap-2">
                <p className="text-[#609E45] text-left font-bold">____</p>
                <p className="font-poppins font-bold text-base  ">
                Open Second Store in NYC
                </p>
                <p className="font-poppins  text-base text-[#777777] w-[425px]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden  lg:flex flex-col bg-no-repeat bg-[#ffe8df] bg-center h-screen  bg-[url('../app/assets/img/bg3.png')]">
          <div className="flex justify-center items-center gap-10 pt-3 ">
            <div className="flex justify-end items-center w-[50%]">
              <div className=" flex flex-col text-right items-end h-[166px] rounded-md bg-white pr-5 gap-2">
                <p className="text-[#609E45] font-bold">____</p>
                <p className="font-poppins font-bold text-base  ">
                  Started Our Online Store
                </p>
                <p className="font-poppins  text-base text-[#777777] w-[425px]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece.
                </p>
              </div>
              <Image src={i3} />
            </div>
            <div className="border-[6px] border-[#EF682E] rounded-full p-1  bg-[#ffd0bb] "></div>
            <p className="text-[#EF682E] font-bold text-xl w-[50%]">
              20 November,2013
            </p>
          </div>

          <div className="flex justify-center items-center gap-10  pt-3 ">
            <p className="text-[#609E45] font-bold text-xl flex justify-end w-[50%]">
              05 December,2015
            </p>
            <div className="border-[6px] border-[#609E45] rounded-full p-1  bg-[#ffd0bb]"></div>
            <div className="flex justify-start items-center w-[50%]">
              <Image src={i4} />
              <div className=" flex flex-col text-start h-[166px] bg-white rounded-md pl-5 gap-2">
                <p className="text-[#609E45] text-left font-bold">____</p>
                <p className="font-poppins font-bold text-base  ">
                  Hired 20 employee
                </p>
                <p className="font-poppins  text-base text-[#777777] w-[425px]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-10 pt-3 ">
            <div className="flex items-center justify-end w-[50%]">
              <div className=" flex flex-col text-right items-end h-[166px] rounded-md bg-white pr-5 gap-2">
                <p className="text-[#609E45] font-bold">____</p>
                <p className="font-poppins font-bold text-base  ">
                  Lounched 25+ more Products
                </p>
                <p className="font-poppins  text-base text-[#777777] w-[425px]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece.
                </p>
              </div>
              <Image src={i3} />
            </div>
            <div className="border-[6px] border-[#EF682E] rounded-full p-1  bg-[#ffd0bb]"></div>
            <p className="text-[#EF682E] font-bold text-xl w-[50%] ">
              07 June,2016
            </p>
          </div>

          <div className="flex justify-center items-center gap-10  pt-3 ">
            <p className="text-[#609E45] font-bold text-xl w-[50%] flex justify-end">
              13 August ,2020
            </p>
            <div className="border-[6px] border-[#609E45] rounded-full p-1  bg-[#ffd0bb]"></div>
            <div className="flex justify-start items-center w-[50%]">
              <Image src={i4} />
              <div className=" flex flex-col text-start h-[166px] bg-white rounded-md pl-5 gap-2">
                <p className="text-[#609E45] font-bold">____</p>
                <p className="font-poppins font-bold text-base  ">
                  Open Second Store in NYC
                </p>
                <p className="font-poppins  text-base text-[#777777] w-[425px]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffe8df]  hidden lg:flex justify-center items-center pt-9 pb-40">
        <button className=" h-[28px] rounded-md text-white bg-[#EF682E] w-[76px] ">
          Now
        </button>
      </div>
      <div className="bg-[#ffe8df]  lg:hidden flex justify-start items-start pt-20 pl-10 pb-20">
        <button className=" h-[28px] rounded-md text-white bg-[#EF682E] w-[76px] ">
          Now
        </button>
      </div>
    </>
  );
}

export default Jorney;

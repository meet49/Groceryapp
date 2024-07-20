"use client"
import React from 'react'
import Image from 'next/image'
import drop from '@/app/assets/img/drop.png'
import arrow from '@/app/assets/img/vector1.png'
import { useState } from 'react';

function Queastion() {
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);
    const [showText5, setShowText5] = useState(false);
    const [showText6, setShowText6] = useState(false);
    const [showText7, setShowText7] = useState(false);
    const [showText8, setShowText8] = useState(false);
    const [showText9, setShowText9] = useState(false);
    const [showText10, setShowText10] = useState(false);
    const [showText11, setShowText11] = useState(false);
    const [showText12, setShowText12] = useState(false);
    const [showText13, setShowText13] = useState(false);
    const [showText14, setShowText14] = useState(false);
    const [showText15, setShowText15] = useState(false);
    const [showText16, setShowText16] = useState(false);
    const [showText17, setShowText17] = useState(false);
    const [showText18, setShowText18] = useState(false);
    const [showText19, setShowText19] = useState(false);
    const [showText20, setShowText20] = useState(false);

    const toggleText1 = () => {
        setShowText1(!showText1);
    };
    const toggleText2 = () => {
        setShowText2(!showText2);
    };
    const toggleText3 = () => {
        setShowText3(!showText3);
    };
    const toggleText4 = () => {
        setShowText4(!showText4);
    };
    const toggleText5 = () => {
        setShowText5(!showText5);
    };
    const toggleText6 = () => {
        setShowText6(!showText6);
    };
    const toggleText7 = () => {
        setShowText7(!showText7);
    };
    const toggleText8 = () => {
        setShowText8(!showText8);
    };
    const toggleText9 = () => {
        setShowText9(!showText9);
    };
    const toggleText10 = () => {
        setShowText10(!showText10);
    };
    const toggleText11 = () => {
        setShowText11(!showText11);
    };
    const toggleText12 = () => {
        setShowText12(!showText12);
    };
    const toggleText13 = () => {
        setShowText13(!showText13);
    };
    const toggleText14 = () => {
        setShowText14(!showText14);
    };
    const toggleText15 = () => {
        setShowText15(!showText15);
    };
    const toggleText16 = () => {
        setShowText16(!showText16);
    };
    const toggleText17 = () => {
        setShowText17(!showText17);
    };
    const toggleText18 = () => {
        setShowText18(!showText18);
    };
    const toggleText19 = () => {
        setShowText19(!showText19);
    };
    const toggleText20 = () => {
        setShowText20(!showText20);
    };




    <div className="flex flex-col w-[635px]">
        <div className="flex justify-between w-[635px] h-[62px] border border-[#EF682E33]" onClick={toggleText1}>
            <button>How do I Claim a Free Coupon?</button>
            <Image src={drop} className="w-[23.14px] h-6 mt-4 mr-5" />
        </div>
        <p style={{ display: showText1 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
    </div>

    return (
        <div>
            <div className="bg-white">
                <div className="flex flex-wrap gap-5 justify-center">
                    <div className="flex flex-col gap-5 mt-5  px-3">
                        <h1 className="text-xl font-bold text-[#609E45] pt-3 pl-5 md:w-[635px] h-[62px] border border-[#EF682E33]">Pre-Sale Questions</h1>
                        <div className="flex flex-col md:w-[635px] rounded-md ">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText1} style={{ backgroundColor: showText1 ? '#609E45' : 'white', color: showText1 ? 'white' : 'black' }}>
                                <button>How do I Claim a Free Coupon?</button>
                                <Image src={drop} className="w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText1 ? 'block' : 'none' }} className="p-5 text-justify">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText2} style={{ backgroundColor: showText2 ? '#609E45' : 'white', color: showText2 ? 'white' : 'black' }}>
                                <button>How do I Make a regular Table Booking?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText2 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText3} style={{ backgroundColor: showText3 ? '#609E45' : 'white', color: showText3 ? 'white' : 'black' }}>
                                <button>{`How can I be certain my booking's been received?`}</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText3 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText4} style={{ backgroundColor: showText4 ? '#609E45' : 'white', color: showText4 ? 'white' : 'black' }}>
                                <button>{`What happens if I'm running late?`}</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText4 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px] ">
                            <div className="flex justify-between h-[62px] pl-5 border border-[#EF682E33]" onClick={toggleText5} style={{ backgroundColor: showText5 ? '#609E45' : 'white', color: showText5 ? 'white' : 'black' }}>
                                <button>Why do you need my email address?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText5 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 mt-5  px-3">
                        <h1 className="text-xl font-bold pl-5 pt-3 text-[#609E45] md:w-[635px] h-[62px] border border-[#EF682E33]">Delivery Quistions</h1>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText6} style={{ backgroundColor: showText6 ? '#609E45' : 'white', color: showText6 ? 'white' : 'black' }}>
                                <button>How do I Claim a Free Coupon?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText6 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText7} style={{ backgroundColor: showText7 ? '#609E45' : 'white', color: showText7 ? 'white' : 'black' }}>
                                <button>How do I Make a regular Table Booking?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText7 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText8} style={{ backgroundColor: showText8 ? '#609E45' : 'white', color: showText8 ? 'white' : 'black' }}>
                                <button>{`How can I be certain my booking's been received?`}</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText8 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText9} style={{ backgroundColor: showText9 ? '#609E45' : 'white', color: showText9 ? 'white' : 'black' }}>
                                <button>{`What happens if I'm running late?`}</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText9 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px] ">
                            <div className="flex justify-between h-[62px] pl-5 border border-[#EF682E33]" onClick={toggleText10} style={{ backgroundColor: showText10 ? '#609E45' : 'white', color: showText10 ? 'white' : 'black' }}>
                                <button>Why do you need my email address?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText10 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap  gap-5 justify-center pb-5">
                    <div className="flex flex-col gap-5 mt-10  px-3">
                        <h1 className="text-xl font-bold pl-5 pt-3 text-[#609E45] md:w-[635px] h-[62px] border border-[#EF682E33]">Pricing Questions</h1>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText11} style={{ backgroundColor: showText11 ? '#609E45' : 'white', color: showText11 ? 'white' : 'black' }}>
                                <button>How do I Claim a Free Coupon?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText11 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText12} style={{ backgroundColor: showText12 ? '#609E45' : 'white', color: showText12 ? 'white' : 'black' }}>
                                <button>How do I Make a regular Table Booking?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText12 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText13} style={{ backgroundColor: showText13 ? '#609E45' : 'white', color: showText13 ? 'white' : 'black' }}>
                                <button>{`How can I be certain my booking's been received?`}</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText13 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText14} style={{ backgroundColor: showText14 ? '#609E45' : 'white', color: showText14 ? 'white' : 'black' }}>
                                <button>{`What happens if I'm running late`}?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText14 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px] ">
                            <div className="flex justify-between h-[62px] pl-5 border border-[#EF682E33]" onClick={toggleText15} style={{ backgroundColor: showText15 ? '#609E45' : 'white', color: showText15 ? 'white' : 'black' }}>
                                <button>Why do you need my email address?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText15 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 mt-10 px-3">
                        <h1 className="text-xl font-bold pl-5 pt-3 text-[#609E45] md:w-[635px] h-[62px] border border-[#EF682E33]">My Account Quistions</h1>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText16} style={{ backgroundColor: showText16 ? '#609E45' : 'white', color: showText16 ? 'white' : 'black' }}>
                                <button>How do I Claim a Free Coupon?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText16 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText17} style={{ backgroundColor: showText17 ? '#609E45' : 'white', color: showText17 ? 'white' : 'black' }}>
                                <button>How do I Make a regular Table Booking?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText17 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText18} style={{ backgroundColor: showText18? '#609E45' : 'white', color: showText18 ? 'white' : 'black' }}>
                                <button>{`How can I be certain my booking's been received?`}</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText18 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text`}.</p>
                        </div>
                        <div className="flex flex-col md:w-[635px]">
                            <div className="flex justify-between md:w-[635px] pl-5 h-[62px] border border-[#EF682E33]" onClick={toggleText19} style={{ backgroundColor: showText19 ? '#609E45' : 'white', color: showText19 ? 'white' : 'black' }}>
                                <button>{`What happens if I'm running late?`}</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText19 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                        <div className="flex flex-col md:w-[635px] ">
                            <div className="flex justify-between h-[62px] pl-5 border border-[#EF682E33]" onClick={toggleText20} style={{ backgroundColor: showText20 ? '#609E45' : 'white', color: showText20 ? 'white' : 'black' }}>
                                <button>Why do you need my email address?</button>
                                <Image src={drop} className="md:w-[23.14px] h-6 mt-4 mr-5" />
                            </div>
                            <p style={{ display: showText20 ? 'block' : 'none' }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center h-[104.4px] flex justify-center items-center bg-white">
                <p className="flex text-base gap-1">{`Don’t find your answer?`} <b className="text-[#609E45] flex font-bold text-xl gap-1"> Contact us <Image src={arrow} className="w-[33.39px]" /></b></p>
            </div>
        </div>
    )
}

export default Queastion

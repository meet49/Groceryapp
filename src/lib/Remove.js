"use client"
import Footer from '@/app/componets/Footer'
import Navbar from '@/app/componets/Navbar'
import { usePathname } from 'next/navigation'
import React from 'react'

function Remove({ props }) {
    const path = usePathname()

    if (path === "/login" || path === "/signup" || path === "/comingsoon") {
        return (
            <div>
                {props}
            </div>
        )
    }
    if (path === "/checkout") {
        return (
            <div>
                <Navbar/>
                {props}
            </div>
        )
    }
    if (path === "/" ||path === "/aboutus" || path === "/blogdetail" || path === "/cart" || path === "/thankyou" || path === "/contact" || path === "/faq" || path === "/ourblog" || path === "/ourproducts" || path === "/ourteam" || path === "/productdetail" || path === "/testimonial") {
        return (
            <div>
                <Navbar />
                {props}
                <Footer />
            </div>
        )
    }
    return (
        <div>
            {props}
        </div>
    )
}

export default Remove

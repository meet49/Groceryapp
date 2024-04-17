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
    
    return (
        <div>
            <Navbar />
            {props}
            <Footer />
        </div>
    )
}

export default Remove

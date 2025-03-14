import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef()

    const openmenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closemenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(scrollY > 50){
                setIsScroll(true)
            }
            else{
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <div className="fixed inset-0 z-[-1]">
                <Image
                    src={assets.header_bg_color}
                    alt=""
                    className="w-full h-full object-cover opacity-100"
                />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top" className='invisible pr-24'>
                    damnnn
                    {/* <Image src={assets.logo} alt='' className='w-28 cursor-pointer mr-14' /> */}
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-16 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#skills">Skills</a></li>
                    <li><a className='font-Ovo' href="#work">My work</a></li>
                </ul>

                <div className='flex items-center gap-4 '>
                    
                    <a href="#contact" className='hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} alt='' className='w-3' /> </a>

                    <button onClick={openmenu} className='block md:hidden ml-3'>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* mobile */}

                <ul ref={sideMenuRef} className='flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 md:hidden'>
                    
                    <div onClick={closemenu} className='absolute right-6 top-6'>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
                    </div>
                    <li><a onClick={closemenu} className='font-Ovo' href="#top">Home</a></li>
                    <li><a onClick={closemenu} className='font-Ovo' href="#about">About me</a></li>
                    <li><a onClick={closemenu} className='font-Ovo' href="#work">My work</a></li>
                    <li><a onClick={closemenu} className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
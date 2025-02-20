import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

export const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

            <h3 className='text-2xl md:text-3xl mb-3 font-Ovo animate-slideUpFade'>
                Hi! I'm Pranith 👋
            </h3>
            <h1 className='text-4xl mb-2 sm:text-6xl lg:text-[66px] font-Ovo animate-slideUpFade2'> frontend developer </h1>

            <p className='text-lg max-w-5xl mx-auto my-2 font-Ovo animate-slideUpFade'>
                Welcome to My Portfolio! Here, you’ll find a little about me, my skills, and the projects I’ve worked on. I hope my work gives you a glimpse into my passion for web development.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 animate-slideUpFade2'>
                <a href="#contact"
                    className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 hover:bg-blue-400 transition duration-500'
                >Contact me
                    <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </a>
                <a href="/Resume.pdf" download
                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-blue-400 transition duration-500'
                >My resume
                    <Image src={assets.download_icon} alt='' className='w-4' />
                </a>
            </div>
        </div>
    )
}

import { infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full flex flex-col items-center px-[12%] py-10 scroll-m-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo' >About me</h2>

            <p className='my-10 max-w-2xl font-Ovo'>
            I’m a self-taught front-end developer with a passion for creating visually appealing and user-friendly websites. My journey began with curiosity and a desire to understand how web pages are built. Through online resources, hands-on projects, and constant experimentation, I’ve developed my skills in HTML, CSS, JavaScript, and frameworks like React, Next.js, and Tailwind CSS. For the back-end, I’ve worked with Firebase and Supabase to create dynamic, data-driven applications. I enjoy solving problems, learning new technologies, and turning creative ideas into functional websites. My goal is to always deliver clear, responsive, and engaging web experiences.
            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl'>
                {infoList.map(({icon, title, description}, index) => (
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                     key={index}>
                        <Image className='w-7 mt-3'
                        src={icon} alt={title} />
                        <h3 className='my-4 font-semibold text-gray-900'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                    </li>
                ))}
            </ul>
        
    </div>
  )
}

export default About
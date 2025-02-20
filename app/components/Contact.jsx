import { React, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


const Contact = () => {

  const links = [
    { name: "Gmail",  icon: <FaEnvelope /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pranith-ng", icon: <FaLinkedin /> },
    { name: "GitHub", url: "https://github.com/pranith-ng", icon: <FaGithub /> },
  ];

  const [clipboardmessage, setclipboardmessage] = useState(null)
  const [result, setResult] = useState("");

  function gmailcopy(){
    const email = "pranithpoojari1@gmail.com"

    navigator.clipboard.writeText(email).then(() => {
      setclipboardmessage('Email has been copied to clipboard!')

      setTimeout(() => {
        setclipboardmessage(null)
      }, 3000)
    })  
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_API_URL);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>




      {/* <h4 className='text-center mb-2 text-lg font-Ovo'>
        Connect with me
      </h4> */}
      <h2 className='text-center text-5xl font-Ovo'>
        Connect with me
      </h2>


      <div className="p-6 text-center">
        <div className="flex gap-4 justify-center">
          {links.map((link, index) => (
            <a
              onClick={link.name === 'Gmail' ? gmailcopy : undefined}
              key={index}
              href={link.url ? link.url : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 transition hover:bg-gray-100 rounded-lg text-xl"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        <p className="text-sm text-gray mt-4">{clipboardmessage}</p>
      </div>


      <p className='text-center max-w-2xl mx-auto mb-12 font-Ovo'>
        if you have any questions comments or feedback please use the form below
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
            type="text" placeholder='enter your name' required name='name' />
          <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
            type="email" placeholder='enter your email' required name='email' />
        </div>
        <textarea className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
          rows='6' placeholder='enter your message' required name='message' ></textarea>

        <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
          type='submit'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /> </button>

        <p className=''>{result}</p>
      </form>




    </div>
  )
}

export default Contact
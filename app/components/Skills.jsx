import React from 'react'

const Skills = () => {

    const skill = [
        { name: "HTML", image: "/html-5.png" },
        { name: "CSS", image: "/css-3.png" },
        { name: "JavaScript", image: "/js.png" },
        { name: "React", image: "/react.png" },
        { name: "Next.js", image: "./nextjs.png" },
        { name: "Tailwind CSS", image: "/tailwindcss.png" },
        { name: "Firebase", image: "/firebase.png" },
        { name: "Git", image: "/git.png" },
        { name: "Github", image: "/github.png" },
        ];


    return (
        <div id='skills' className="max-w-3xl m-auto flex flex-col items-center py-12 scroll-m-20">
            <h1 className="text-center text-5xl font-Ovo mb-8">My Skills</h1>
            <div className="grid grid-cols-2 w-fit sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:w-full max-w-7xl">
                {skill.map((skil, index) => (
                    <div
                        key={index}
                        className="group rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center"
                    >
                        <img
                            src={skil.image}
                            alt={skil.name}
                            className="h-14 transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <h2 className="pt-4 text-xl font-medium text-gray-800 text-center">{skil.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
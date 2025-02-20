'use client'
import React from 'react'
import ProjectPageTemplate from '@/app/components/ProjectPageTemplate';

const page = () => {

    const exampleProject = {
        title: 'Web.builder',
        description: 'A powerful, easy-to-use Drag and Drop website builder for creating websites without any code. Built using Next.js and Tailwind CSS for seamless user experience.',
        techStack: [
            { category: 'Frontend', details: 'Next.js, Tailwind CSS, React' },
            { category: 'Backend', details: 'Firebase (Firestore, database, functions)' },
            { category: 'Authentication', details: 'Firebase Authentication (Email, Sign-In ,Sign-Up)' },
            { category: 'Storage', details: 'Supabase(Storage)' },
        ],
        features: [
            {
                description: 'Authentication and user dashboard (All user data is stored in firebase Database)',
                gif: '/projectGifs/web.builder/webbuilder1.mp4',
            },
            {
                description: 'Live customization of elements',
                gif: '/projectGifs/web.builder/webbuilder2.mp4',
            },
            {
                description: 'Drag and Drop elements',
                gif: '/projectGifs/web.builder/webbuilder3.mp4',
            },
            {
                description: 'Undo / Redo Functionalities',
                gif: '/projectGifs/web.builder/webbuilder4.mp4',
            },
            {
                description: 'CSS Style customization tool',
                gif: '/projectGifs/web.builder/webbuilder5.mp4',
            },
            {
                description: 'Sidebar tools',
                gif: '/projectGifs/web.builder/webbuilder6.mp4',
            },
        ],
        links: [
            {
                name: "GitHub Repository",
                href: "https://github.com/pranith-ng/Web.builder"
            },
            {
                name: "Visit Website",
                href: "https://web-builder-sandy.vercel.app/"
            }
        ]
    };

    return (
        <ProjectPageTemplate projectData={exampleProject} />
    )
}

export default page
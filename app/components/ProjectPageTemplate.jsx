'use client';

import React, { useEffect } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const ProjectPageTemplate = ({ projectData }) => {
    const {
        title,
        description,
        techStack,
        features,
        visitLink
    } = projectData;

    return (
        <div className="relative min-h-screen pb-9">
            {/* Background Image */}
            <div className="fixed inset-0 z-[-1]">
                <Image
                    src={assets.header_bg_color}
                    alt='bg-image'
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            {/* Page Content */}
            <div className="relative max-w-screen-lg mx-auto p-8">
                {/* Header */}
                <header className="text-center text-black mt-8 mb-16">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="text-xl mt-4">{description}</p>
                </header>

                {/* Tech Stack */}
                <section className="my-16">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tech Stack Used</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
                        {techStack.map((stack, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                <h3 className="font-bold text-xl">{stack.category}</h3>
                                <p>{stack.details}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features */}
                <section className="my-16">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Features</h2>
                    <ul className="flex flex-col items-center space-y-12">
                        {features.map((feature, index) => (
                            <li key={index} className="flex flex-col items-center text-center">
                                <p className="text-lg">{feature.description}</p>
                                <div className="mt-4">
                                    <video
                                        src={feature.gif}
                                        alt={feature.description}
                                        className="rounded-lg shadow-lg max-w-full h-auto"
                                        autoPlay
                                        loop
                                        muted
                                        controls
                                    ></video>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Fixed Bottom Capsule */}
            {visitLink && (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-2 w-4/5 max-w-3xl bg-blue-700 bg-opacity-50 text-white rounded-full shadow-lg backdrop-blur-lg border border-white border-opacity-30">
        <div className="flex justify-between items-center space-x-4 w-full h-10">
            <div></div> {/* Empty div to create space on the left */}
            <button className="px-6 py-2 text-lg rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-200 ml-auto">
                Visit Website
            </button>
        </div>
    </div>
)}




        </div>
    );
};

export default ProjectPageTemplate;

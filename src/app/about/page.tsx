import React from 'react';
import Navbar from '../navbar/page';
import { BsCircleFill } from 'react-icons/bs';

const Page = () => {
    return (
        <div>
            <Navbar />
            <div className="p-4 md:p-8">
                {/* Education and Experience Section */}
                <div className="grid md:grid-cols-2 gap-6 mx-4 mt-6 bg-slate-300 p-6 rounded-3xl shadow-lg mb-6">
                    <div className="bg-white hover:bg-pink-200 rounded-3xl p-4">
                        <h5 className="text-2xl font-bold text-purple-950 mb-3 font-serif">Education</h5>
                        <h6 className="text-xl font-semibold font-serif">I.Com</h6>
                        <p className="font-medium">J.M.B College (2021-2023)</p>
                        <p className="text-gray-600 mt-1">
                            Currently pursuing an IT diploma from Governor Initiative for Artificial Intelligence, Web 3.0, & Metaverse.
                        </p>
                    </div>
                    <div className="bg-white hover:bg-pink-200 rounded-3xl p-4">
                        <h5 className="text-2xl font-bold text-purple-950 mb-3 font-serif">Experience</h5>
                        <h6 className="text-xl font-semibold font-serif">Freelance Web Development Projects</h6>
                        <p className="text-gray-600 mt-3">
                            Worked on building responsive websites using Next.js, Tailwind CSS, and TypeScript for personal and academic projects.
                        </p>
                    </div>
                </div>

                {/* Languages Section */}
                <div className='mx-4 mt-6 bg-slate-300 p-6 rounded-3xl shadow-lg mb-6'>
                    <div className="bg-white hover:bg-pink-200 rounded-3xl p-4 w-full">
                        <h5 className="text-2xl font-bold text-purple-950 mb-3 font-serif">Languages</h5>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <BsCircleFill className='pt-2'/>
                                <h6 className='font-semibold text-lg font-serif'>HTML :</h6>
                                <p className="text-sm sm:text-base">I possess a strong foundation in <b>HTML</b> at <b>70%</b>, allowing me to create well-structured web pages.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <BsCircleFill className='pt-2'/>
                                <h6 className="font-semibold text-lg font-serif">CSS :</h6>
                                <p className="text-sm sm:text-base">My proficiency in <b>CSS</b> stands at <b>65%</b>, enabling me to enhance the visual appeal of web applications.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <BsCircleFill className='pt-2'/>
                                <h6 className="font-semibold text-lg font-serif">JavaScript :</h6>
                                <p className="text-sm sm:text-base">I have a skill level of <b>60%</b> in <b>JavaScript</b>, which empowers me to add interactivity to web projects.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <BsCircleFill className='pt-2'/>
                                <h6 className="font-semibold text-lg font-serif">Tailwind CSS :</h6>
                                <p className="text-sm sm:text-base">I excel in <b>Tailwind CSS</b> with a proficiency level of <b>75%</b>, helping me develop modern and responsive designs.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <BsCircleFill className='pt-2'/>
                                <h6 className="font-semibold text-lg font-serif">Next.js :</h6>
                                <p className="text-sm sm:text-base">I have expertise in <b>Next.js</b> at <b>70%</b>, which helps me build dynamic web applications.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <BsCircleFill className='pt-2'/>
                                <h6 className="font-semibold text-lg font-serif">MS Office :</h6>
                                <p className="text-sm sm:text-base">I am proficient in <b>MS Office</b> at <b>85%</b>, assisting me with documents, presentations, and data analysis.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <BsCircleFill className='pt-2'/>
                                <h6 className="font-semibold text-lg font-serif">Figma :</h6>
                                <p className="text-sm sm:text-base">I possess an <b>80%</b> skill level in <b>Figma</b>, which aids me in efficient prototyping and collaboration for design projects.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tools Section */}
                <div className='mx-4 mt-6 bg-slate-300 p-6 rounded-3xl shadow-lg mb-6'>
                    <div className="bg-white hover:bg-pink-200 rounded-3xl p-4">
                        <h5 className="text-2xl font-bold text-purple-950 mb-3 font-serif">Tools</h5>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <BsCircleFill className='pt-2'/>
                                <h6 className="font-semibold text-lg font-serif">Next.js :</h6>
                                <p className="text-sm sm:text-base">I have expertise in <b>Next.js</b> at <b>70%</b>, which helps me build dynamic web applications.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <BsCircleFill className='pt-2'/>
                                <h6 className="font-semibold text-lg font-serif">Tailwind CSS :</h6>
                                <p className="text-sm sm:text-base">I possess a <b>75%</b> proficiency in Tailwind <b>CSS</b>, enabling me to create modern and responsive designs.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <BsCircleFill className='pt-2'/>
                                <h6 className="font-semibold text-lg font-serif">Figma :</h6>
                                <p className="text-sm sm:text-base">I have an <b>80%</b> skill level in <b>Figma</b>, which aids me in efficient prototyping and collaboration for design projects.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <BsCircleFill className='pt-2'/>
                                <h6 className="font-semibold text-lg font-serif">MS Office :</h6>
                                <p className="text-sm sm:text-base">I am proficient in <b>MS Office</b> at <b>85%</b>, assisting me with documents, presentations, and data analysis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;

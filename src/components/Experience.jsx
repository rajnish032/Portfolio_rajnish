import React from 'react';

export default function Experience() {
    return (
        <div className='w-full flex flex-col gap-2'>
            <h1 className='text-4xl font-bold text-violet-500 mb-3 md:text-start text-center'>Experience</h1>
            {/* Experience */}
            {/* Work Container */}
            <div className='relative flex md:px-0 px-3 text-justify gap-8'>
                {/* Line */}
                <div className='h-full border-l-2 md:block hidden border-slate-500'></div>
                <div className='flex flex-col gap-5'>
                    {/* Company Details */}
                    <div className='text-slate-400 flex items-center gap-4'>
                        <img className="rounded-full w-[80px] shadow-sm shadow-white" src="https://res.cloudinary.com/dfrcswf0n/image/upload/v1730799984/aero2astrologo_qqdm04.png" alt="Aero2Astro" />
                        <div className='flex flex-col'>
                            <h1 className='text-2xl text-white'>Aero2Astro</h1>
                            <h3 className='text-[18px]'>Full Stack Developer</h3>
                            <h4 className='text-base'>February 2025 - Present</h4>
                        </div>
                    </div>
                    {/* Works */}
                    <ul className='list-disc list-outside text-slate-300 pl-3'>
                        <li className='mb-2 '> Developed RESTful APIs using Node.js and Express, which supported user base growth of 10,000 active users.</li>
                        <li className='mb-2'>Implemented and integrated new features and functionalities using Next and Node.js, reducing development time
by 15%.</li>
                         <li>Contributed to AeroTribe, a community platform connecting geospatial surveyors and drone pilots, enhancing collaboration and networking.</li>
                         <li>Optimized server-side performance resulting in 25% faster load times by refining queries and database interactions
with MongoDB</li>
                        <li>Improved website SEO by 25%, enhancing search engine visibility and driving higher organic traffic. </li>
                    </ul>
                    <div>{["React.js", "Next.js", "Express.js", "Node.js", "MongoDb", "TailwindCSS", "JavaScript"].map((lang) => {
                        return <span key={lang} className='inline-block bg-green-500 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-500 mb-2 mr-2 rounded-full'>{lang}</span>
                    })}</div>
                </div>
            </div>
        </div>
    );
}

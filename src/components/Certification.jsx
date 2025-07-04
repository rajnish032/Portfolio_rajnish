import React from 'react';

const certifications = [
    {
        title: 'Full Web Development',
        issuer: 'Apna College',
        link: 'https://drive.google.com/file/d/14wfOB-t7n_WSup0S8hizXVZhi1TAiKA2/view?usp=drive_link'
    },
    {
        title: 'JavaScript',
        issuer: 'Namaste Dev.com',
        link: 'https://drive.google.com/file/d/14wfOB-t7n_WSup0S8hizXVZhi1TAiKA2/view?usp=drive_link'
    },
    {
        title: 'Postman API Fundamentals',
        issuer: 'Postman',
        link: 'https://drive.google.com/file/d/14wfOB-t7n_WSup0S8hizXVZhi1TAiKA2/view?usp=drive_link'
    },
    {
        title: 'Hackfest 25 Winner',
        issuer: 'IIT Dhanbad',
        link: 'https://drive.google.com/file/d/14wfOB-t7n_WSup0S8hizXVZhi1TAiKA2/view?usp=drive_link'
    },
    {
        title: 'Open Source Contributer',
        issuer: 'GirlScript Summer of Code',
        link: 'https://drive.google.com/file/d/14wfOB-t7n_WSup0S8hizXVZhi1TAiKA2/view?usp=drive_link'
    },
    {
        title: 'Generative AI',
        issuer: 'Microsoft and Linkedin',
        link: 'https://drive.google.com/file/d/1u7HAF34VAFs2b2cIa-Vum2hIG72x2-4D/view?usp=drive_link'
    },
    {
        title: 'Open Source Project Admin',
        issuer: 'SWOC',
        link: 'https://drive.google.com/file/d/1kpV57ANwFUwF7b7oSML5shBBRwu4lJGy/view?usp=drive_link'
    }
];

export default function Certification() {
    return (
        <div className='w-full flex flex-col gap-4 text-justify px-3 md:px-0'>
            <h1 className='text-4xl font-bold text-violet-500 mb-3 md:text-start text-center'>
                Certification
            </h1>

            {/* Unified List View */}
            <ul className='space-y-4'>
                {certifications.map((cert, index) => (
                    <li key={index} className='border-l-2 border-slate-500 pl-4'>
                        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
                            <p className='text-lg font-semibold text-gray-200'>
                                {cert.title}
                            </p>
                            <p className='text-sm text-slate-400'>
                                Issued by: {cert.issuer}
                            </p>
                        </div>
                        {cert.link && (
                            <a
                                href={cert.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-violet-600 text-sm underline hover:text-violet-800 mt-1 inline-block'
                            >
                                View Certificate
                            </a>
                        )}
                    </li>
                ))}
            </ul>
            <div></div>
            <div></div>
        </div>
    );
}


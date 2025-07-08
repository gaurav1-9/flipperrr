import React from 'react'
import { FaRegCopyright, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FcLike } from "react-icons/fc";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const devYear = 2025
    return (
        <div className='text-butterscotch flex flex-col lg:flex-row items-center font-montserratAlt justify-center w-full gap-4'>
            <div className='flex items-center gap-1 text-lg leading-0 lg:text-lg'>
                <FaRegCopyright />
                <p>{`${(devYear === currentYear) ? devYear : `${devYear} - ${currentYear}`}`}</p>
            </div>
            <div className='flex items-center gap-1 text-xs lg:text-lg -mt-3 -mb-2 lg:mt-0 lg:mb-0'>
                <p>made with</p>
                <FcLike />
                <p>by GAURAV KUMAR DAS</p>
            </div>
            <div className="flex item-center gap-4 text-3xl lg:pb-2">
                <a
                    href="https://www.instagram.com/gaurav1_9/"
                    target='_blank'
                    className='hover:text-butterscotch/80'
                    title='Instagram'
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://github.com/gaurav1-9"
                    target='_blank'
                    className='hover:text-butterscotch/80'
                    title='Github'
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/gaurav-kumar-das/"
                    target='_blank'
                    className='hover:text-butterscotch/80'
                    title='LinkedIn'
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://gauravkrdas-portfolio.vercel.app/"
                    target='_blank'
                    className='hover:text-butterscotch/80'
                    title='Portfolio'
                >
                    <TbWorld />
                </a>

            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import {
    insta,
    discord,
    githubpng,
    linkedin,
} from "../assets/icons"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-blue-300 p-7 flex flex-col sm:flex-row gap-9 justify-between items-center '>
            <div className='flex gap-8 flex-wrap justify-center sm:justify-start'>

                <a href='https://www.instagram.com/ash_if_107/'><img className='w-13 h-13' src={insta} alt="" /></a>
                <a href=''><img className='w-13 h-13' src={discord} alt="" /></a>
                <a href='https://www.linkedin.com/in/mohamed-ashif-k-m-b7b328290/'><img className='w-13 h-13' src={linkedin} alt="" /></a>
                <a href='https://github.com/Ashif-107'><img className='w-13 h-13' src={githubpng} alt="" /></a>
            </div>

            <div className='text-center sm:text-left'>
                <p className='text-slate-800'>© 2024 All Rights Reserved - Ashif</p>
                <p className='text-slate-800'>Model fox-island from sketchFab</p>
                <p className='text-slate-800'>Model plane and bird from sketchFab</p>
                <p className='text-slate-800'>Model car by cuadot.fbx from sketchFab</p>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import Logo from '../assets/images/Logo.svg'
import LemonBox from './LemonBox'
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className='flex flex-row px-10 justify-between'>
                <div className='md:basis-1/4 m-auto'>
                    <img src={Logo} className='wd-1/2 md:w-full' />
                </div>
                <div className='md:basis-1/2 basis-2/3'>
                    <ul className='w-full flex flex-row justify-evenly'>
                        <li>
                            <a className='text-lg font-serif'>Navigation</a>
                            <ul>
                                <li>
                                    <a>Menu</a>
                                </li>
                                <li>
                                    <a>Reserve a Table</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className='text-lg font-serif'>Who We Are</a>
                            <ul>
                                <li>
                                    <a>About Us</a>
                                </li>
                                <li>
                                    <a>Contact Us</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className='text-lg font-serif'>Social Media Links</a>
                            <ul>
                                <li>
                                    <a href='https://www.instagram.com'><FaInstagram /></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
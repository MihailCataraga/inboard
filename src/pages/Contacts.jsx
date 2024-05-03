import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { FaPhone } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className='contacts'>
        <Navbar />
        <main>
            <h1>Contacts</h1>
            <div className='allContacts'>
                <p className='logo'>INBOARD</p>
                <div className='contactsList'>
                    <p><FaPhone className='icon' />+ 373 12345678</p>
                    <p><MdOutlineAlternateEmail className='icon' />info@inboard.fake</p>
                    <div className='social'>
                        <FaInstagram className='icon' />
                        <FaFacebook className='icon' />
                        <FaXTwitter className='icon' />
                        <FaYoutube className='icon' />
                        <FaWhatsapp className='icon' />
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4573.853869152715!2d28.83042418010383!3d47.02787156560339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c34984111bb%3A0x871343440f2efd79!2sStephen%20the%20Great%20Monument!5e0!3m2!1sen!2s!4v1714741774572!5m2!1sen!2s" style={{border: 0, width: '100%', height: 500}} loading="lazy"></iframe>
        </main>
        <Footer />
    </div>
  )
}

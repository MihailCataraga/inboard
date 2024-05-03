import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import eScooter from '../assets/img/e-scooter.webp'
import theGlider from '../assets/img/TheGlider.webp'
import closed from '../assets/img/closed.webp'
import suspension from '../assets/img/suspension.webp'
import wheel from '../assets/img/wheel.webp'
import { Link } from 'react-router-dom'
import { FaWeightHanging } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import { ImPowerCord } from "react-icons/im";
import { FiBatteryCharging } from "react-icons/fi";
import Footer from '../components/Footer'
import ToUp from '../components/ToUp'

export default function Home() {
    const animation = () => {
        const elem = document.getElementById('theGlider')
        if (window.pageYOffset >= 300) {
            elem.style.animation = 'theGlider 2s linear'
            setTimeout(() => {
                elem.style.marginRight = '0px'
            }, 0)
        }

    }
    const animation2 = () => {
        const elem = document.getElementById('closed')
        if (window.pageYOffset >= 1000) {
            elem.style.animation = 'closed 2s linear'
            setTimeout(() => {
                elem.style.marginLeft = '0px'
            }, 0)
        }

    }
    const animation3 = () => {
        const elem = document.getElementById('suspension')
        const elem1 = document.getElementById('wheel')
        if (window.pageYOffset >= 1200) {
            elem.style.animation = 'suspension 2s linear'
            setTimeout(() => {
                elem.style.marginLeft = '0px'
            }, 0)
        }
        if (window.pageYOffset >= 1200) {
            elem1.style.animation = 'wheel 2s linear'
            setTimeout(() => {
                elem1.style.marginRight = '0px'
            }, 0)
        }

    }
    const animation4 = () => {
        const elem = document.getElementById('theGlider')
        elem.style.animation = 'theGlider 2s linear'
        setTimeout(() => {
            elem.style.marginRight = '0px'
        }, 0)
    }
    const animation5 = () => {
        const elem = document.getElementById('closed')
        if (window.pageYOffset >= 400) {
            elem.style.animation = 'closed 2s linear'
            setTimeout(() => {
                elem.style.marginLeft = '0px'
            }, 0)
        }

    }
    const animation6 = () => {
        const elem = document.getElementById('suspension')
        const elem1 = document.getElementById('wheel')
        if (window.pageYOffset >= 600) {
            elem.style.animation = 'suspension 2s linear'
            setTimeout(() => {
                elem.style.marginLeft = '0px'
            }, 0)
        }
        if (window.pageYOffset >= 1100) {
            elem1.style.animation = 'wheel 2s linear'
            setTimeout(() => {
                elem1.style.marginRight = '0px'
            }, 0)
        }

    }
    const animation7 = () => {
        const elem = document.getElementById('theGlider')
        if (window.pageYOffset >= 500) {
            elem.style.animation = 'theGlider 2s linear'
            setTimeout(() => {
                elem.style.marginRight = '0px'
            }, 0)
        }
    }
    const animation8 = () => {
        const elem = document.getElementById('closed')
        if (window.pageYOffset >= 900) {
            elem.style.animation = 'closed 2s linear'
            setTimeout(() => {
                elem.style.marginLeft = '0px'
            }, 0)
        }
    }
    const animation9 = () => {
        const elem = document.getElementById('suspension')
        const elem1 = document.getElementById('wheel')
        if (window.pageYOffset >= 1200) {
            elem.style.animation = 'suspension 2s linear'
            setTimeout(() => {
                elem.style.marginLeft = '0px'
            }, 0)
        }
        if (window.pageYOffset >= 1900) {
            elem1.style.animation = 'wheel 2s linear'
            setTimeout(() => {
                elem1.style.marginRight = '0px'
            }, 0)
        }

    }
    useEffect(() => {
        if (window.innerWidth > 1200) {
            document.addEventListener('scroll', animation)
            document.addEventListener('scroll', animation2)
            document.addEventListener('scroll', animation3)
        }
        if (window.innerWidth > 650 && window.innerWidth <= 1200) {
            document.addEventListener('scroll', animation4)
            document.addEventListener('scroll', animation5)
            document.addEventListener('scroll', animation6)
        }
        if (window.innerWidth <= 650) {
            document.addEventListener('scroll', animation7)
            document.addEventListener('scroll', animation8)
            document.addEventListener('scroll', animation9)
        }

        return () => {
            document.removeEventListener('scroll', animation)
            document.removeEventListener('scroll', animation2)
            document.removeEventListener('scroll', animation3)
            document.removeEventListener('scroll', animation4)
            document.removeEventListener('scroll', animation5)
            document.removeEventListener('scroll', animation6)
            // document.removeEventListener('scroll', animation7)
            // document.removeEventListener('scroll', animation2)
            // document.removeEventListener('scroll', animation3)
        }
    }, [])
    return (
        <div className='home'>
            <Navbar />
            <ToUp />
            <main>
                <div className='sec-1'>
                    <div className='left'>
                        <img src={eScooter} alt='Scooter img' />
                    </div>
                    <div className='right'>
                        <p className='first'>New INBOARD E-Scooter</p>
                        <p className='second'>The Glider</p>
                        <h1>Inboard e-scooter with swappable batteries is now here.</h1>
                        <Link to='/product'>
                            <button>
                                Buy from here
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='sec-2'>
                    <div className='info'>
                        <FaWeightHanging className='icon' />
                        <p>Weight: 11.3 kg</p>
                    </div>
                    <div className='info'>
                        <IoSpeedometerOutline className='icon' />
                        <p>Top Speed: 25 km/h</p>
                    </div>
                    <div className='info'>
                        <ImPower className='icon' />
                        <p>Power: 750 W</p>
                    </div>
                    <div className='info'>
                        <FiBatteryCharging className='icon' />
                        <p>Range: Up to 20 km</p>
                    </div>
                    <div className='info'>
                        <ImPowerCord className='icon' />
                        <p>Charging Time: 3 hours</p>
                    </div>
                </div>
                <div className='sec-3'>
                    <div className='left'>
                        <h2>THE GLIDER</h2>
                        <p>The Glider is powered by an in-wheel hub motor that produces 750W of power, giving the scooter a top speed of over 25km per hour. Glider weighing 11.3 kg.</p>
                    </div>
                    <div className='right'>
                        <img src={theGlider} id='theGlider' alt='The Glider Img' />
                    </div>
                </div>
                <div className='sec-4'>
                    <div className='left'>
                        <img src={closed} id='closed' alt='Closed Glider Img' />
                    </div>
                    <div className='right'>
                        <p>The Glider is designed to be easy and quick to tighten, so you can transport it easily.</p>
                    </div>
                </div>
                <div className='sec-5'>
                    <div className='left'>
                        <img src={suspension} id='suspension' alt='Suspension Img' />
                    </div>
                    <div className='center'>
                        <p>Glider is designed so that the battery can be easily changed with a new one, which means that autonomy is not a problem. Each battery lasts enough to provide an autonomy of 20km.</p>
                        <p>With large wheels, a coiled suspension and an 8.1-inch wide deck, the Glider offers a fairly smooth ride. It is equipped with LED lights for the head and back.</p>
                    </div>
                    <div className='right'>
                        <img src={wheel} id='wheel' alt='Wheel Img' />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

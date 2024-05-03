import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ToUp from '../components/ToUp'
import Footer from '../components/Footer'
import scooter from '../assets/img/e-scooter.webp'
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";

export default function Product() {
    const [number, setNumber] = useState(1)
    const [success, setSuccess] = useState(false)
    const minus = () => {
        if(number > 1) {
            setNumber(number -1)
        } else {
            setNumber(number)
        }
    }
    const addToCart = () => {
        const orders = Number(localStorage.getItem('orders'))
        localStorage.setItem('orders', orders + number)
        document.getElementById('cart').innerHTML = orders + number
        document.getElementById('miniCart').innerHTML = orders + number
        // document.getElementById('amount').innerHTML = orders + number
        const cart = document.getElementById('cart')
        cart.style.animation = 'cart 1s linear'
        const miniCart = document.getElementById('miniCart')
        miniCart.style.animation = 'cart 1s linear'
        setTimeout(() => {
            cart.style.animation = ''
            miniCart.style.animation = ''
        }, 1000)
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 2000)
    }
  return (
    <div className='product'>
        <Navbar />
        {/* <ToUp /> */}
        <main>
            <div className='sec-1'>
                <h1>The Glider INBOARD E-Scooter</h1>
                <div className='subsec-1'>
                    <img src={scooter} alt='E-scooter Img' />
                    <div className='right'>
                        <p>The Glider is powered by an in-wheel hub motor that produces 750W of power, giving the scooter a top speed of over 25km per hour. Glider weighing 11.3 kg.</p>
                        <p className='price'>Price: 1200$</p>
                        <div className='buy'>
                            <FiMinusCircle className='icon' onClick={minus} />
                            <p>{number}</p>
                            <FiPlusCircle className='icon' onClick={() => setNumber(number + 1)} />
                            <button onClick={addToCart}><BsCart2 className='icon' />Add to cart</button>
                        </div>
                        {success && <p className='success'>It was added to the cart!</p>}
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

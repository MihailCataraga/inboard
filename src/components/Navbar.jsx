import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import scooter from '../assets/img/e-scooter.webp'

export default function Navbar() {
    const [show, setShow] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [orders, setOrders] = useState(0)
    const [number, setNumber] = useState(0)
    const [amount, setAmount] = useState(false)
    const toUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const handleClickOutside = (event) => {
        if (!event.target.closest('.miniMenuLinks')) {
            setShow(false);
        }
    };
    const handleClickOutsideCart = (event) => {
        if (!event.target.closest('.cartBox')) {
            setShowCart(false);
        }
    };
    // Click on Cart
    const clickCart = () => {
        setAmount(localStorage.getItem('orders') > 0 ? true : false)
        setNumber(localStorage.getItem('orders'))
        setShowCart(true)
    }

    const minus = () => {
        const elem = document.getElementById('amount').innerHTML
        if(elem > 1) {
            document.getElementById('amount').innerHTML = elem - 1
            document.getElementById('cart').innerHTML = elem - 1
            document.getElementById('miniCart').innerHTML = elem - 1
            localStorage.setItem('orders', elem - 1)
            setNumber(number - 1)
        } else{
            localStorage.removeItem('orders')
            document.getElementById('cart').innerHTML = 0
            document.getElementById('miniCart').innerHTML = 0
            document.getElementById('amount').innerHTML = 0
            setAmount(false)
        }
        
    }

    const plus = () => {
        const elem = document.getElementById('amount').innerHTML
        document.getElementById('amount').innerHTML = Number(elem) + 1
        document.getElementById('cart').innerHTML = Number(elem) + 1
        document.getElementById('miniCart').innerHTML = Number(elem) + 1
        localStorage.setItem('orders', Number(elem) + 1)
        setNumber(Number(number) + 1)
    }

    // Pay
    const pay = () => {
        window.alert(`You have to pay ${number * 1200 + '$'} :) but this is a test site!`)
    }

    useEffect(() => {
        // Chack localStorage for orders
        if(localStorage.getItem('orders')) {
            setOrders(localStorage.getItem('orders'))
        } else {
            setOrders(0)
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('mousedown', handleClickOutsideCart);
        document.addEventListener('scroll', () => setShow(false));

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('mousedown', handleClickOutsideCart);
            document.removeEventListener('scroll', () => setShow(false));
        };
    }, [])
    return (
        <div className='navbar'>
            <Link to='/' className='logo'  onClick={toUp}>
                <p>INBOARD</p>
            </Link>
            <nav>
                <NavLink to='/' onClick={toUp}>Home</NavLink>
                <NavLink to='/product' onClick={toUp}>Product</NavLink>
                <NavLink to='/contacts' onClick={toUp}>Contacts</NavLink>
                <button onClick={() => {toUp(), clickCart()}}>
                    <BsCart2 className='icon' />
                    <div className='orders' id='cart'>
                        {orders}
                    </div>
                </button>
            </nav>
            <div className='miniMenu'>
                <button className='miniCart'  onClick={() => {toUp(), clickCart()}}><BsCart2 className='icon' />
                    <div className='orders' id='miniCart'>
                        {orders}
                    </div>
                </button>
                {show 
                    ? <IoClose className='icon' onClick={() => setShow(false)} />
                    : <TiThMenuOutline className='icon' onClick={() => setShow(true)} />
                }
            </div>
            {show &&
                <div className='miniMenuLinks' id='miniMenuLinks'>
                    <nav>
                        <NavLink to='/' onClick={toUp}>Home</NavLink>
                        <NavLink to='/product' onClick={toUp}>Product</NavLink>
                        <NavLink to='/contacts' onClick={toUp}>Contacts</NavLink>
                    </nav>
                </div>
            }
            {showCart && <div className='cartBox'>
                <div className='closeCart'>
                    <IoClose className='icon' onClick={() => setShowCart(false)} />
                </div>
                {amount && <div className='productList'>
                    <img src={scooter} />
                    <div className='infoProduct'>
                        <h2>The Glider INBOARD E-Scooter</h2>
                            <div className='amount'>
                                <FiMinusCircle className='icon' onClick={minus} />
                                <p id='amount'>{number ? number : 0}</p>
                                <FiPlusCircle className='icon' onClick={plus} />
                            </div>
                        </div>
                    </div>
                }
                {amount && <div className='total'>
                    <hr/>
                    <p>The Glider INBOARD E-Scooter <b>x</b> {number} * 1200$ = {number * 1200 + '$'}</p>
                    <p className='totalToPay'>Total: {number * 1200 + '$'}</p>
                    <button onClick={pay}>Pay</button>
                </div>}
                {amount ? <></> : <p className='empty'>Your shopping cart is empty!</p>}
            </div>
            }
        </div>
    )
}

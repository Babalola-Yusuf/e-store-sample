import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { cartContext } from './Cart'
import { HashLink as Link } from 'react-router-hash-link'
import { useContext } from 'react'

function Header() {
  const {cart} = useContext(cartContext)
    return (
        <div className='bg-white sticky top-0 z-10 p-0 pb-1 shadow-md'>
            <header className="header flex justify-between p-5 border-2 border-b-light-blue">
                <Link to='/' className=''><img src="./logo-transparent.png" alt="logo" className='h-10 w-20'/></Link>
                <div className='flex items-center gap-5'>
                    <ul>
                        <li className='relative'>

                            <Link to = "/cart">
                            { cart.length > 0 && (
                            <div>
                                <div className='animate-pulse absolute -top-4 -right-4 bg-purple w-5 h-5 rounded-full flex justify-center items-center'>
                                    <p className=' font-bold text-white'>{cart.length} </p>
                                </div>
                              
                                <div>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </div>
                            </div>
                            )}
                            </Link>
                        </li>
                    </ul>
                    
                <nav>
                    <ul className="flex gap-5">
                        <li> <Link to= '/'>  Home </Link> </li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                </div>
                
            </header>
        </div>
    )
}

export default Header

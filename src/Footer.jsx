import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Import Font Awesome Icons
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'



function Footer() {
   
    return (
        <div>
            <div className='pre-footer pt-5 bg-light-brown'>
                <h4 className='ml-10'>Subscribe to our newsletter</h4>
                <form className="flex gap-5 mb-5 p-5 justify-center">
                    <input type="text" placeholder="Enter your email" className='px-3' />
                    <button type="submit" className='border border-white bg-purple-800 text-white px-2 py-1'>Subscribe</button>
                </form>
                <div className=' bg-dark-brown flex items-center justify-between px-10 text-white'>
                    <ul className="social-media-icons flex text-2xl md:text-5xl gap-20 py-5 justify-center">
                        <li className='hover:text-black ease-linear duration-150'><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li className='hover:text-black ease-linear duration-150 '><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li className='hover:text-black ease-linear duration-150'><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li className='hover:text-black ease-linear duration-150'><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>        
                    </ul>
                    <ul className='md:flex gap-5 content-center h-6  '>
                        <li className='hover:text-black ease-linear duration-150'><a href="#">About</a></li>
                        <li className='hover:text-black ease-linear duration-150'><a href="#">Contact</a></li>
                    </ul>
                </div>
               
                
            </div>
            <footer className="footer flex justify-between p-5 bg-black text-white">
                <p>&copy; dNite Solutions, {new Date().getFullYear()} . All rights reserved.</p>
                
            </footer>
        </div>
    )
}

export default Footer

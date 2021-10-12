import React from 'react'
import {Link} from 'react-scroll'


function Header() {
    return (
        <div className="container flex justify-between">
            <div className="flex items-center">
            <img src="/assets/images/logo.svg"  alt="imag" />
           <span className="text-white font-bold"> Lorem</span>
            </div>
            <div className="items-center">
                <ul style={{display: 'flex', listStyle: 'none'}}>
                    <li><Link activeClass="active" to="home" spy={true} smooth={true} className="ml-14">Home</Link></li>
                    <li><Link  to="" spy={true} smooth={true} className="text-white ml-14">About</Link></li>
                    <li><Link  to="" spy={true} smooth={true} className="text-white ml-14">Art</Link></li>
                    <li><Link  to="" spy={true} smooth={true} className="text-white ml-14">Docs</Link></li>
                    <li><Link  to="" spy={true} smooth={true} className="text-white">Community</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Header

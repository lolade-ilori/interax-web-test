import React, { useState } from 'react'
import { HeaderNav, InteraxHeader, WaitlistBtn } from './header.styles'
import Link from 'next/link';

const Header = () => {
    const [headerTheme, setHeaderTheme] = useState('dark')

  return (
    <InteraxHeader>
        <HeaderNav >
            <div className="logo-wrap">
                <Link href={'/'}>
                    <img src={'/assets/svg/interax-logo.svg'}/>
                </Link>
            </div>

            <div className="action-btns-wrap">
                <ul>
                    <li><Link href={'/about'}>About Us</Link></li>
                    <li><Link href={'/faq'}>FAQ</Link></li>
                    <li><WaitlistBtn>Join Waitlist</WaitlistBtn></li>
                </ul>

                <div className="hamburger">
                    <img src="/assets/svg/hamburger.svg"/>
                </div>

                <div className="mobile-menu">
                    
                </div>
            </div>
        </HeaderNav>
    </InteraxHeader>
  )
}

export default Header
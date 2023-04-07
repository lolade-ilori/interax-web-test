import Link from 'next/link'
import React from 'react'
import { InteraxHeader, HeaderNav, WaitlistBtn, InteraxDarkHeader, DarkHeaderNav, DarkWaitlistBtn } from './header.styles'

const DarkHeader = () => {
  return (
    <InteraxDarkHeader>
        <DarkHeaderNav >
            <div className="logo-wrap">
            <Link href={'/'}> 
                <img src={'/assets/svg/interax-logo-light.svg'}/>
            </Link>
            </div>

            <div className="action-btns-wrap">
                <ul>
                    <li><Link href={'/about'}>About Us</Link></li>
                    <li><Link href={'/faq'}>FAQ</Link></li>
                    <li><DarkWaitlistBtn>Join Waitlist</DarkWaitlistBtn></li>
                </ul>

                <div className="hamburger">
                    <img src="/assets/svg/hamburger-white.svg"/>
                </div>

                <div className="mobile-menu">
                    
                </div>
            </div>
        </DarkHeaderNav>
    </InteraxDarkHeader>
  )
}

export default DarkHeader
import Link from 'next/link'
import React, { useState } from 'react'
import { InteraxHeader, HeaderNav, WaitlistBtn, InteraxDarkHeader, DarkHeaderNav, DarkWaitlistBtn, CancelMenu, HeaderOverlay } from './header.styles'

const DarkHeader = () => {
const [menuShow, setMenuShow] = useState(false)

  return (
    <InteraxDarkHeader>
        <HeaderOverlay onClick={() => setMenuShow(false)} active={menuShow}/>
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
                    <li><Link href={'/team'}>Team</Link></li>
                    <li><Link href={'/blog'}>Blog</Link></li>
                    <li><DarkWaitlistBtn>Join Waitlist</DarkWaitlistBtn></li>
                </ul>

                <div className="hamburger">
                    <img src="/assets/svg/hamburger-white.svg" onClick={() => setMenuShow(true)}/>
                </div>
            </div>

            <div className={ menuShow ? 'mobile-menu active-mobile' : 'mobile-menu'}>
                <div className="inner-wrapper">
                    <CancelMenu>
                        <img src="/assets/svg/cancel.svg" onClick={() => setMenuShow(false)} />
                    </CancelMenu>

                    <div className="nav-list">
                        <ul>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/about'}>About Us</Link></li>
                            <li><Link href={'/faq'}>FAQ</Link></li>
                            <li><Link href={'/team'}>Team</Link></li>
                            <li><Link href={'/blog'}>Blog</Link></li>
                            <li><Link href={'/waitlist'}>Join Waitlist</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </DarkHeaderNav>
    </InteraxDarkHeader>
  )
}

export default DarkHeader
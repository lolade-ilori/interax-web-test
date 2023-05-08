import React, { useState } from 'react'
import { CancelMenu, HeaderNav, HeaderOverlay, InteraxHeader, WaitlistBtn } from './header.styles'
import Link from 'next/link';

const Header = () => {
    const [headerTheme, setHeaderTheme] = useState('dark')
    const [menuShow, setMenuShow] = useState(false)

  return (
    <InteraxHeader>
        <HeaderOverlay onClick={() => setMenuShow(false)} active={menuShow} />
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
                    {/* <li><Link href={'/team'}>Team</Link></li> */}
                    <li><Link href={'/blog'}>Blog</Link></li>
                    <li><Link href={'/waitlist'}><WaitlistBtn>Join Waitlist</WaitlistBtn></Link></li>
                </ul>

                <div className="hamburger">
                    <img src="/assets/svg/hamburger.svg" onClick={() => setMenuShow(true)}/>
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
                            {/* <li><Link href={'/team'}>Team</Link></li> */}
                            <li><Link href={'/blog'}>Blog</Link></li>
                            <li><Link href={'/waitlist'}>Join Waitlist</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </HeaderNav>
    </InteraxHeader>
  )
}

export default Header
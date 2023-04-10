import Link from 'next/link'
import React from 'react'
import { FooterBottom, FooterColumn, FooterInnerWrap, FooterTop, FooterWrap } from './footer.styles'

const Footer = () => {
  return (
    <FooterWrap>
        <FooterInnerWrap>
            <FooterTop>
                <FooterColumn>
                    <div className="logo-wrap">
                        <img src="/assets/svg/interax-logo.svg"  />
                    </div>

                    <p>Connecting you to better health... </p>

                    <div className="social-icons-wrap">
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    <div className="social-circle">
                                        <img src="/assets/svg/interax-twitter.svg"/>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link href={"/"}>
                                    <div className="social-circle">
                                        <img src="/assets/svg/interax-insta.svg"/>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link href={"/"}>
                                    <div className="social-circle">
                                        <img src="/assets/svg/interax-linkedin.svg"/>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </FooterColumn>

                <FooterColumn>
                    <h3 className="column-header">
                        Company
                    </h3>

                    <ul className="column-lists">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/'}>About Us</Link></li>
                        <li><Link href={'/'}>Contact Us</Link></li>
                        <li><Link href={'/'}>Privacy Policy</Link></li>
                        <li><Link href={'/'}>Terms and Condition</Link></li>
                    </ul>
                </FooterColumn>

                <FooterColumn>
                    <h3 className="column-header">
                        Support
                    </h3>

                    <ul className="column-lists">
                        <li><Link href={'/'}>FAQs</Link></li>
                        <li><Link href={'/'}>Customer Service</Link></li>
                        <li><Link href={'/'}>Enquires: hello@interaxhealth.com</Link></li>
                    </ul>

                    <div className="social-icons-wrap support-sect">
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    <div className="social-circle">
                                        <img src="/assets/svg/interax-twitter.svg"/>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link href={"/"}>
                                    <div className="social-circle">
                                        <img src="/assets/svg/interax-insta.svg"/>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link href={"/"}>
                                    <div className="social-circle">
                                        <img src="/assets/svg/interax-linkedin.svg"/>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </FooterColumn>
            </FooterTop>

            <FooterBottom>
                <h3>2023 interaX. All rights reserved...</h3>
            </FooterBottom>
        </FooterInnerWrap>
    </FooterWrap>
  )
}

export default Footer
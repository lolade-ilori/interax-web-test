import Link from 'next/link'
import React from 'react'
import { AbsoluteWaitlistWrap, JoinWaitlisBtn, SubFormWrap, WaitliistInput, WaitlistFooter, WaitlistForm, WaitlistFormOverall, WaitlistHeader, WaitlistTxtWrap, WaitlistWrap } from './waitlist.styles'

const Waitlist = () => {
  return (
    <WaitlistWrap>

        <AbsoluteWaitlistWrap>
            <img src="/assets/png/rays.png" />
        </AbsoluteWaitlistWrap>
        <div className="waitlist-inner">
            <WaitlistHeader>
                <Link href={'/'}> 
                    <img src="/assets/svg/interax-logo-light.svg"/>
                </Link>
            </WaitlistHeader>
            
            <WaitlistTxtWrap>
                <h4>Get Early Access!</h4>

                <h2>Join our interaX waitlist for early  launch update</h2>
            </WaitlistTxtWrap>

            <WaitlistFormOverall>
                <WaitlistForm>
                    <SubFormWrap>
                        <WaitliistInput type={'text'} placeholder='Full Name' />
                        <WaitliistInput type={'email'} placeholder='Email Address' />
                    </SubFormWrap>

                    <SubFormWrap>
                        <WaitliistInput type={'text'} placeholder='Phone number' />
                        <WaitliistInput type={'email'} placeholder='Doctor/User?' />
                    </SubFormWrap>

                    <JoinWaitlisBtn type='submit'>
                        Join waitlist
                    </JoinWaitlisBtn>
                </WaitlistForm>
            </WaitlistFormOverall>
        </div>
            <WaitlistFooter>
                <div className="flex-wrap">
                    <div className="circle"><img src="/assets/svg/blue-twitter.svg" /></div>

                    <div className="circle"><img src="/assets/svg/blue-insta.svg" /></div>

                    <div className="circle"><img src="/assets/svg/blue-linkedin.svg" /></div>
                </div>

                <h4>2023 interaX. All rights reserved...</h4>
            </WaitlistFooter>
    </WaitlistWrap>
  )
}

export default Waitlist
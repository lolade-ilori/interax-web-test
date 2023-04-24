import Link from 'next/link'
import type { NextPage } from 'next'
import React, {FormEvent, useState} from 'react'
import { AbsoluteWaitlistWrap, JoinWaitlisBtn, SubFormWrap, WaitliistInput, WaitlistFooter, WaitlistForm, WaitlistFormOverall, WaitlistHeader, WaitlistTxtWrap, WaitlistWrap } from './waitlist.styles'

const Waitlist: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let form = {
            name,
            email,
            phone,
            message
        }

        const rawResponse = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const content = await rawResponse.json();

        // print to screen
        alert(content.data.tableRange)

        // Reset the form fields
        setMessage('')
        setPhone('')
        setName('')
        setEmail('')
    }
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
                <WaitlistForm onSubmit={handleSubmit}>
                    <SubFormWrap>
                        <WaitliistInput type={'text'} placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}  />
                        <WaitliistInput type={'email'} placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)}  />
                    </SubFormWrap>

                    <SubFormWrap>
                        <WaitliistInput type={'text'} placeholder='Phone number' value={phone} onChange={e => setPhone(e.target.value)} />
                        <WaitliistInput type={'text'} placeholder='Doctor/User?'  value={message} onChange={e => setMessage(e.target.value)}/>
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
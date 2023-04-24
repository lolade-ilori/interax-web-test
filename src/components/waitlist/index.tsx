import React, {FormEvent, useState} from 'react'
import type { NextPage } from 'next'
import { SubmitBtn, WailtistFlex, WaitlistForm, WaitlistHeader, WaitlistInner, WaitlistInput, WaitlistSubmitWrap, WaitlistWrap } from './waitlist.styles'

const Waitlist = () => {
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
        <WaitlistInner>
            <WaitlistHeader>
                join the waitlist
            </WaitlistHeader>

            <WaitlistForm>
                <WailtistFlex>
                    <WaitlistInput placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} type='text'/>
                    <WaitlistInput placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                </WailtistFlex>

                <WailtistFlex>
                    <WaitlistInput placeholder='Doctor/User?' value={message} onChange={e => setMessage(e.target.value)}/>
                    <WaitlistInput placeholder='Phone Number' value={phone} onChange={e => setPhone(e.target.value)}/>
                </WailtistFlex>

                <WaitlistSubmitWrap>
                    <SubmitBtn onClick={handleSubmit}>
                        Submit
                    </SubmitBtn>
                </WaitlistSubmitWrap>
            </WaitlistForm>
        </WaitlistInner>
    </WaitlistWrap>
  )
}

export default Waitlist
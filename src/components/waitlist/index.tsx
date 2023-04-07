import React from 'react'
import { SubmitBtn, WailtistFlex, WaitlistForm, WaitlistHeader, WaitlistInner, WaitlistInput, WaitlistSubmitWrap, WaitlistWrap } from './waitlist.styles'

const Waitlist = () => {
  return (
    <WaitlistWrap>
        <WaitlistInner>
            <WaitlistHeader>
                join the waitlist
            </WaitlistHeader>

            <WaitlistForm>
                <WailtistFlex>
                    <WaitlistInput placeholder='Full Name' />
                    <WaitlistInput placeholder='Email Address' />
                </WailtistFlex>

                <WailtistFlex>
                    <WaitlistInput placeholder='Doctor/User?' />
                    <WaitlistInput placeholder='Phone Number' />
                </WailtistFlex>

                <WaitlistSubmitWrap>
                    <SubmitBtn>
                        Submit
                    </SubmitBtn>
                </WaitlistSubmitWrap>
            </WaitlistForm>
        </WaitlistInner>
    </WaitlistWrap>
  )
}

export default Waitlist
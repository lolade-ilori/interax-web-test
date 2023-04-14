import { WaitlistHeader } from '@components/waitlist/waitlist.styles'
import React from 'react'
import { MailWrap, SubscriptionTxt, SubscriptionWrap } from './subscriptionbox.styles'

const SubscriptionBox = () => {
  return (
    <>
        <SubscriptionWrap>
            <div className="inner-sub-wrap">
                <WaitlistHeader>
                    Interested in getting notified?
                </WaitlistHeader>

                <SubscriptionTxt>
                Subscribe and get the most piping and hot news of the week straight to your inbox
                </SubscriptionTxt>

                <MailWrap>
                    <input type="email" placeholder='Enter your mail' />
                    <div className="submit-btn">Submit</div>
                </MailWrap>
            </div>
        </SubscriptionWrap>
    </>
  )
}

export default SubscriptionBox
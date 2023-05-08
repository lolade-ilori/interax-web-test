import Footer from '@components/footer'
import Link from 'next/link'
import React from 'react'
import { BodyWrap, HeaderWrap, TextContent, TextHeaderSect } from '../../components/styled/terms.styles'

const TermsConditions = () => {
  return (
    <>
        <HeaderWrap>
            <div className="inner-wrap">
                <Link href={'/'}>
                    <img src={'/assets/svg/interax-logo.svg'}/>
                </Link>
            </div>
        </HeaderWrap>

        <BodyWrap>
            <TextHeaderSect>
                <h3>Terms and conditions</h3>

                <div className="last-updated">
                    <p>Last updated on March 2023</p>
                </div>
            </TextHeaderSect>

            <TextContent>
                <p>
                "Terms and conditions" typically refer to a set of rules and guidelines that govern the use of a product or service. These terms and conditions outline the rights and responsibilities of the provider and the user, including rules for payment, usage limitations, privacy policies, warranties, and liabilities. They are often presented in the form of a legal agreement that the user must agree to before being allowed to use the product or service. The terms and conditions can vary depending on the product or service and the provider, and it's important for users to read and understand them thoroughly before agreeing to them
                </p>

                <div className="sub-text-wrap">
                    <h4>Terms</h4>

                    <p>In the context of "terms and conditions," the term "terms" refers to the specific conditions, rules, and guidelines that govern the use of a product or service. These terms may include information about payment, subscription or membership fees, usage limitations, privacy policies, warranties, and liabilities. The terms may also include information about how users are expected to behave while using the product or service, such as rules against harassment or illegal activities. The terms are typically laid out in a legal agreement that the user must agree to before being allowed to use the product or service.</p>

                    <p>
                    Terms are the specific rules and guidelines that the provider sets for users of a product or service. These terms can cover a wide range of topics, such as: 
                    </p>


                    <ul>
                        <li>Payment terms: This could include information about fees, payment methods, and billing cycles.</li>
                        <li>Usage limitations: This could include restrictions on how the product or service can be used, such as limits on the amount of data that can be uploaded or downloaded.</li>
                        <li>Privacy policies: This could include information about how user data is collected, stored, and used.</li>
                        <li>Warranties: This could include information about what the provider guarantees about the product or service, such as its reliability or performance.</li>
                        <li>Liabilities: This could include information about who is responsible if something goes wrong while using the product or service.</li>
                        <li>User behavior: This could include rules about what users can and cannot do while using the product or service, such as rules against spamming or harassment.</li>
                    </ul>

                    <p>The terms are typically laid out in a legal agreement that the user must agree to before being allowed to use the product or service. The purpose of this agreement is to establish a clear understanding of what is expected of both the user and the provider, and to protect both parties in the event of a dispute. It's important for users to read and understand the terms thoroughly before agreeing to them, as they can have legal implications</p>
                </div>

                <div className="sub-text-wrap">
                    <h4>Conditions</h4>
                    <p>
                    In the context of "terms and conditions," the term "conditions" refers to the specific requirements that the provider sets for users of a product or service. These conditions can cover a wide range of topics, such as:
                    </p>

                    <ol>
                        <li>Age requirements: This could include minimum age requirements for using the product or service.</li>
                        <li>Geographic restrictions: This could include limitations on where the product or service can be used, such as restrictions on international use.</li>
                        <li>Account requirements: This could include requirements for creating an account or registering for the product or service.</li>
                        <li>Usage requirements: This could include requirements for how the product or service is used, such as restrictions on sharing or distributing content.</li>
                        <li>Termination conditions: This could include information about how the agreement can be terminated, such as in the case of a breach of the terms.</li>
                    </ol>

                    <p>The conditions are typically laid out in a legal agreement that the user must agree to before being allowed to use the product or service. The purpose of this agreement is to establish a clear understanding of what is expected of both the user and the provider, and to protect both parties in the event of a dispute. It's important for users to read and understand the conditions thoroughly before agreeing to them, as they can have legal implications.</p>
                </div>
            </TextContent>

        </BodyWrap>
    
        <Footer />
    </>
  )
}

export default TermsConditions
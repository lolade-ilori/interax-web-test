import Footer from '@components/footer'
import Link from 'next/link'
import React from 'react'
import { HeaderWrap, BodyWrap, TextHeaderSect, TextContent } from '../terms-and-conditions/terms.styles'
import { PrivacyWrap } from './privacypolicy.styles'

const PrivacyPolicy = () => {
  return (
    <PrivacyWrap>
                <HeaderWrap>
            <div className="inner-wrap">
                <Link href={'/'}>
                    <img src={'/assets/svg/interax-logo.svg'}/>
                </Link>
            </div>
        </HeaderWrap>

        <BodyWrap>
            <TextHeaderSect>
                <h3>Privacy Policy</h3>

                <div className="last-updated">
                    <p>Last updated on March 2023</p>
                </div>
            </TextHeaderSect>

            <TextContent>

              <div className="sub-text-wrap">
                  <h4>Introduction</h4>

                  <p>1.1 This Privacy Policy (the “Policy”) applies to the personal information collected, used, or disclosed by interaX (“we”, “us”, or “our”) in connection with our telemedicine platform and related services (the “Platform”).
                  </p>

                  <p>1.2 We are committed to protecting the privacy and confidentiality of personal information entrusted to us. We are also committed to complying with applicable privacy laws and regulations.</p>

                  <p>1.3 This Policy outlines our practices regarding the collection, use, and disclosure of personal information when using our Platform. By using the Platform, you agree to the terms of this Policy.</p>
              </div>

              <div className="sub-text-wrap">
                  <h4>Collection of Personal Information</h4>

                  <p>2.1 We collect personal information from you when you use our Platform, such as when you create an account, use our video consultation service, or contact us for support.
                  </p>

                  <p>2.2 The personal information we collect may include:</p>
                  <ul>
                      <li>Name</li>
                      <li>Contact information (e.g., email address, phone number)</li>
                      <li>Payment information (e.g., credit card information)</li>
                      <li>Health information (e.g., medical history, prescription information)</li>
                      <li>Demographic information (e.g., age, gender)</li>
                      <li>Device and usage information (e.g., IP address, browser type, access time)</li>
                  </ul>

                  <p>2.3 We may also collect personal information from third-party sources, such as healthcare providers and payment processors.</p>
              </div>

              <div className="sub-text-wrap">
                  <h4>Use of Personal Information</h4>

                  <p>3.1 We use personal information to provide and improve our Platform and services, such as to:
                  </p>
                  <ul>
                      <li>Verify your identity</li>
                      <li>Process payments</li>
                      <li>Schedule and conduct video consultations</li>
                      <li>Provide medical advice and prescriptions</li>
                      <li>Respond to inquiries and support requests</li>
                      <li>Conduct research and analysis</li>
                      <li>Comply with legal obligations</li>
                  </ul>

                  <p>3.2 We may also use personal information to communicate with you about our Platform and services, such as to send newsletters or updates.</p>

                  <p>3.3 We will only use personal information for the purposes for which it was collected, or with your consent.</p>

              </div>

              <div className="sub-text-wrap">
                  <h4>Disclosure of Personal Information</h4>

                  <p>4.1 We may disclose personal information to third-party service providers who assist us in providing the Platform and services, such as video conferencing providers and payment processors.
                  </p>

                  <p>4.2 We may also disclose personal information if required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations, protect and defend our rights or property, prevent fraud, or protect the personal safety of our users or the public.</p>

                  <p>4.3 We may disclose personal information in the event of a merger, acquisition, or sale of all or a portion of our assets, provided that the acquiring entity agrees to comply with the terms of this Policy.</p>
              </div>

              <div className="sub-text-wrap">
                  <h4>Data Retention</h4>

                  <p>5.1 We will retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.
                  </p>

                  <p>5.2 When personal information is no longer necessary, we will securely dispose of it in a manner that protects against unauthorized access or disclosure.</p>
              </div>

              <div className="sub-text-wrap">
                  <h4>Data Security</h4>

                  <p>6.1 We are committed to protecting personal information against unauthorized access, disclosure, or destruction. We implement reasonable and appropriate physical, technical, and administrative measures to safeguard personal information.
                  </p>

                  <p>6.2 Despite our efforts, no security measures are perfect or impenetrable. We cannot guarantee that personal information will be completely secure from unauthorized access or use.</p>
              </div>

              <div className="sub-text-wrap">
                  <h4>Your Rights</h4>

                  <p>7.1 You have the right to access, correct, or delete personal information we hold about you. You may also have the right to object to or restrict certain types of processing of your personal information.
                  </p>

                  <p>7.2 To exercise your rights, please contact us using the information provided in section 14 of this Policy.</p>

                  <p>7.3 Please note that some of these rights may be subject to limitations or exceptions under applicable law.</p>
              </div>

              <div className="sub-text-wrap">
                  <h4>Cookies and Tracking Technologies</h4>

                  <p>8.1 We may use cookies and other tracking technologies to collect device and usage information when you use our Platform. Cookies are small data files that are stored on your device when you visit a website.
                  </p>

                  <p>We may use cookies to:</p>
                  <ul>
                      <li>Remember your preferences and settings</li>
                      <li>Understand how you interact with our Platform</li>
                      <li>Personalize your experience</li>
                      <li>Measure the effectiveness of our Platform</li>
                  </ul>

                  <p>8.3 You can control the use of cookies through your web browser settings. However, disabling cookies may limit your ability to use certain features of our Platform</p>
              </div>

              <div className="sub-text-wrap">
                  <h4>Children’s Privacy</h4>

                  <p>9.1 Our Platform is not intended for use by children under the age of 16. We do not knowingly collect personal information from children under the age of 16
                  </p>
              </div>

              <div className="sub-text-wrap">
                  <h4>International Data Transfers</h4>

                  <p>10.1 Personal information collected by us may be stored and processed in any country where we have operations or where we engage service providers.
                  </p>

                  <p>10.2 If we transfer personal information outside of the European Economic Area (EEA), we will take appropriate safeguards to ensure the protection of personal information, such as using standard contractual clauses approved by the European Commission.</p>
              </div>

              <div className="sub-text-wrap">
                  <h4>Changes to this Policy</h4>

                  <p>11.1 We may update this Policy from time to time. If we make material changes, we will provide notice through our Platform or by other means.
                  </p>

                  <p>11.2 Your continued use of our Platform after any such changes constitutes your acceptance of the revised Policy.
                  </p>
              </div>

              <div className="sub-text-wrap">
                  <h4>Contact Information</h4>

                  <p>12.1 If you have any questions or concerns about this Policy, please contact us at [insert contact information].
                  </p>

                  <p>12.2 We will endeavor to respond to your inquiries in a timely manner and in accordance with applicable privacy laws and regulations.</p>
              </div>

              <div className="sub-text-wrap">
                  <h4>Privacy Rights</h4>

                  <p>13.1 Users have the right to request that we disclose certain information about our collection, use, and disclosure of their personal information in the preceding 12 months.
                  </p>

                  <p>13.2 Users also have the right to request that we delete their personal information, subject to certain exceptions.</p>

                  <p>13.3 To exercise these rights, please contact us using the information provided in section 14 of this Policy.</p>
              </div>

              <div className="sub-text-wrap">
                  <h4>Contact Information</h4>

                  <p>14.1 If you have any questions or concerns about this Policy, or if you wish to exercise your rights under applicable privacy laws, please contact us at: [insert contact information]
                  </p>

                  <p>14.2 We will endeavor to respond to your inquiries in a timely manner and in accordance with applicable privacy laws and regulations.</p>
              </div>

            </TextContent>
        </BodyWrap>
    
        <Footer />
    </PrivacyWrap>
  )
}

export default PrivacyPolicy
import React from 'react'
import Footer from '@components/footer'
import Header from '@components/header'
import DarkHeader from '@components/header/header-dark'
import Waitlist from '@components/waitlist'
import { AboutBanner, AboutSection, BannerImg } from './about.styles'
import { ServiceFlexBox, ServiceFlexReverse } from '../home/index.styles'

function About() {
  return (
    <>
      <DarkHeader />
      <AboutBanner>
        <div className="inner-wrap">
          <div className="header-wrap">
            <h2>Health Solutions at Your Fingertips</h2>
          </div>
        </div>

        <BannerImg>
          <img src="/assets/png/about-banner.png" />
        </BannerImg>
      </AboutBanner>

      <AboutSection>
        <img src="assets/png/about-bg.png" className="absolute-img" />

        <div className="subsection">
          <ServiceFlexBox>
            <div className="txt-wrapper">
              <div className="inner-txt-wrapper">
                <h5>interaX is an online medical platform in Nigeria</h5>

                <p>It is targeted towards solving healthcare issues in Nigeria and Africa in the long run. It connects Nigerians seeking medical guidance to qualified healthcare professionals across Nigeria.</p>
              </div>
            </div>

            <div className="img-wrapper">
              <img src="/assets/png/consultation-service.png"/>
            </div>
          </ServiceFlexBox>

          <ServiceFlexReverse>
            <div className="img-wrapper">
              <img src="/assets/png/accessibility-service.png" />
            </div>

            <div className="txt-wrapper">
              <div className="inner-txt-wrapper">
                <h5>Medical practitioners and professionals on the platform would be verified</h5>

                <p>Before joining the platform, we take careful measures in verifying and certifying medical practitioners and professionals on the platform and have a passion for helping improve the health and well-being of our clients and the country. We serve our patients not just with our knowledge and skills but also with our hearts.</p>
              </div>
            </div>
          </ServiceFlexReverse>
        </div>
      </AboutSection>

      <Waitlist />
      <Footer/>
    </>
  )
}

export default About
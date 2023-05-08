import React from 'react'
import Footer from '@components/footer'
import Header from '@components/header'
import DarkHeader from '@components/header/header-dark'
import Waitlist from '@components/waitlist'
import { AboutBanner, AboutSection, BannerImg } from '../../components/styled/about.styles'
import { ContentWrap, MissionContentWrap, MissionSection, ServiceFlexBox, ServiceFlexReverse, VisionFlex, VisionSection } from '../../components/styled/index.styles'

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
                <h5>interaX is an online healthcare platform in Nigeria</h5>

                <p>It is targeted towards solving healthcare problems in Nigeria and Africa in the long run. It connects Nigerians seeking medical guidance to qualified healthcare professionals across Nigeria.</p>
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
                <h5>Verified and certified medical professionals</h5>

                <p>At interaX, our healthcare practitioners are not only certified, but also carefully selected for their passion to improve the health and well-being of Nigerians. We are dedicated to serving you not only with our knowledge, but also with our compassion.</p>
              </div>
            </div>
          </ServiceFlexReverse>
        </div>
      </AboutSection>

      <MissionSection>
        <img src="/assets/png/mission-group.png" className='absolute-img' />

        <div className="inner-wrapper">
          <div className="head-text">
            <h3>Mission</h3>
          </div>

          <VisionFlex>
            <div className="img-wrap">
              <img src="/assets/png/mission-img.png"  />
            </div>

            <MissionContentWrap>
              <div className="subcontent-wrap">
                <div className="ellipse"></div>

                <p>Improve Nigerians' overall health and well-being by providing accessible and high-quality healthcare services.</p>
              </div>

              <div className="subcontent-wrap">
                <div className="ellipse"></div>

                <p>Use innovative technology and data-driven solutions to enhance the delivery of healthcare services and improve patient outcomes.</p>
              </div>

              <div className="subcontent-wrap">
                <div className="ellipse"></div>

                <p>Empower patients to take control of their health by providing them with tools and resources to make informed healthcare decisions.</p>
              </div>

              <div className="subcontent-wrap">
                <div className="ellipse"></div>

                <p>Create a healthcare ecosystem that is inclusive, collaborative, and supportive of healthcare providers and patients.</p>
              </div>
            </MissionContentWrap>
          </VisionFlex>
        </div>
      </MissionSection>

      <VisionSection>
        <img src="/assets/png/vision-group.png" className="absolute-img" />

        <div className="inner-wrapper">
          <div className="head-text">
            <h3>Vision</h3>
          </div>

          <VisionFlex>
            <div className="img-wrap">
              <img src="/assets/png/vision-img.png"  />
            </div>

            <ContentWrap>
              <div className="subcontent-wrap">
                <div className="ellipse"></div>

                <p>Transform healthcare in Nigeria by offering personalised, accessible, and affordable healthcare services to every Nigerian, no matter where they are.</p>
              </div>

              <div className="subcontent-wrap">
                <div className="ellipse"></div>

                <p>Leverage cutting-edge technology and data-driven solutions to empower patients and healthcare providers and improve health outcomes across Nigeria.</p>
              </div>

              <div className="subcontent-wrap">
                <div className="ellipse"></div>

                <p>Promote a culture of health and wellness in Nigeria by offering innovative programs and resources that inspire healthy lifestyles and disease prevention.</p>
              </div>

              <div className="subcontent-wrap">
                <div className="ellipse"></div>

                <p>Become Nigeria's most trusted and preferred healthcare provider by offering a superior patient experience and exceeding expectations at every touchpoint.</p>
              </div>

              <div className="subcontent-wrap">
                <div className="ellipse"></div>

                <p>Catalyse positive change in the Nigerian healthcare system by advocating for policies prioritising health equity and social justice.</p>
              </div>
            </ContentWrap>
          </VisionFlex>
        </div>


      </VisionSection>

      <Waitlist />
      <Footer/>
    </>
  )
}

export default About
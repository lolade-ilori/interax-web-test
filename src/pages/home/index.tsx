import Footer from '@components/footer'
import Header from '@components/header'
import { WaitlistBtn } from '@components/header/header.styles'
import Waitlist from '@components/waitlist'
import React from 'react'
import Link from 'next/link'
import { AboutSection, CardsOverall, ContentWrap, DownloadBtn, EmptyCard, ExplanationCards, ImageBannerWrap, IndexCircle, InvestBanner, InvestBannerInner, InvestLeftSide, InvestRightSide, MissionContentWrap, MissionSection, PioneersImageWrap, PioneersNameWrap, PioneersSection, ServiceFlexBox, ServiceFlexReverse, ServiceSection, ServiceTypesBox, SubCardsOverall, VisionFlex, VisionSection, WhyInteraxWrap, WrapGrey } from '../../components/styled/index.styles'

function Home() {
  return (
    <>
        <Header />  

        <WrapGrey>
          <div className="inner-wrap">
            <div className="header-wrap">
              <h2>Your Health & Wellness are our Priority</h2>
            </div>

            <div className="content-wrap">
              <p>We believe healthcare should be accessible to everyone regardless of location or social status.</p>
            </div>

            <div className="btn-wrap">
              <Link href={'/waitlist'}>
                <WaitlistBtn>
                  Join Waitlist
                </WaitlistBtn>
              </Link>
            </div>

            <ImageBannerWrap>
              <div className="image-subwrap"><img src="/assets/png/image-1.png"  className="image-1" /></div>
              <div className="image-subwrap"><img src="/assets/png/image-2a.png"  className="image-2" /></div>
              <div className="image-subwrap"><img src="/assets/png/image-2b.png"  className="image-2" /></div>
              <div className="image-subwrap"><img src="/assets/png/image-3.png"  className="image-3" /></div>
            </ImageBannerWrap>
          </div>
        </WrapGrey>
          

        <ServiceSection>
          <div className="inner-wrap">
            <div className="header-wrap">
              <div className="what-we-do">
                What we do
              </div>
            </div>

            <WhyInteraxWrap>
              {/* <div className="question-txt">
                <h5>Our services</h5>
              </div> */}

              <div className="answer-txt">
                <p>At interaX, your health and wellness are our priority, and we believe healthcare should be accessible to every Nigerian. That is why we tailored our services to meet your healthcare desires and solve your problems.</p>
              </div>
            </WhyInteraxWrap>

            <ServiceTypesBox>
              <ServiceFlexBox>
                <div className="txt-wrapper">
                  <div className="inner-txt-wrapper">
                    <h5>Online medical consultations:</h5>

                    <p>Access medical expertise from anywhere in Nigeria without having to travel long distances or wait for hours in a crowded clinic.</p>
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
                    <h5>Access to a network of verified healthcare professionals across Nigeria:</h5>

                    <p>Access a wide range of medical specialities, and connect to a professional to get the care that you deserve. </p>
                  </div>
                </div>
              </ServiceFlexReverse>

              <ServiceFlexBox>
                <div className="txt-wrapper">
                  <div className="inner-txt-wrapper">
                    <h5>Virtual appointment scheduling and booking:</h5>

                    <p>Book medical appointments online easily and conveniently without leaving your home or office.</p>
                  </div>
                </div>

                <div className="img-wrapper">
                  <img src="/assets/png/appointment.png"/>
                </div>
              </ServiceFlexBox>

              <ServiceFlexReverse>
                <div className="img-wrapper">
                  <img src="/assets/png/patient-record.png" />
                </div>

                <div className="txt-wrapper">
                  <div className="inner-txt-wrapper">
                    <h5>Electronic medical records management for patients and healthcare providers:</h5>

                    <p>Access your medical records anytime, anywhere, and securely share them with your healthcare providers.</p>
                  </div>
                </div>
              </ServiceFlexReverse>

              <ServiceFlexBox>
                <div className="txt-wrapper">
                  <div className="inner-txt-wrapper">
                    <h5>Health education and awareness campaigns for Nigerians:</h5>

                    <p>Stay informed and empowered about your health and wellness and access reliable and up-to-date health information through our blog and communities.</p>
                  </div>
                </div>

                <div className="img-wrapper">
                  <img src="/assets/png/heart.png"/>
                </div>
              </ServiceFlexBox>
            </ServiceTypesBox>
          </div>
        </ServiceSection>

        <AboutSection>
          <div className="inner-wrap">
            <div className="header-wrap">
              <div className="what-we-do">
                What we do
              </div>
            </div>

            <WhyInteraxWrap>
              <div className="question-txt">
                <h5>Why interaX?</h5>
              </div>

              <div className="answer-txt">
                <p>We care about you well enough to create a platform that meets your healthcare needs. But do you care enough?
                    Well, if you don't mind settling for average healthcare, then you probably don't need interaX. But if you want high-quality care, choose:
                </p>
              </div>
            </WhyInteraxWrap>

            <CardsOverall>
              <div className="left-side"></div>

              <div className="right-side">
                <SubCardsOverall>
                  <EmptyCard />
                  <ExplanationCards>
                    <h6>Innovative:</h6>

                    <div className="content"><p>interaX strives to be innovative and constantly seeks out new ways to improve the delivery of healthcare services to you.</p></div>

                    <div className="card-line">
                      <IndexCircle>
                        I
                      </IndexCircle>
                    </div>
                  </ExplanationCards>
                </SubCardsOverall>

                <SubCardsOverall>
                  <EmptyCard />
                  <ExplanationCards>
                    <h6>Nurturing:</h6>

                    <div className="content"><p>interaX provides a nurturing and caring community that puts your needs first.</p></div>

                    <div className="card-line">
                      <IndexCircle>
                        N
                      </IndexCircle>
                    </div>
                  </ExplanationCards>
                </SubCardsOverall>

                <SubCardsOverall>
                  <EmptyCard />
                  <ExplanationCards>
                    <h6>Trustworthy:</h6>

                    <div className="content"><p>interaX is a trustworthy platform that provides high-quality, reliable online healthcare services in Nigeria.</p></div>

                    <div className="card-line">
                      <IndexCircle>
                        T
                      </IndexCircle>
                    </div>
                  </ExplanationCards>
                </SubCardsOverall>

                <SubCardsOverall>
                  <EmptyCard />
                  <ExplanationCards>
                    <h6>Efficient:</h6>

                    <div className="content"><p>interaX is efficient and provides quick and timely access to healthcare services and information.
                    </p></div>

                    <div className="card-line">
                      <IndexCircle>
                        E
                      </IndexCircle>
                    </div>
                  </ExplanationCards>
                </SubCardsOverall>

                <SubCardsOverall>
                  <EmptyCard />
                  <ExplanationCards>
                    <h6>Responsive:</h6>

                    <div className="content"><p>interaX is responsive to your needs and offers you personalised care and attention.</p></div>

                    <div className="card-line">
                      <IndexCircle>
                        R
                      </IndexCircle>
                    </div>
                  </ExplanationCards>
                </SubCardsOverall>

                <SubCardsOverall>
                  <EmptyCard />
                  <ExplanationCards>
                    <h6>Accessible:</h6>

                    <div className="content"><p>interaX is accessible from anywhere across Nigeria, regardless of your location or socioeconomic status.</p></div>

                    <div className="card-line">
                      <IndexCircle>
                        A
                      </IndexCircle>
                    </div>
                  </ExplanationCards>
                </SubCardsOverall>

                <SubCardsOverall>
                  <EmptyCard />
                  <ExplanationCards>
                    <h6>eXpertise:</h6>

                    <div className="content"><p>interaX community has registered and professional healthcare service providers in Nigeria to ensure you have the best possible care.</p></div>

                    <div className="card-line">
                      <IndexCircle>
                        X
                      </IndexCircle>
                    </div>
                  </ExplanationCards>
                </SubCardsOverall>
              </div>
            </CardsOverall>
          </div>
        </AboutSection>

        {/* <PioneersSection>
          <div className="blue-wrap">
            <div className="text-wrap">
              <h3>Our Pioneers</h3>
            </div>
          </div>

          <div className="white-wrap"></div>

          <PioneersImageWrap>
            <div className="image-box">
              <img src="/assets/png/roy.png" />
              <PioneersNameWrap>
                Komolafe Oluseyi
              </PioneersNameWrap>
            </div>

            <div className="image-box">
              <img src="/assets/png/roy.png" />
              <PioneersNameWrap>
                Ogunleye Akinleye
              </PioneersNameWrap>
            </div>

            <div className="image-box">
              <img src="/assets/png/roy.png" />
              <PioneersNameWrap>
                Faboro Emmanuel
              </PioneersNameWrap>
            </div>
          </PioneersImageWrap>
        </PioneersSection> */}

        <InvestBanner>
          <InvestBannerInner>
            <InvestLeftSide>
              <div className="header">
                <h2>Invest in your health</h2>
              </div>

              <div className="content">
              Download InteraX today <br/>
              Download interaX for free on your Android and Apple devices for quick, easy and free access to the best healthcare professionals in Nigeria as well as top medical institutions.
              </div>

              <div className="download-btn-wrap">
                <DownloadBtn>
                  <img src="/assets/svg/google-icon.svg"/>
                  <div className="txt-wrap">
                    <p>Get it on</p>
                    <h5>Google Play</h5>
                  </div>
                </DownloadBtn>

                <DownloadBtn>
                  <img src="/assets/svg/apple-icon.svg"/>
                  <div className="txt-wrap">
                    <p>Download on the</p>
                    <h5>App Store</h5>
                  </div>
                </DownloadBtn>
              </div>
            </InvestLeftSide>

            <InvestRightSide>
              <img src="/assets/png/phone-banner.png" />
            </InvestRightSide>
          </InvestBannerInner>
        </InvestBanner>

        <Waitlist />
        <Footer />

    </>
  )
}

export default Home
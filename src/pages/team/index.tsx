import Footer from '@components/footer'
import Header from '@components/header'
import Waitlist from '@components/waitlist'
import React from 'react'
import { HeaderText, ImageWrapper, OurTeamWrap, TeamImageSection, TeamOverallWrap, TextSection } from './team.styles'

const Team = () => {
    
  return (
    <>
        <Header />

        <TeamOverallWrap>
            <TextSection>
                <OurTeamWrap>
                    Our Team
                </OurTeamWrap>

                <HeaderText>
                    <h2>Meeting the team that put interaX all together</h2>
                </HeaderText>
            </TextSection>

            <TeamImageSection>
                <div className="inner-wrapper">
                    <ImageWrapper>
                        <img src="/assets/png/team.png" alt="" />
                        <div className="absolute-box">
                            Oluseyi
                        </div>
                    </ImageWrapper>

                    <ImageWrapper>
                        {/* <img src="/assets/png/team.png" alt="" /> */}
                        <div className="absolute-box">
                            Akinleye
                        </div>
                    </ImageWrapper>

                    <ImageWrapper>
                        {/* <img src="/assets/png/team.png" alt="" /> */}
                        <div className="absolute-box">
                            Emmanuel
                        </div>
                    </ImageWrapper>

                    <ImageWrapper>
                        <img src="/assets/png/team.png" alt="" />
                        <div className="absolute-box">
                            Oluseyi
                        </div>
                    </ImageWrapper>

                    <ImageWrapper>
                        {/* <img src="/assets/png/team.png" alt="" /> */}
                        <div className="absolute-box">
                            Akinleye
                        </div>
                    </ImageWrapper>

                    <ImageWrapper>
                        {/* <img src="/assets/png/team.png" alt="" /> */}
                        <div className="absolute-box">
                            Emmanuel
                        </div>
                    </ImageWrapper>

                    <ImageWrapper>
                        <img src="/assets/png/team.png" alt="" />
                        <div className="absolute-box">
                            Oluseyi
                        </div>
                    </ImageWrapper>

                    <ImageWrapper>
                        {/* <img src="/assets/png/team.png" alt="" /> */}
                        <div className="absolute-box">
                            Akinleye
                        </div>
                    </ImageWrapper>

                    <ImageWrapper>
                        {/* <img src="/assets/png/team.png" alt="" /> */}
                        <div className="absolute-box">
                            Emmanuel
                        </div>
                    </ImageWrapper>
                </div>
            </TeamImageSection>
        </TeamOverallWrap>

        <Waitlist />
        <Footer />
    </>
  )
}

export default Team
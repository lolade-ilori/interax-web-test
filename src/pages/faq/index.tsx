import AboutTab from '@components/aboutTab'
import Footer from '@components/footer'
import Header from '@components/header'
import Waitlist from '@components/waitlist'
import React from 'react'
import { FaqBanner, QuestionsSection, TabPills } from './faq.styles'

const Faq = () => {
  return (
    <>
        <Header/>

        <FaqBanner>
            <div className="inner-wrap">
                <div className="btn-wrap">
                    <div className="btn">
                        FAQ
                    </div>
                </div>

                <div className="head-wrap">
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div className="content-txt">
                    <p>Have questions? We’re here to help</p>
                </div>
            </div>
        </FaqBanner>

        <QuestionsSection>
            <div className="inner-wrap">
                <div className="just-question-txt">
                    <h4>Questions</h4>
                </div>

                <div className="right-side">
                    <div className="header-wrap">
                        <h3>For easy navigation of the end users, the FAQs should be divided into sections.</h3>
                    </div>

                    <div className="pills-wrapper">
                        <TabPills>
                            About interaX
                        </TabPills>

                        <TabPills>
                            Functional-based
                        </TabPills>

                        <TabPills>
                            Task-oriented
                        </TabPills>

                        <TabPills>
                            Technical
                        </TabPills>

                        <TabPills>
                            Security
                        </TabPills>
                    </div>

                    <div className="tabs-section">
                        <AboutTab />
                    </div>
                </div>
            </div>
        </QuestionsSection>


        <Waitlist />
        <Footer/>
    </>
  )
}

export default Faq
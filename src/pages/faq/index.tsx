import AboutTab from '@components/tabs/aboutTab'
import Footer from '@components/footer'
import Header from '@components/header'
import Waitlist from '@components/waitlist'
import React, { useState } from 'react'
import { FaqBanner, QuestionsSection, TabPills } from '../../components/styled/faq.styles'
import SecurityTab from '@components/tabs/securityTab'
import TaskOrientedTab from '@components/tabs/taskOrientedTab'
import FunctionalBasedTab from '@components/tabs/functionalBased'

const Faq = () => {
    const [tabChosen, setTabChosen] = useState('About interaX')

    const TabsOption:any = [
        {name: 'About interaX'},
        {name: 'Functionality'},
        {name: 'Privacy and Security'},
    ] 

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
                        {
                            TabsOption?.map((item:any) => {
                                return (
                                    <TabPills active={item?.name === tabChosen ? true : false} onClick={() => {setTabChosen(item?.name)}}>
                                        {item?.name}
                                    </TabPills>
                                )
                            })
                        }
                    </div>

                    <div className="tabs-section">
                        { 
                            tabChosen === 'About interaX' &&
                            <AboutTab />
                        }

                        { 
                            tabChosen === 'Functionality' &&
                            <FunctionalBasedTab />
                        }

                        {    
                            tabChosen === 'Privacy and Security' &&
                            <SecurityTab />
                        }

                        
                        
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
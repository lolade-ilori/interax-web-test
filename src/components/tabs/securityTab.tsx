import React from 'react'
import { QuestionAnswerWrap } from './tab.styles'

const SecurityTab = () => {
  return (
    <>
        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Is the community secure and protected?</h3>
            </div>

            <div className="answer-wrap">
                <p>The interaX community is secure and protected. We prioritise the safety and privacy of our members and ensure that user data is kept private. Additionally, our platform allows for anonymous questions to be asked to protect users' identities.</p>
            </div>
        </QuestionAnswerWrap>        

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>How can I ensure that my personal information is protected when using the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>To help ensure the safety of your data, we encourage you to avoid sharing non-health-related information, such as phone numbers, addresses, or email addresses, when asking questions on the platform.</p>
            </div>
        </QuestionAnswerWrap>    

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Can I share my test results or medical records with other members of the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>The interaX community is exclusively for communication between users and healthcare professionals. Users can share test result images at their own risk, but we advise against sharing personal information. It's best to communicate with healthcare professionals via text, and avoid sharing images containing personal details.</p>
            </div>
        </QuestionAnswerWrap>    

        {/* <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Are there any guidelines for how to engage with others in the community in a respectful manner?</h3>
            </div>

            <div className="answer-wrap">
                <p>There are engagement rules in place to ensure a sane, respectful and healthy community. Read the interaX community rules here.)</p>
            </div>
        </QuestionAnswerWrap>     */}
    </>
  )
}

export default SecurityTab
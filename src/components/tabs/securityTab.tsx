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
                <p>The interaX platform allows you to report inaccuracies, false information (need to know if there is provision for this)</p>
            </div>
        </QuestionAnswerWrap>        

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>How can I ensure that my personal information is protected when using the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>(I need to know what security measures we have to respond to this)</p>
            </div>
        </QuestionAnswerWrap>    

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Can I share my test results or medical records with other members of the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>You can share your test results and medical records with community members. However, it is important to be mindful of the sensitive nature of personal medical information and take precautions to protect your privacy. Before sharing your information, consider whether the person you share it with has a legitimate need to know and whether they are authorised to access it. Maintaining confidentiality and respecting individuals' privacy is essential regarding personal medical information. Read our community engagement guidelines here (community engagement rules come here).</p>
            </div>
        </QuestionAnswerWrap>    

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Are there any guidelines for how to engage with others in the community in a respectful manner?</h3>
            </div>

            <div className="answer-wrap">
                <p>There are engagement rules in place to ensure a sane, respectful and healthy community. Read the interaX community rules here.)</p>
            </div>
        </QuestionAnswerWrap>    
    </>
  )
}

export default SecurityTab
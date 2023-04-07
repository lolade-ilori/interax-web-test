import Link from 'next/link'
import React from 'react'
import { QuestionAnswerWrap } from './tab.styles'

const AboutTab = () => {
  return (
    <>
        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>What is interaX?</h3>
            </div>

            <div className="answer-wrap">
                <p>interaX is an online healthcare platform</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Is interaX free?</h3>
            </div>

            <div className="answer-wrap">
                <p>interaX App is available for free download, so you can quickly get started with its unique features. And, if you are looking for even more value, there is a paid plan.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Are there any fees associated with being a member of the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>No fees are required to be a member of the interaX community</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Is interaX a verified healthcare platform?</h3>
            </div>

            <div className="answer-wrap">
                <p>interaX is registered under the relevant laws and regulations, and they comply with all necessary requirements. <Link href={'/'}>Click here to see the licence</Link> .</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>What is the best virtual healthcare app in Nigeria?</h3>
            </div>

            <div className="answer-wrap">
                <p>InteraX is the best online medical consultation app in Nigeria. InteraX provides access to quick, secure, quality and affordable healthcare services across Nigeria.</p>
            </div>
        </QuestionAnswerWrap>
    </>
  )
}

export default AboutTab
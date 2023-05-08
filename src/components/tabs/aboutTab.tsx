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
                <p>No fees are required to be a member of the interaX community.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Are the doctors on the platform verified?</h3>
            </div>

            <div className="answer-wrap">
                <p>We ensure that doctors are certified and registered under the relevant laws and regulations before adding them to the platform.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Can I talk to a medical doctor online in Nigeria for free?</h3>
            </div>

            <div className="answer-wrap">
                <p>Yes, with InteraX, you can access a huge directory of doctors in Nigeria, consult them anyday and anytime from the comfort of your mobile devices and get satisfactory answers to your medical concerns.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Can I access the community from any device?</h3>
            </div>

            <div className="answer-wrap">
                <p>We encourage using the mobile app as it offers seamless access. We're also exploring ways to improve website accessibility for everyone. Download interaX for Android and ioS devices.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Can I communicate with a doctor or healthcare professional through the app?</h3>
            </div>

            <div className="answer-wrap">
                <p>The interaX mobile application gives you quick access to registered healthcare professionals nationwide, saving you time and stress.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Is it possible to schedule online appointments or consultations through the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>While we currently offer chat as a means of communication, we're exploring the possibility of adding online appointments in the future. Our priority is to ensure that any new features we introduce meets your needs.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Can I ask questions and receive answers from the community's healthcare professionals or experts?</h3>
            </div>

            <div className="answer-wrap">
                <p>You can ask questions in the community and have healthcare professionals answer your questions.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Can I share interaX with people outside the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>Yes, you could be motivating someone to live healthier. You are welcome to share the application link with friends and family.</p>
            </div>
        </QuestionAnswerWrap>
    </>
  )
}

export default AboutTab
import React from 'react'
import { QuestionAnswerWrap } from './tab.styles'

const FunctionalBasedTab = () => {
  return (
    <>
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
                <p>Yes, you can access the interaX community through the website or the mobile app from any device. Download interaX for Android and ioS devices.</p>
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
                <h3>Is it possible to schedule virtual appointments or consultations through the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>You can schedule virtual appointments and consultations with healthcare professionals from the community. Read how to schedule a consultation here (How to schedule a virtual consultation). (I wrote and deleted about five times here, trying to determine the right response. I know people can consult professionals from the community, but I am not sure about making appointments, especially in hospitals)</p>
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
    </>
  )
}

export default FunctionalBasedTab
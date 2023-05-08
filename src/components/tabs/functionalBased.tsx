import React from 'react'
import { QuestionAnswerWrap } from './tab.styles'

const FunctionalBasedTab = () => {
  return (
    <>
        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>How can I report any inaccuracies or false information on the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>The platform allows you to report inaccuracies and false information.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Can I access information related to a specific medical condition or treatment?</h3>
            </div>

            <div className="answer-wrap">
                <p>To access information on specific medical conditions, you can use the search button on the application to see if there are already blog posts that answer your questions. Otherwise, you can consult a professional in the community.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Can I share information and resources with other members of the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>You can share information and resources only with doctors.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>How can I receive notifications for new posts or updates on the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>To stay ahead of the latest in the interaX community, you need to turn on notifications in your mobile device settings.</p>
            </div>
        </QuestionAnswerWrap>

        <QuestionAnswerWrap>
            <div className="question-wrap">
                <h3>Can I provide feedback or suggest new features for the community?</h3>
            </div>

            <div className="answer-wrap">
                <p>You can always provide feedback and suggestions through the contact option on the interaX application and through our social media channels.</p>
            </div>
        </QuestionAnswerWrap>
    </>
  )
}

export default FunctionalBasedTab
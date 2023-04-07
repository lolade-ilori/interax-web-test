import styled from 'styled-components'

export const QuestionAnswerWrap = styled.div `
    margin-bottom: 30px;

    .question-wrap {
        h3 {
            font-size: 20px;
            font-weight: 600;
            color: #000;
        }
    }

    .answer-wrap {
        border-radius: 30px;
        border: solid 1px #D8D8D8;
        padding: 15px 30px;
        margin-top: 15px;
        p {
            color: #000;
            font-size: 15px;

            a {
                color: #1F2ADE;
            }
        }
    }
`
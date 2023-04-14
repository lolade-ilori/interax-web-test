import styled from "styled-components";

export const SubscriptionWrap = styled.div `
    background-color: #1F2ADE;
    width: 100%;
    position: relative;

    .inner-sub-wrap {
        padding: 60px 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const SubscriptionTxt = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    padding: 0 230px;
`

export const MailWrap = styled.div `
    border: solid 1px #fff;
    border-radius: 50px;
    display: flex;
    padding: 10px;
    width: 60%;

    input {
        outline: none;
        border: none;
        background-color: transparent;
        width: 100%;
        color: #fff;
        padding-left: 20px;


        &::placeholder {
            color: #6F77FF;
            font-size: 15px;
        }
    }

    .submit-btn {
        border-radius: inherit;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1F2ADE;
        font-size: 12px;
        cursor: pointer;
        padding: 15px 40px;
        height: 100%
    }
`


import { WaitlistHeader } from '@components/waitlist/waitlist.styles';
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

        @media only screen and (max-width: 1324px) {
            padding: 60px 150px;
        }

        @media only screen and (max-width: 992px) {
            padding: 60px 80px;
        }

        @media only screen and (max-width: 685px) {
            padding: 60px 30px;
        }

        @media only screen and (max-width: 360px) {
            padding: 60px 15px;
        }
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

    @media only screen and (max-width: 1123px) {
        padding: 0 150px;
    }

    @media only screen and (max-width: 963px) {
        padding: 0 150px;
    }

    @media only screen and (max-width: 825px) {
        padding: 0 80px;
    }

    @media only screen and (max-width: 595px) {
        padding: 0 40px;
        font-size: 15px;
    }

    @media only screen and (max-width: 435px) {
        padding: 0 20px;
    }
`

export const SubscriptionListHeader = styled(WaitlistHeader) `
    @media only screen and (max-width: 832px) {
        font-size: 18px;
    }

    @media only screen and (max-width: 685px) {
        font-size: 16px;
        letter-spacing: 0.22em;
    }

    @media only screen and (max-width: 479px) {
        font-size: 15px;
        white-space: nowrap;
    }

    @media only screen and (max-width: 413px) {
        font-size: 13px;
    }
`

export const MailWrap = styled.div `
    border: solid 1px #fff;
    border-radius: 50px;
    display: flex;
    padding: 10px;
    width: 60%;

    @media only screen and (max-width: 600px) {
        width: 80%;
        margin-top: 30px;
    } 

    @media only screen and (max-width: 500px) {
        width: 95%;
    } 

    input {
        outline: none;
        border: none;
        background-color: transparent;
        width: 100%;
        color: #fff;
        padding-left: 20px;

        @media only screen and (max-width: 600px) {
            padding: 12px 15px;
        } 


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
        height: 100%;

        @media only screen and (max-width: 600px) {
            display: none;
        } 
    }
`

export const MobileSubmitBtn = styled.div `
    display: none;

    @media only screen and (max-width: 600px) {
        border-radius: 30px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1F2ADE;
        font-size: 15px;
        cursor: pointer;
        font-weight: 600;
        padding: 17px 40px;
        width: 80%;
        margin-top: 20px;
    }

    @media only screen and (max-width: 500px) {
        width: 95%;
    } 
`


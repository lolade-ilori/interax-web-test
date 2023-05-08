import styled from "styled-components";

export const TeamOverallWrap = styled.section `
    background-color: #EEEEEE;
    width: 100%;
    height: 100%;
`
export const TextSection = styled.div `
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 130px;
    padding-bottom: 70px;
`

export const OurTeamWrap = styled.div `
    display: flex;
    justify-content: center;
    color: #1F2ADE;
    font-size: 13px;
    font-weight: 600;
    border-radius: 30px;
    min-width: 200px;
    padding: 13px 0;
    background-color: rgba(31, 42, 222, 0.1);
`

export const HeaderText = styled.div `
    display: flex;
    justify-content: center;
    /* padding: 0 300px; */
    padding-top: 40px;

    @media only screen and (max-width: 1414px)  {
        padding: 0;
        padding-top: 40px;
    }

    h2 {
        color: #1F2ADE;
        font-size: 65px;
        text-align: center;
        font-family: 'RecoletaAlt-Regular';
        font-weight: 500;
        line-height: 60px;
        width: 70%;

        @media only screen and (max-width: 1164px)  {
            width: 80%;
            font-size: 55px;
        }

        @media only screen and (max-width: 865px) {
            font-size: 50px;
            width: 85%;
        } 

        @media only screen and (max-width: 552px) {
            font-size: 40px;
            line-height: 45px;
        } 

        @media only screen and (max-width: 440px) {
            font-size: 38px;
            line-height: 40px;
        } 
    }
`

export const TeamImageSection = styled.section `
    display: flex;
    justify-content: center;

    .inner-wrapper {
        padding: 50px 0px;
        padding-bottom: 150px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        width: 60%;

        @media only screen and (max-width: 1335px) {
            width: 70%;
        }

        @media only screen and (max-width: 1100px) {
            width: 80%;
        } 

        @media only screen and (max-width: 895px) {
            width: 90%;
        } 

        @media only screen and (max-width: 800px) {
            width: 70%;
        }

        @media only screen and (max-width: 700px) {
            width: 80%;
        }

        @media only screen and (max-width: 600px) {
            width: 90%;
        } 

        @media only screen and (max-width: 500px) {
            gap: 25px;
        } 

        @media only screen and (max-width: 472px)  {
            gap: 20px;
            width: 70%;
        }
    }
`

export const ImageWrapper = styled.div `
    border-radius: 20px;
    flex: 30%;
    background-color: #D9D9D9;
    position: relative;
    height: 320px;

    @media only screen and (max-width: 800px) {
        flex: 45%;
        width: 45%;
    } 

    @media only screen and (max-width: 472px) {
        flex: 50%;
    } 

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: inherit;
    }

    .absolute-box {
        border-radius: 30px;
        padding: 10px 15px;
        width: 80%;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        font-weight: 600;
        position: absolute;
        background: #fff;
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
`
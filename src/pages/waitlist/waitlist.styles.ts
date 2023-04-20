import styled from "styled-components";

export const WaitlistWrap = styled.section `
    min-height: 100vh;
    width: 100%;
    border: solid 1px #1F2ADE;
    background-color: #1F2ADE;
    position: relative;

    .waitlist-inner {
        position: relative;
        /* z-index: 20; */
        background-color: transparent;
    }
`

export const AbsoluteWaitlistWrap = styled.div `
    position: absolute;
    top: 0;
    z-index: 3;
    left:50%; 
    transform:translate(-50%, -50%); 
    width: 70%;
    /* height: 100%; */

    img {
        width: 100%;
        object-fit: cover;
    }
`

export const WaitlistHeader = styled.div `
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 20;

    img {
        cursor: pointer;
    }
`

export const WaitlistTxtWrap = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    justify-content: center;
    align-items: center;
    row-gap: 30px;

    h4 {
        color: #fff;
        font-family: 'RecoletaAlt-Regular';
        font-size: 25px;
        font-weight: 500;
        text-align: center;
    }

    h2 {
        color: #fff;
        font-size: 55px;
        font-weight: 500;
        text-align: center;
        width: 50%;
    }
`

export const WaitlistFormOverall = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`

export const WaitlistForm = styled.form `
    width: 60%;

`

export const SubFormWrap = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
    padding: 10px 0;
`

export const WaitliistInput = styled.input `
    background-color: transparent;
    outline: none;
    border: solid 0.45px #fff;
    border-radius: 6px;
    padding: 17px;
    width: 100%;
    flex: 45%;
    color: #fff;
    font-size: 15px;

    &::placeholder {
        color: #fff;
    }
`

export const JoinWaitlisBtn = styled.button `
    background-color: #fff;
    border-radius: 6px;
    border: none;
    width: 100%;
    color: #1F2ADE;
    cursor: pointer;
    padding: 17px 0; 
    margin-top: 15px;
    font-size: 15px;
`

export const WaitlistFooter = styled.footer `
    display: flex;
    align-items: center;
    justify-content: center;
    row-gap: 15px;
    padding-bottom: 20px; 
    flex-direction: column;
    margin-top: 120px;
    position: absolute;
    bottom: 0;
    width: 100%;


    h4 {
        font-size: 17px;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        letter-spacing: 0.37em;
    }

    .flex-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .circle {
            background-color: #fff;
            border-radius: 50%;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 15px;
            }
        }
    }
`
import styled from 'styled-components'

export const WaitlistWrap = styled.section `
    width: 100%;
    /* position: relative; */
    background-color: #1F2ADE;
`

export const WaitlistInner = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 250px;

    @media only screen and (max-width: 1200px) {
        padding: 40px 150px;
    }

    @media only screen and (max-width: 992px) {
        padding: 40px 80px;
    }

    @media only screen and (max-width: 767px) {
        padding: 40px;
    }
`

export const WaitlistHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px 0;
    width: 100%;
    border-radius: 30px;
    background-color: #2A35E6;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.42em;
    font-size: 23px;

    @media only screen and (max-width: 550px) {
        font-size: 18px;
    }

    @media only screen and (max-width: 365px) {
        font-size: 16px;
    }
`

export const WaitlistForm = styled.form `
    padding-top: 40px;
`

export const WailtistFlex = styled.div `
    display: flex;
    align-items: center;
    gap: 40px;
    padding-bottom: 30px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: unset;
    }
`

export const WaitlistInput = styled.input `
    border: solid 1px #8D94FF;
    border-radius: 30px;
    padding: 20px;
    flex: 47%;
    background-color: transparent;
    outline: none;
    color: #fff;

    &::placeholder {
        color: #8D94FF;
        font-size: 14px;
    }
`

export const WaitlistSubmitWrap = styled.div `
    display: flex;
    justify-content: flex-start;
    padding: 20px 0;
`

export const SubmitBtn = styled.button <{onClick?: any}>  `
    border: none;
    outline: none;
    background-color: #fff;
    color: #1F2ADE;
    border-radius: 25px;
    padding: 15px 30px;
    cursor: pointer;
    width: 200px;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`

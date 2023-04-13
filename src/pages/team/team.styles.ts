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
    padding-bottom: 100px;
`

export const OurTeamWrap = styled.div `
    display: flex;
    justify-content: center;
    color: #1F2ADE;
    font-size: 13px;
    font-weight: 600;
    border-radius: 30px;
    min-width: 200px;
    padding: 10px 0;
    background-color: rgba(31, 42, 222, 0.1);
`

export const HeaderText = styled.div `
    display: flex;
    justify-content: center;
    padding: 0 340px;
    padding-top: 40px;

    h2 {
        color: #1F2ADE;
        font-size: 65px;
        text-align: center;
        font-family: 'RecoletaAlt-Regular';
        font-weight: 500;
        line-height: 60px;
    }
`

export const TeamImageSection = styled.section `

    .inner-wrapper {
        padding: 50px 300px;
        padding-bottom: 150px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }
`

export const ImageWrapper = styled.div `
    border-radius: 20px;
    flex: 30%;
    background-color: #D9D9D9;
    position: relative;
    height: 320px;

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
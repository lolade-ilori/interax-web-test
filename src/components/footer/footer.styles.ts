import styled from 'styled-components'

export const FooterWrap = styled.footer `
    background: rgba(250, 226, 246, 0.2);
    width: 100%;
    position: relative;
`

export const FooterInnerWrap = styled.div `
    display: block;
    padding: 40px;
`

export const FooterTop = styled.div `
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding-bottom: 50px;

    @media only screen and (max-width: 767px) {
        flex-direction: column;
        row-gap: 20px;
    }
`

export const FooterColumn = styled.div `
    flex: 30%;
    margin-top: 0;

    @media only screen and (max-width: 767px) {
        margin-top: 15px;
    }

    & .logo-wrap {
        margin-bottom: 13px;
    }

    & .social-icons-wrap {
        margin-top: 22px;
        display: block;

        @media only screen and (max-width: 767px) {
            display: none;
        }

        ul {
            display: flex;
            align-items: center;
            padding: 0px;
            gap: 30px;
            list-style: none;

            .social-circle {
                border-radius: 50%;
                background-color: #1F2ADE;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 8px;
                cursor: pointer;

                img {
                    width: 12px;
                }
            }
        }
    }

    & .social-icons-wrap.support-sect {
        display: none;

        @media only screen and (max-width: 767px) {
            display: block;
        }
    }

    & .column-header {
        font-size: 20px;
        padding-bottom: 40px;

        @media only screen and (max-width: 767px) {
            padding-bottom: 20px;
        }
    }

    & .column-lists {
        list-style: none;
        margin: 0;
        padding: 0;
        /* margin-top: 30px; */

        li {
            margin-bottom: 15px;

            a {
                color: #000;
                text-decoration: none;
                font-size: 16px;
            }
        }
    }
`

export const FooterBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
        margin: 0;
        color: #000;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 0.47em;

        @media only screen and (max-width: 767px) {
            font-size: 14px;
        }

        @media only screen and (max-width: 605px) {
            font-size: 13px;
            letter-spacing: 0.2em;
        }

        @media only screen and (max-width: 411px) {
            font-size: 11px;
            letter-spacing: 0.1em;
        }
    }
`
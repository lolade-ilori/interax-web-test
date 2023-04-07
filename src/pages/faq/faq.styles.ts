import styled from "styled-components";

export const FaqBanner = styled.div `
    position: relative;
    background-color: #EEEEEE;
    width: 100%;
    border-bottom: solid 1px #CFCFCF;

    @media only screen and (max-width: 600px) {
        border-bottom: unset;
    }

    .inner-wrap {
        padding-top: 150px;
        padding-bottom: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .btn-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;

            @media only screen and (max-width: 600px) {
                margin-bottom: 20px;
            }

            .btn {
                border-radius: 30px;
                padding: 11px 0;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 150px;
                color: #1F2ADE;
                font-size: 13px;
                background: rgba(31, 42, 222, 0.1);
                font-weight: 600;
            }
        }

        .head-wrap {
            h2 {
                color: #1F2ADE;
                font-size: 60px;
                font-weight: 500;
                font-family: 'RecoletaAlt-Regular';

                @media only screen and (max-width: 992px) {
                    font-size: 50px;
                }

                @media only screen and (max-width: 760px) {
                    font-size: 40px;
                }

                @media only screen and (max-width: 600px) {
                    font-size: 30px;
                }

                @media only screen and (max-width: 420px) {
                    font-size: 25px;
                }
            }
        }

        .content-txt {
            margin-top: 40px;

            @media only screen and (max-width: 767px) {
                margin-top: 20px;
            }

            @media only screen and (max-width: 600px) {
                margin-top: 10px;
            }

            @media only screen and (max-width: 420px) {
                margin-top: 5px;
            }

            p {
                color: #000;
                font-size: 20px;

                @media only screen and (max-width: 600px){
                    font-size: 16px;
                }

                @media only screen and (max-width: 420px) {
                    font-size: 14px;
                }
            }
        }
    }
`

export const QuestionsSection = styled.section `
    background-color: #EEEEEE;
    min-height: 400px;

    .inner-wrap {
        padding: 80px 150px;
        display: flex;
        gap: 30px;

        @media only screen and (max-width: 1200px) {
            padding: 80px;
        }

        @media only screen and (max-width: 992px) {
            padding: 40px;
        }

        @media only screen and (max-width: 600px) {
            flex-direction: column;
            padding: 40px;
            padding-bottom: 80px;
        }

        .just-question-txt {
            flex: 20%;
            h4 {
                color: #000;
                font-size: 20px;
                font-weight: 500;

                @media only screen and (max-width: 600px) {
                    font-size: 15px;
                }
            }
        }

        .right-side {
            flex: 70%;
            .header-wrap {
                padding-right: 350px;

                @media only screen and (max-width: 1400px) {
                    padding-right: 150px;
                }

                @media only screen and (max-width: 992px) {
                    padding-right: 50px;
                }

                @media only screen and (max-width: 600px) {
                    padding-right: 0px;
                }
                h3 {
                    font-size: 30px;
                    font-weight: 600;

                    @media only screen and (max-width: 992px) {
                        font-size: 24px;
                    }

                    @media only screen and (max-width: 600px) {
                        font-size: 20px;
                    }
                }
            }

            .pills-wrapper {
                padding: 40px 0;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 15px;
            }

            .tabs-section {
                margin-top: 40px;
            }
        }
    }
`

export const TabPills = styled.div `
    border-radius: 30px;
    padding: 15px 30px;
    border: solid 1px #1F2ADE;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    color: #1F2ADE;
    cursor: pointer;
    white-space: nowrap;

    @media only screen and (max-width: 600px) {
        padding: 10px 15px;
        font-size: 12px;
    }
`
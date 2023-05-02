import styled from "styled-components";

export const AboutBanner = styled.div `
    width: 100%;
    height: 500px;
    background-color: #1F2ADE;
    position: relative;

    @media only screen and (max-width: 1100px) {
        height: 450px;
    }

    .inner-wrap {
        padding-top: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        .header-wrap {
            padding: 0 420px;

            @media only screen and (max-width: 1350px) {
                padding: 0 300px;
            }

            @media only screen and (max-width: 1100px) {
                padding: 0 300px ;
            }

            @media only screen and (max-width: 992px) {
                padding: 0 150px;
            }

            @media only screen and (max-width: 663px) {
                padding: 0 100px;
            }

            @media only screen and (max-width: 530px) {
                padding: 0 50px;
            }

            h2 {
                font-size: 65px;
                text-align: center;
                color: #fff;
                line-height: 70px;
                font-family: 'RecoletaAlt-Regular';
                font-weight: 500;

                @media only screen and (max-width: 1100px) {
                    font-size: 50px;
                }

                @media only screen and (max-width: 663px) {
                    font-size: 45px;
                    line-height: 50px;
                }

                @media only screen and (max-width: 430px) {
                    font-size: 40px;
                }   

                @media only screen and (max-width: 390px) {
                    font-size: 35px;
                }   
            }
        }
    }
`

export const BannerImg = styled.div `
    position: absolute;
    top:110%; 
    left:50%; 
    transform:translate(-50%, -50%);
    width: 70%;
    z-index: 30;

    @media only screen and (max-width: 992px) {
        width: 80%;
    }

    @media only screen and (max-width: 767px) {
        width: 90%;
    }

    @media only screen and (max-width: 670px) {
        height: 400px;
    }

    img {
        height: 100%;
        width: 100%;
        border-top-left-radius: 30px;
        border-bottom-right-radius: 30px;

        @media only screen and (max-width: 670px) {
            object-fit: cover;
        }
    }
`

export const AboutSection = styled.section `
    background-color: #fff;
    min-height: 700px;
    position: relative;
    width: 100%;

    .absolute-img {
        width: 90%;
        height: 90%;
        left: 60px;
        bottom: 0;
        position: absolute;

        @media only screen and (max-width: 670px) {
            left: unset;
        }
    }

    .subsection {
        padding: 0 250px;
        padding-top: 380px;
        padding-bottom: 100px;
        position: relative;
        z-index: 1;

        @media only screen and (max-width: 1100px) {
            padding: 0 150px;
            padding-top: 380px;
            padding-bottom: 100px;
        }

        @media only screen and (max-width: 992px) {
            padding: 0 100px;
            padding-top: 380px;
        }

        @media only screen and (max-width: 885px) {
            padding: 0 50px;
            padding-top: 380px;
        }

        @media only screen and (max-width: 480px) {
            padding: 0 40px;
            padding-top: 380px;
        }
    }
`


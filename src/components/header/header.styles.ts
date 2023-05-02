import styled from 'styled-components'

export const InteraxHeader = styled.header `
    height: 80px;
    width: 100%;
    padding: 0 50px;
    position: absolute;
    z-index: 100;
    background-color: #ffffff;
    box-shadow: 0px 2px 16px rgba(231, 231, 231, 0.2);

    @media only screen and (max-width: 450px) {
        padding: 0 20px;
    }
`

export const HeaderOverlay = styled.div <{active?: boolean}>  `
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    z-index: 400;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    display: ${(props:any) => props.active ? 'block' : 'none'}
`

export const InteraxDarkHeader = styled(InteraxHeader) `
    box-shadow: unset;
    background-color: transparent;
    /* z-index: unset; */
`

export const HeaderNav = styled.nav `
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;

    .logo-wrap {
        /* border: solid 1px green; */
        img {
            cursor: pointer;
        }
    }

    .action-btns-wrap {
        /* border: solid 1px blue; */
        position: relative;

        ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
            align-items: center;
            column-gap: 70px;

            @media only screen and (max-width: 1024px) {
                column-gap: 40px;
            }

            @media only screen and (max-width: 767px) {
                display: none;
            }

            li a {
                text-decoration: none;
                color: ${(props:any) => props.theme === ' light' ? '#fff' : '#000'};
                font-size: 18px;

                @media only screen and (max-width: 1024px) {
                    font-size: 16px;
                }

            }
        }

        .hamburger {
            display: none;

            img {
                width: 25px;
                cursor: pointer;
            }

            @media only screen and (max-width: 767px)  {
                display: block;
            }
        }
    }

    .mobile-menu {
        display: none;

        @media only screen and (max-width: 767px)  {
            display: block;
            width: 40%;
            background-color: #1F2ADE;
            box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);
            position: fixed;
            top: 0;
            right: -800px;
            height: 100%;
            z-index: 600;
            transition: right 0.3s ease;
            

            &.active-mobile {
                right: 0;
            }

            .inner-wrapper {
                padding: 30px;

                .nav-list {
                    ul {
                        list-style: none;

                        li {
                            padding: 20px 0;
                            a {
                                text-decoration: none;
                                color: #fff;
                                font-weight: 600;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 639px) {
            width: 50%;
        } 

        @media only screen and (max-width: 512px) {
            width: 60%;
        } 

        @media only screen and (max-width: 432px) {
            width: 70%;
        } 

        @media only screen and (max-width: 360px) {
            width: 80%
        } 
    }
`

export const DarkHeaderNav = styled(HeaderNav) `
    .action-btns-wrap {
        ul {
            li a {
                color: #fff;
            }
        }
    }
`

export const WaitlistBtn = styled.button `
    border: none;
    outline: none;
    border-radius: 30px;
    background-color: #1F2ADE;
    color: #fff;
    padding: 14px 30px;
    cursor: pointer;
`

export const DarkWaitlistBtn = styled(WaitlistBtn) `
    background-color: #fff;
    color: #1F2ADE;
`

export const CancelMenu = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 20px 0;
`